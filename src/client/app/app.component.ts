import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor(private route: ActivatedRoute) {
    console.log('Environment config', Config);
  }

  ngOnInit() {
    // This will fire with an empty object,
    // even when the page is opened with query params
    this.route.queryParams.subscribe(params => {
      console.log('Query params are', params)
    });
  }
}
