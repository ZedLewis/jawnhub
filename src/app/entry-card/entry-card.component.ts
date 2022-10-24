import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

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
  })

  constructor(
    protected modalService: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  closeForm() {
    this.modalService.close(console.log(this.transactionEntry.value))
  }

  cancelEntry() {
    this.modalService.close()
  }

}
