import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

// Although the AppConfig interface plays no role in dependency injection, it supports typing of the configuration object within the class.
export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};
