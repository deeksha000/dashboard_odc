import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ODCModule } from './app/odc.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

  export function main() {

    return platformBrowserDynamic().bootstrapModule(ODCModule, { preserveWhitespaces: false });

}

if (document.readyState === 'complete') {

  main();

} else {

  document.addEventListener('DOMContentLoaded', main);

}