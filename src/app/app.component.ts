import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
  <nav>
   <div class="nav-wrapper red">
     <a href="#" class="brand-logo center">Ng-Tattoo</a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a href="#">temp</a></li>
       <li><a href="#">temp</a></li>
       <li><a href="#">temp</a></li>
     </ul>
    </div>
  </nav>
  `
})
export class AppComponent {
  title = 'app works!';
}
