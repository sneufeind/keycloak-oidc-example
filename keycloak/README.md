# Setting up Keycloak
In this example we're using Keycloak (version `8.0.2`).

## Install
1. Pull Keycloak Docker Image `docker pull jboss/keycloak:8.0.2`
2. Run Keycloak instance: `docker run --rm -it -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak:8.0.2`

## Configuration
1. Enter `http://localhost:8080/auth` and login as admin.
2. Import settings from `example-realm.json`.
3. Create users (`admin` & `user`) within Keycloak.
4. Let `admin` join the `admins` and `user` join the `users` group.
