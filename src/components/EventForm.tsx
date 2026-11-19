import type { CreateEventRequest } from '../generated/sdk';

type EventFormProps = {
  eventData: CreateEventRequest;
  loading: boolean;
  message: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function EventForm({
  eventData,
  loading,
  message,
  onChange,
  onSubmit,
}: EventFormProps) {
  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="event_name"
          placeholder="Event Name"
          value={eventData.event_name}
          onChange={onChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={eventData.location}
          onChange={onChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <label className="block">
          Start Date
          <input
            type="datetime-local"
            name="start_date"
            value={eventData.start_date}
            onChange={onChange}
            required
            className="w-full border rounded-lg p-3 mt-1"
          />
        </label>

        <label className="block">
          End Date
          <input
            type="datetime-local"
            name="end_date"
            value={eventData.end_date}
            onChange={onChange}
            required
            className="w-full border rounded-lg p-3 mt-1"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default EventForm;
