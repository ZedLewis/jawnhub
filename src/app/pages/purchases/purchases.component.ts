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
    { name: 'Smile Tee', description: 'The Smile tour tee', cost: 30 },
    { name: 'Wild Donkey Tee', description: 'Made in Italy vintage inspired tee', cost: 80 },
    { name: 'OL Jacket', description: 'Waxed Mini Jacket', cost: 450 },
    { name: 'Full Count Jeans', description: 'Selvedge straight cut denim from Japan', cost: 270 },
    { name: 'Paraboot Pony Hair', description: 'Hair on cow tyrolean shoes', cost: 390 },
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
