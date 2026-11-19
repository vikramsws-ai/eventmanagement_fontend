import { useState } from 'react';
import axios from 'axios';
import type { CreateEventRequest } from '../generated/sdk';
import Api from '../api/Api';
import EventForm from '../components/EventForm';

function EventFormContainer() {
  const [eventData, setEventData] = useState<CreateEventRequest>({
    event_name: '',
    location: '',
    start_date: '',
    end_date: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage('');

      const response = await Api.createEvent(eventData);

      console.log(response.data);
      setMessage('Event created successfully!');

      setEventData({
        event_name: '',
        location: '',
        start_date: '',
        end_date: '',
      });
    } catch (error) {
      console.error('Create event error:', error);

      if (axios.isAxiosError(error)) {
        console.log('Status:', error.response?.status);
        console.log('Backend response:', error.response?.data);
      }

      setMessage('Failed to create event.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventForm
      eventData={eventData}
      loading={loading}
      message={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default EventFormContainer;
