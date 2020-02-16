# FrontendAngular

https://github.com/mauriciovigolo/keycloak-angular

...

## Keycloak Setup
docker pull jboss/keycloak:8.0.2 -> Issue: https://github.com/mauriciovigolo/keycloak-angular/issues/91
docker pull jboss/keycloak:7.0.1 -> try this one
1. Create a realm, like `example`
2. `Realm Settings` -> `Login` enable User registration
3. `Require SSL` -> `none`  (:warning: use thise only in developer environment)
4. Create a new client `example-frontend`
5. `Access Type` -> `confidential`
6. `Valid Redirect URIs` -> `*` (:warning: use thise only in developer environment)
7. `Web Origins` -> `*` (:warning: use thise only in developer environment)
8. Switch to Roles tab and create new roles `user`, `admin`
9. Defaults roles -> add `user` role

