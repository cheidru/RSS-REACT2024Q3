// const endpoints = {
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "films": "https://swapi.dev/api/films/",
//     "species": "https://swapi.dev/api/species/",
//     "vehicles": "https://swapi.dev/api/vehicles/",
//     "starships": "https://swapi.dev/api/starships/"
// }


export default function apiSearch(searchString: string) {
  const data = fetch('https://swapi.dev/api/' + searchString);
  return data.then((data) => data.json()).then((data) => data.results);
}