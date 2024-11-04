import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaterialModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'voltage-monitor';
}