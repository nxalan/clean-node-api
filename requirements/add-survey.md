# Create Survey

> ## Success Case

1. ✅ Receive a request of type **POST** in **/api/surveys** route
2. ✅ Validate if the request is made from an **admin**
3. ✅ Validate required fields **question** and **answers**
4. ✅ **Create** a survey with received data
5. ✅ Return **204**, without data

> ## Exceptions

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **403** if user is not admin
3. ✅ Return error code **400** if question or answers is not provided
4. ✅ Return error code **500** if error is throw when trying to add a new survey