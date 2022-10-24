import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EntryCardComponent } from '../entry-card/entry-card.component';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    private modalService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }

  newEntry() {
    this.modalService.open(EntryCardComponent)
  }

}
