import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { ODCModule } from './odc.module';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(ODCModule)
  .catch(err => console.error(err));
  export function main() {

    return platformBrowserDynamic().bootstrapModule(ODCModule, { preserveWhitespaces: false });

}

if (document.readyState === 'complete') {

  main();

} else {

  document.addEventListener('DOMContentLoaded', main);

}