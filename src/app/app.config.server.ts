import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { getPrerenderParams } from './app.routes';


// function to generate prerender routes dynamically
export function providePrerender () {
  const routes = ['/'];
  const planDetailsParams = getPrerenderParams('/plan-details/:id');
  for (const param of planDetailsParams) {
    routes.push(`/plan-details/${param.id}`);
  }
  return routes;
}

// merges server-side rendering config with prerender routes
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    {
      provide: 'PRERENDER_ROUTES',
      useFactory: providePrerender,
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
