import { KeycloakOptions } from 'keycloak-angular';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:8080';

const keycloakOptions: KeycloakOptions = {
  config: {
    url: 'http://192.168.99.101:8080/auth',
    realm: 'example',
    clientId: 'example-frontend',
  },
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false,
  },
  enableBearerInterceptor: true,
  bearerExcludedUrls: [],
};

export const environment = {
  production: false,
  keycloak: keycloakOptions,
  idp: {
    roles: {
      user: 'example-user',
      admin: 'example-admin',
    },
  },
  paths: {
    public: '',
    admin: 'admin',
    user: 'user',
  },
  endpoints: {
    greet_admin: `${apiUrl}/api/greet/admin`,
    greet_user: `${apiUrl}/api/greet/user`,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
