import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicBackgroundComponent } from './shared/dynamic-background/dynamic-background.component';
import { LayoutModule } from './modules/layout/layout.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DynamicBackgroundComponent,
    LayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vollmed';
}
