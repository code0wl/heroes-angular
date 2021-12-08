import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <a routerLink="/heroes" routerLinkActive="router-link-active">
        <span>Heroes</span>
      </a>
      <a routerLink="/villains" routerLinkActive="router-link-active">
        <span>Villains</span>
      </a>
    </nav>
  `,
})
export class NavComponent {}
