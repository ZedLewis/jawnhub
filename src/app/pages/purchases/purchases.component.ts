import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EntryCardComponent } from '../entry-card/entry-card.component';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  items = [
    { name: 'Smile Tee', description: 'The Smile tour tee', cost: 30, date: '12/02/2022'},
    { name: 'Wild Donkey Tee', description: 'Made in Italy vintage inspired tee', cost: 80, date: '12/02/2023' },
    { name: 'OL Jacket', description: 'Waxed Mini Jacket', cost: 450, date: '12/04/2024'},
    { name: 'Full Count Jeans', description: 'Selvedge straight cut denim from Japan', cost: 270, date: '12/03/2024' },
    { name: 'Paraboot Pony Hair', description: 'Hair on cow tyrolean shoes', cost: 390, date: '15/03/2024' },
  ];

  constructor(
    private modalService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }

  newEntry() {
    this.modalService.open(EntryCardComponent)
  }

}
