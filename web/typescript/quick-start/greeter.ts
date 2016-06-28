// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// function greeter(person: string) {
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
