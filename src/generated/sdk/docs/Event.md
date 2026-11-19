# Event

## Properties

| Name            | Type       | Description | Notes                             |
| --------------- | ---------- | ----------- | --------------------------------- |
| **event_id**    | **string** |             | [default to undefined]            |
| **event_name**  | **string** |             | [default to undefined]            |
| **description** | **string** |             | [optional] [default to undefined] |
| **location**    | **string** |             | [default to undefined]            |
| **start_date**  | **string** |             | [default to undefined]            |
| **end_date**    | **string** |             | [default to undefined]            |
| **created_at**  | **string** |             | [readonly] [default to undefined] |
| **updated_at**  | **string** |             | [readonly] [default to undefined] |

## Example

```typescript
import { Event } from './api';

const instance: Event = {
  event_id,
  event_name,
  description,
  location,
  start_date,
  end_date,
  created_at,
  updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
