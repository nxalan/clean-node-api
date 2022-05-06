# Login

> ## Success Case

1. ✅ Receive a request of type **POST** in **/api/login** route
2. ✅ Validate required fields **email** and **password**
3. ✅ Validate if **email** is a valid email
4. ✅ **Search** an user with provided email and password
5. ✅ Generate an access **token** from user ID
6. ✅ **Update** user data with the generated access token
7. ✅ Return code **200** with the generated access token and user name

> ## Exception

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **400** if email or password is not provided by the client
3. ✅ Return error code **400** if the email provided is an invalid email
4. ✅ Return error code **401** if there is no user found with the provided data
5. ✅ Return error code **500** if a error is throw when trying to generate a new access token
6. ✅ Return error code **500** if a error is thrown when trying to update a user with the generated access token