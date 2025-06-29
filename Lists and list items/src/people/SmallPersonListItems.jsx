export const SmallPersonListItems = ({ person }) => {
  const { name, age } = person;

  return (
    <p>Name: {name}, age: {age} years</p>
  );
}