import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-list-component',
  templateUrl: './my-list-component.component.html',
  styleUrls: ['./my-list-component.component.scss']
})
export class MyListComponentComponent implements OnInit {
  items = ['Canapea','Lustra','Birou'];
  filterText = '';
  newItem = '';
  itemToDelete = '';

  constructor() { }

  ngOnInit(): void {
  }

  filter() {
  }

  
  sort() {
    this.items.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

}

addItem() {
  this.items.push(this.newItem);
  this.newItem = '';
}


deleteItem() {
  const index = this.items.indexOf(this.itemToDelete);
  if (index > -1) {
    this.items.splice(index, 1);
    this.itemToDelete = '';
  }
}
}
