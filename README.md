# Keycloak OpenId Connect Example
Simple Example for OpenId Connect using Keycloak, Spring Boot (Security) &amp; Angular

## Keycloak
In this example we're using Keycloak as an IDP.
[How to set up Keycloak](keycloak/README.md)
Docker images can be found here: [Keycloak Docker Images](https://hub.docker.com/r/jboss/keycloak)

## Angular Frontend
Our frontend is a simple web application based on Angular. The frontend consists of three pages `public`, `user` and `admin`.
We want to make sure that an user has to login when entering the app. Furthermore, we want that users only have access to page when they have the corresponding permissions (`roles`).
[Integrating Keycloak in an Angular Frontend](frontend-angular/README.md)

## Spring Boot 2 Backend
We're building up a Spring Boot 2 application as a resource server. This resource server has got two different endpoints that can only be accessed when the correct permissions (`roles`) are included in the jwt.
[Integrating Keycloak in Spring Boot Backend](backend-springboot/README.md)

