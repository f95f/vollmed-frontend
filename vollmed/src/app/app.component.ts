import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicBackgroundComponent } from './shared/dynamic-background/dynamic-background.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DynamicBackgroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vollmed';
}
