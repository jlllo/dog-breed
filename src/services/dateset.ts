export const treatDogs = (dogs: string[]) => dogs.map((dog) => ({
  id: dogs.indexOf(dog),
  title: `Dog ${dogs.indexOf(dog)}`,
  link: String(dog),
}));
