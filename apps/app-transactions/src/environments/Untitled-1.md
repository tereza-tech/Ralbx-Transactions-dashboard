## Updated libs structure
```
├──core
│   ├── 
│   │   ├── authentication/
│   │   ├── environments/
│   │   ├── env-scripts/
│   │   ├── credentials
│   │   ├── ...
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
│   ├── models
│   │   ├── types
│   │   ├── models
│   ├── ui
│   │   ├── [...pages]
│   │   │   ├──[...components]
│   │   ├── shared
│   │   │   ├──[...components]
│   │   ├── routes
│   │   │   ├──[...components]
│   │   ├── shared
│   │   │   ├──[...components]

├── README.md
├── package.json
├── nx.json
└── .gitignore
```