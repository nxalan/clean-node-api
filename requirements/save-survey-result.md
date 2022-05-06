# Answer Survey

> ## Success Case

1. ✅ Receive a request of type **PUT** in **/api/surveys/{survey_id}/results** route
2. ✅ Validate if the request is made by a **user**
3. ✅ Validate the parameter **survey_id**
4. ✅ Validate if **answer** is a valid answer
5. ✅ **Create** a survey result with the received data if there is no registered survey
6. ✅ **Update** a survey result with the received data if there is an registered survey already
7. ✅ Return code **200** com os dados do resultado da enquete

> ## Exception

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **403** if the request is not from a user
3. ✅ Return error code **403** if the provided survey_id is invalid
4. ✅ Return error code **403** if the answer send by the client is a invalid answer
5. ✅ Return error code **500** if a error is throw when trying to create a answer result
6. ✅ Return error code **500** if a error is throw when trying to update a answer result
7. ✅ Return error code **500** if a error is throw when trying to load an survey