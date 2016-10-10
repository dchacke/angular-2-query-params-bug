# To reproduce...

1. `$ npm install`
2. `$ npm start`
3. The page will be opened for you, but open it again yourself manually with query params, such as `localhost:5555/?foo=bar`
4. Open up the browser's console
5. You will see a message that starts with "Query params are" twice, once with an empty object, and once with `{ foo: 'bar' }`

The bug is that it's logged the first time with no params even though the page is loaded with the query params provided.
