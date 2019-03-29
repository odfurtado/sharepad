import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/@/me', pathMatch: 'full' },
  { path: '@/me', component: ViewComponent },
  { path: '@/me/:tags', component: ViewComponent },
  { path: '$/:project', component: ViewComponent },
  { path: '$/:project/:tags', component: ViewComponent },
  { path: '$/:project/w/:work', component: ViewComponent },
  { path: '$/:project/w/:work/:tags', component: ViewComponent },
  { path: '$/:project/p/:problem', component: ViewComponent },
  { path: '$/:project/p/:problem/:tags', component: ViewComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
