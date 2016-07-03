import { ReflectiveInjector } from '@angular/core';

import { Car, Engine, Tires } from './car';

export function useInjector() {
  let injector: ReflectiveInjector;
  /*
  // Cannot instantiate an ReflectiveInjector like this!
  let injector = new ReflectiveInjector([Car, Engine, Tires]);
  */
  injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
  let car = injector.get(Car);
  car.description = 'Injector';
  return car;
}
