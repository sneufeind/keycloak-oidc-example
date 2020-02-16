# keycloak-oidc-example
Simple Example for OpenId Connect using Keycloak, Spring Boot (Security) &amp; Angular


## Keycloak
https://hub.docker.com/r/jboss/keycloak

`docker run -it --rm -e KEYCLOAK_USER=<USERNAME> -e KEYCLOAK_PASSWORD=<PASSWORD> -p 8080:8080 jboss/keycloak:8.0.2`

docker run -it --rm -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/my-realm.json -p 8080:8080 jboss/keycloak:8.0.2
