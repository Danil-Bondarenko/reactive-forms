import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  rForm: FormGroup;
  parentFirstName: string;
  parentLastName: string;
  titleAlert = 'This field is required!';
  addChildMode = false;
  showEdit: number;
  oldName: string;
  children = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.rForm = fb.group({
      parentFirstName: [null, Validators.required],
      parentLastName: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      childName: [null, Validators.minLength(3)]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    this.parentFirstName = post.parentFirstName;
    this.parentLastName = post.parentLastName;
  }

  switchAddChildMode() {
    this.addChildMode = !this.addChildMode;
  }

  addChild(newChild): void {
    if (newChild.value.length) {
      this.children.push({name: newChild.value});
      this.rForm.controls['childName'].reset();
      this.switchAddChildMode();
    }
  }

  openConfirmDeleteDialog(i) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteChild(i);
      }
    });
  }

  deleteChild(index): void {
    this.children.splice(index, 1);
  }

  edit(index): void {
    this.showEdit = index;
    this.oldName = this.children[index].name;
  }

  save(): void {
    this.showEdit = -1;
  }

  cancel(index): void {
    this.children[index].name = this.oldName;
    this.showEdit = -1;
  }

}
