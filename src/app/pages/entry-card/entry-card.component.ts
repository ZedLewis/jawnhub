import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import {CreatePurchase} from "../../store/actions/purchase.actions";
import {AppState} from "../../store/reducers";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss']
})
export class EntryCardComponent implements OnInit {
  public transactionEntry: FormGroup = new FormGroup ({
   name: new FormControl(),
   description: new FormControl(),
   cost: new FormControl(),
    date: new FormControl()
  })

  constructor(
    protected modalService: NbDialogRef<any>,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  createItem(transactionEntry: FormGroup) {
    const payload  = transactionEntry.value
    this.store.dispatch(CreatePurchase({ payload }))
    this.modalService.close(console.log(payload))
  }

  cancelEntry() {
    this.modalService.close()
  }

}
