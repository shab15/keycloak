# keycloak

//Nodejs
create realm
create client with public access type

get access token using below api
http://localhost:8080/auth/realms/nodejs/protocol/openid-connect/token
content-type application/x-www-form-urlencoded
 in body 
 client_id , username, password and grant_type(which will be password)

 