# List Surveys

> ## Success Case

1. ✅ Receive a request of type **GET** in **/api/surveys** route
2. ✅ Validate if the request is made by a **user**
3. ✅ Return code **204** if there is no registered surveys
4. ✅ Return code **200** with surveys data

> ## Exception

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **403** if request if not from a user
3. ✅ Return error code **500** if a error is throw when trying listing the surveys