import { SDKConfig } from './types';

export class SDK {
  private config: SDKConfig;

  constructor(config: SDKConfig = {}) {
    this.config = {
      apiKey: config.apiKey || 'default-api-key',
      environment: config.environment || 'sandbox',
    };
  }

  public getConfig() {
    console.log("SDK Config:", this.config);
    return this.config;
  }

  public greetUser(name: string) {
    console.log(`Hello, ${name}! Welcome to the ${this.config.environment} environment.`);
  }
}
