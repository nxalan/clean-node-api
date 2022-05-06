# Cadastro

> ## Success Case

1. ✅ Receive a request of type **POST** in **/api/signup** route
2. ✅ Validate required fields **name**, **email**, **password** and **passwordConfirmation**
3. ✅ Validate if **password** and **passwordConfirmation** are the same
4. ✅ Validate if **email** is an valid email
5. ✅ **Validate** if already exists an user with the provided email
6. ✅ Generate a **encrypted** password (this password cannot be decrypted)
7. ✅ **Create** an account for the user with the provided data, **replacing** the password with the encrypted password
8. ✅ Generate a access **token** from the user ID
9. ✅ **Update** the user data with the generated access token
10. ✅ Return code **200** with user access token and user name

> ## Exception

1. ✅ Return error code **404** if API does not exists
2. ✅ Return error code **400** if name, email, password ou passwordConfirmation is not provided
3. ✅ Return error code **400** if password and passwordConfirmation are not the same
4. ✅ Return error code **400** if the provided email is a invalid email
5. ✅ Return error code **403** if the provided email already exists
6. ✅ Return error code **500** if a error is throw when trying to generate a encrypted password
7. ✅ Return error code **500** if a error is throw when trying to create a user account
8. ✅ Return error code **500** if a error is throw when trying to generate a access token
9. ✅ Return error code **500** if a error is throw when trying to update the user with the generated access token