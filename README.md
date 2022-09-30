# Project Title
> Short blurb about what your product does.

[![Netlify][netlify-img]][netlify-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

<!-- Badges to Add: Netlify build, twitter, license? -->

_One to two paragraph statement about your product and what it does._

<details>
<summary>Application Snapshot</summary>
### [Application Snapshot]()
<!-- <p align="center">
  <img src="src/assets/rtk-todoodles.png" alt="Redux Toolkit with TailwindCSS Todo App" width="700">
</p> -->
</details>

</br>

## Features

_Users can do a whole bunch of cool things. This app is:_
- Lightweight (≈3kB), zero dependencies 📦
- Works with React v15 onwards
- Supports **mouse** and **touch** events
- Support for device tilting (**gyroscope**)

### [Demo](https://friendly-redux-shopping-cart.netlify.app/)

### Technology

  1. Reactjs
  2. Redux Toolkit
  3. Axios
  4. TailwindCSS
  5. Netlify Deployment

### :lady_beetle: Bugs and Known Issues

React v18 Strict Mode causes Redux to run 2x when component mounts for the first time, resulting in all records duped on the frontend. I tried unsuccessfully to create a workaround. Options for now are:
  - Don't use Strict Mode
  - Downgrade to React 17.

Possible FIX: load the API posts data immediately when the app loads.

   :heavy_check_mark: `store.dispatch(fetchPosts())` added to index.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The things you need before installing the software.

* You need this
* And you need this
* Oh, and don't forget this

### Installation

_Easily set up a local development environment_

 - clone or download zip file
 - cd into root
 - `npm install`
 - `npm start`


## Usage

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Deployment

Additional notes on how to deploy this on a live or release system. Explaining the most important branches, what pipelines they trigger and how to update the database (if anything special).

### Server

* Live:
* Release:
* Development:

This project is hosted on Netlify. To deploy your own copy, you will need to set up a Netlify account.

Before deploying to Netlify you need to create a build:

```
$ npm run build
```

It is a good idea to test your build by serving it on your localhost. Once you are happy with your build, open up your Netlify Account.

For a basic deploy, you can simply drag and drop the build folder onto your Netlify Sites directory. See [Get started with Netlify](https://docs.netlify.com/get-started/) for details.

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)


## Additional Documentation and Acknowledgments

* [React Portals](https://reactjs.org/docs/portals.html) - for Modal
* Confluence link:
* [Baby Yoda](https://freepngimg.com/png/99068-cute-star-wars-photos-baby-yoda/download) from freepngimg.com
* [Kylo Ren](https://freepngimg.com/png/85568-star-kylo-character-darth-wars-fictional-ii) from freepngimg.com
* [Popcorn icon by Icons8](https://icons8.com/icons/set/popcorn)

## :books: Learning Resources

Tutorial
   - [CRUD Operations with React and Redux Toolkit](https://www.youtube.com/watch?v=SgnlgEEkqSo) by Cand Dev

Layouts with React Router 6
   - [React Router v6 Shared layouts](https://stackoverflow.com/questions/70236929/react-router-v6-shared-layouts)
   - [React Router Example](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src%2FApp.tsx)

Use of Index Files
   - [How do index.js files work in React component directories?](https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories)


## :memo: Notes

### 1. OnTouch Events
This is the first project where I have used onTouch events for mobile webapps. If you're new too, here are some notes that may assist you on your journey.

Useful resources: [React Long Press Event](https://stackoverflow.com/questions/48048957/react-long-press-event)

### 1. SerializableError: Error serializing
Found the isSerializable error a few times with this Nextjs project. A quick solution that worked for this use case was to add " || null" to return items in getStaticProps. Specifically for date format or number format objects.

For further reading on the subject see:
   - [getServerSideProps cannot be serialized as JSON. Please only return JSON serializable data types](https://github.com/vercel/next.js/issues/11993)
   - [Error: How to serialize data from getStaticProps : Next.js](https://stackoverflow.com/questions/66106776/error-how-to-serialize-data-from-getstaticprops-next-js)

<!-- Markdown link & img dfn's -->
[github-img]: https://img.shields.io/github/repo-size/lisawagner/rtk-tailwind-todo?logo=github&style=flat-square
[github-url]: https://github.com/lisawagner/rtk-tailwind-todo
[github-commit]: https://img.shields.io/github/last-commit/lisawagner/rtk-tailwind-todo?logo=github&style=flat-square

[netlify-img]: https://img.shields.io/netlify/8f53362b-5385-445d-bff8-fbf44086fa13?style=flat-square
[netlify-url]: https://todoodles-redux-toolkit-tailwind-app.netlify.app/