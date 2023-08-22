import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
        ];

  items: MenuItem[]= [];
    
  home: MenuItem = {};
  
  ngOnInit() {
      this.items = [
        { label: "AngularJS" },
        { label: "ReactJS" },
        { label: "HTML" },
        { label: "JavaScript" },
        { label: "PrimeNG" }
      ];
      
      this.home = {icon: 'pi pi-home'};
  }
}
