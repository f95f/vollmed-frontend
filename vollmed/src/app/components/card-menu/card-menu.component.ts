import { Component } from '@angular/core';
import { menuItems } from '../../enums/menu.model';
import { IMenu } from '../../interfaces/imenu';

@Component({
  selector: 'app-card-menu',
  imports: [],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.scss'
})
export class CardMenuComponent {

  menuItems: IMenu[] = menuItems;
}
