// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// function greeter(person: string) {
function greeter(person) {
    return "Hello, " + person;
}
var user = [1, 2, 3];
document.body.innerHTML = greeter(user);
