export const treatDogs = (dogs: [], start: number, end: number) => dogs.slice(start, end).map((dog) => ({
  id: dogs.indexOf(dog),
  title: `Dog ${dogs.indexOf(dog)}`,
  link: dog,
}));
