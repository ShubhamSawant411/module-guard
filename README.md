# Authentication-(module guard)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

Task Description: Create an app where there are 3 route: login, register, category, product. User can access category route only if he is logged in and his role is admin, and product route only if he is logged in and his role is supervisor (for data storage and retreival use JSON Server)
## json server

install json-server
```bash
npm i -g json-server
```
run the server
```bash
json-server --watch db.json
```


## How to use?



```bash
npm install

npm start
```
## Development server
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

