// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 }
];

movieSmall = [];
movieMedium = [];
movieLarge = [];

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if (movie.durationInMinutes > 200) {
    movieLarge.push(movie.name);
  } else {
    if (movie.durationInMinutes < 100) {
      movieSmall.push(movie.name);
    } else {
      movieMedium.push(movie.name);
    }
  }
}
console.log(`Película pequeña: ${movieSmall}`);
console.log(`Película mediana: ${movieMedium}`);
console.log(`Película grande: ${movieLarge}`);
