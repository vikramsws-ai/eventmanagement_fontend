# DefaultApi

All URIs are relative to *http://localhost:3000/api*

| Method                            | HTTP request    | Description     |
| --------------------------------- | --------------- | --------------- |
| [**createEvent**](#createevent)   | **POST** /event | Create an event |
| [**getAllEvents**](#getallevents) | **GET** /event  | Get all events  |

# **createEvent**

> Event createEvent(createEventRequest)

### Example

```typescript
import { DefaultApi, Configuration, CreateEventRequest } from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createEventRequest: CreateEventRequest; //

const { status, data } = await apiInstance.createEvent(createEventRequest);
```

### Parameters

| Name                   | Type                   | Description | Notes |
| ---------------------- | ---------------------- | ----------- | ----- |
| **createEventRequest** | **CreateEventRequest** |             |       |

### Return type

**Event**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **201**     | Event created successfully | -                |
| **400**     | Invalid request data       | -                |
| **500**     | Internal server error      | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllEvents**

> Array<Event> getAllEvents()

### Example

```typescript
import { DefaultApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAllEvents();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<Event>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Events retrieved successfully | -                |
| **400**     | Bad request                   | -                |
| **500**     | Internal server error         | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
