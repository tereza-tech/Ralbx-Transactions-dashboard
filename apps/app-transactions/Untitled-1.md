- Login/Auth:
https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8 

- https://github.com/ngworker/router-component-store/tree/main/packages/router-component-store/src/lib

- https://github.com/tereza-tech/angular-ngrx-nx-realworld-example-app
  
- https://github.com/iromashko/eshop-clone

- https://github.com/guiseek/nx-ng-ddd-fire-template-project/tree/master

- 

## Updated libs structure
```
├──core
│   ├── 
│   │   ├── authentication
│   │   ├── 
│   │   ├── environments
│   │   ├── encryptions
│   │   ├── variables
│   │   ├── 
│   ├── data
│   │   ├── local
│   │   │   ├── api
│   │   │   ├── services
│   │   │   │   ├── operations
│   │   │   ├── data-shared
│   │   ├── cloud
│   │   │   ├── services
│   │   │   │   ├── operations
│   │   │   ├── data-shared
│   │   ├── import.models
│   │   ├── main.module
│   │   ├── utils
│   │   └── [...configs]
│   ├── ui
│   │   ├── [...pages]
│   │   │   ├──[...components]
│   │   ├── shared
│   │   │   ├──[...components]

├── bower_components (if using bower)
├── test
├── Gruntfile.js/gulpfile.js
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore
```