import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.firstName = params['firstname'];
      this.lastName = params['lastname'];
      console.log(params);
    });
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   this.parentFirstName = params.parentFirstName;
    //   this.parentLastName = params.parentLastName;
    // });
  }

}
