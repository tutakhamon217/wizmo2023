import { Component } from '@angular/core';
import { MENU_ITEMS } from './tree.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems = MENU_ITEMS;
}
