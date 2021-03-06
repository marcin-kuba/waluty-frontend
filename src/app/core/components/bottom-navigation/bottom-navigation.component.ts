import { Component } from '@angular/core'

export interface BottomNavigationItem {
  label: string
  icon: string
}

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent {
  public navItems: BottomNavigationItem[] = [
    {label: 'Str. główna', icon: 'home'},
    {label: 'Kalkulator', icon: 'calculate'},
    {label: 'Ustawienia', icon: 'settings'},
  ]
}
