## Project execute
```
    npm run dev

```
### graphql-yoga
``` 
    npm i graphql-yoga mongoose -D
    npm install @babel/core @babel/cli @babel preset-env @babel/node -D
    npm i nodemon -D
```

```
mutation {
  createBook(
    title: "El señor presidente",
    author: "Miguel Angel Asturias",
    description: "Premio nobel de literatura",
  	year: 2000
  ) {
    title 
    author
  }
}

{
  books {
    title
    author
    img
    year
  }
}

```