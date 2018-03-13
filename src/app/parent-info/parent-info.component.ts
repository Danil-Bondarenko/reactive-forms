import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.rForm = fb.group({
      firstname: [, Validators.required],
      lastname: [, Validators.compose([Validators.required, Validators.minLength(3)])]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.rForm.patchValue(params);
    });
  }

  ngOnInit() {
  }

}
