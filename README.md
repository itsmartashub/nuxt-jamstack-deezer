# jamstack-deezer

> A deezer favourites application on the JAMstack

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## instalirali smo netlify-cli sa ```npm install netlify-cli -g```, potom odaradili ```netlify init```, onda se authorizovali sa sajtom na kom smo ulogovani, i onda stisli ono *No, i will connect this direct with Github first*, a ne *Yes, create and deploy site manually*. Pa smo kreirali repo na githubu, stavili remote da bude taj github repo.

## onda smo kreirali u nasem projektu fajl netlify.toml i upisali sta smo upisali.

## ```yarn add node-sass sass-loader```

## dodali u assets folder theme.scss fajl, u nuxt.config.js stavili za css: ["~assets/theme.css"] i on ce nam kompajlirati u normalan css.

## kreirali smo nas functions folder u kom su fajlovi js kojima cemo dohvatati deezer stvari (favs i user ilit profile picture i sl.). Taj *functons* folder ce nam kao biti backend za netlify, i da bismo povezali backend i netlify treba nam ovo sto sledece instaliramo a to je request. Nasa ideja je da bude serverless, ali *functions* su kao neke f-je koje cemo na kratko koristiti i iskljuciti.

## ```yarn add request``` (za functions koje koristimo i definisali smo i za netlify (stavili u netlify.toml fajlu), oni ce biti kao nas api valjda. i trebace nam request za nas api).

