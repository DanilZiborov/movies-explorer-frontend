// import React from "react";
// import MoviesCardlist from "./MoviesCardlist/MoviesCardlist";

// function MoviesRenderer({ movies }) {

//   const [renderedMovies, setRenderedMovies] = React.useState([]);

//   const [moviesCounter, setMoviesCounter] = React.useState(0);
//   const [additionalMovies, setAdditionalMovies] = React.useState(0);
//   const [initialMovies, setInitialMovies] = React.useState(0);

//   React.useEffect(() => {
//     // if (renderedMovies.length > initialMovies || movies.length === 0)
//     // return;

//     console.log('юзэффект 1');

//     checkWindowWidth();

//     window.addEventListener('resize', () => {
//       setTimeout(() => {
//         checkWindowWidth();
//       }, 200);
//     })

//   }, []);

//   React.useEffect(() => {

//     render(initialMovies);

//     console.log('юзэффект 2');

//   }, [initialMovies]);



//   function checkWindowWidth() {
//     if (window.innerWidth < 768) {
//       setInitialMovies(5);
//       setAdditionalMovies(2);
//       console.log('установлены параметры до 768');
//     }

//     if (window.innerWidth < 1280 && window.innerWidth >= 768) {
//       setInitialMovies(8);
//       setAdditionalMovies(2);
//       console.log('установлены параметры 768 - 1280');
//     }

//     if (window.innerWidth >= 1280) {
//       setInitialMovies(16);
//       setAdditionalMovies(4);
//       console.log('установлены параметры 1280+');
//     }
//   }

//   function render(iterations) {
//     console.log('рендер начал работу');
//     console.log(`initial movies: ${iterations}`);
//     console.log(`filteredmovies length: ${movies.length}`);
//     console.log(`renderedmovies length: ${renderedMovies.length}`);

//     let tempMovies = renderedMovies;

//     movies.forEach((movie, index) => {
//       // if(index < moviesCounter || index > moviesCounter + iterations)
//       //   return;

//       // else {
//       //   tempMovies.push(movie);
//       // }

//       if (index > iterations - 1)
//         return;

//       tempMovies.push(movie);
//       console.log('пуш');

//     })

//     console.log(`tempmovies length: ${tempMovies.length}`);

//     setRenderedMovies(tempMovies);

//     console.log(`renderedmovies length: ${renderedMovies.length}`);
//   }


//   return (
//     <MoviesCardlist movies={renderedMovies} />
//   )
// }

// export default MoviesRenderer;
