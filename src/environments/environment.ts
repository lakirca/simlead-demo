// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  endpoint: "https://sleepy-scrubland-39449.herokuapp.com/",
  firebase: {
    apiKey: "AIzaSyBX6Ssr6k6y7rk3a1ucLNqB2KQjoiqYRqU",
    authDomain: "simlead-9d5a6.firebaseapp.com",
    databaseURL: "https://simlead-9d5a6.firebaseio.com",
    projectId: "simlead-9d5a6",
    storageBucket: "simlead-9d5a6.appspot.com",
    messagingSenderId: "971743373380"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
