import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
  
})
export class DropdownComponent {

  selectedName: string | null = null;

  nameOptions: SelectItem[] = [
    { label: 'mawadah', value: 'Name 1' },
    { label: 'Ahmed', value: 'Name 2' },
    { label: 'alhasani', value: 'Name 3' },
    // Add more options here
  ];













//  selectedName: any;
// SelectItem: string | undefined ;

//   nameOptions: SelectItem[] = [
//     { label: 'mawadah', value: 'Name 1' },
//     { label: 'Ahmed', value: 'Name 2' },
//     { label: 'alhasani', value: 'Name 3' },
//     // Add more options here
//   ];


//  selectedName(): boolean {
//   return !!this.SelectItem;
//  }
  // goToNext() {
  //   // Implement your logic here for navigating to the next step
  //   console.log('Navigating to the next step with selected name:', this.selectedName);
  // }

 //  selectedName: any;
 // SName :  = [
   // { name: "Mawadah" },
   // { name: "Zainab" },
   // { name: "Ashjan" },
   // { name: "Bushra" },
   // { name: "Abeer" },
 // ];

}