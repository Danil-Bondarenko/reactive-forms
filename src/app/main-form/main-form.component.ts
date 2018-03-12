import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {Router, NavigationExtras} from '@angular/router';

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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.rForm = fb.group({
      parentFirstName: [null, Validators.required],
      parentLastName: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      children: fb.array([])
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    // this.router.navigate([`/parent-info/${post.parentFirstName + post.parentLastName}`]).then(data => {
    //   this.rForm.reset();
    // });
    // this.router.navigate(['/parent-info', post.parentFirstName, post.parentLastName]);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'firstname': post.parentFirstName,
        'lastname': post.parentLastName
      }
    };
    this.router.navigate(['parent-info/'], navigationExtras);
  }

  addChild(): void {
    const children = <FormArray>this.rForm.controls['children'];
    children.push(this.initChild());
  }

  initChild() {
    return this.fb.group({
      name: [, Validators.required],
      age: [, Validators.compose([Validators.required, Validators.max(17)])]
    });
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
    const children = <FormArray>this.rForm.controls['children'];
    children.removeAt(index);
  }

}
