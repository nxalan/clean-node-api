# List Survey Result

> ## Success Case

1. ✅ Receive a request of type **GET** in **/api/surveys/{survey_id}/results** route
2. ✅ Validate if the request is made from an **user**
3. ✅ Return **200** with data of survey result

> ## Exceptions

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **403** if request if not from a user
3. ✅ Return error code **500** if a error is throw when trying listing the survey result