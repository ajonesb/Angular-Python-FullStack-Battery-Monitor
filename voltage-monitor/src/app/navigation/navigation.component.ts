import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <span>Voltage Monitor</span>
      <a mat-button routerLink="/chart">Chart</a>
      <a mat-button routerLink="/about">About</a>
    </mat-toolbar>
  `,
})
export class NavigationComponent {}