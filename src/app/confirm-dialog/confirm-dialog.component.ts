import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  accept(): void {
    this.matDialogRef.close(true);
  }

  decline(): void {
    this.matDialogRef.close(false);
  }

  ngOnInit() {
  }

}
