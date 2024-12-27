import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from '../../shared/menubar/menubar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HomeComponent } from '../../components/home/home.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MenubarComponent,
    FooterComponent
  ],
  exports: [
    MenubarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
