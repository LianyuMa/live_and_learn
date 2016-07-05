import { Injectable } from '@angular/core';

export class User {
  constructor(public name: string) { }
}

// Todo: get the user; don't new it
let bob = new User('Bob');

@Injectable()
export class UserService {
  user = bob; // initial user is Bob

  getNewUser() {return this.user}
}
