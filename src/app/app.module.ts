import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {MainFormComponent} from './main-form/main-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent-info', component: ParentInfoComponent },
  { path: 'add-parent', component: MainFormComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ConfirmDialogComponent,
    ParentInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {
}
