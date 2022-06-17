import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaHomeComponent } from './thaylla-home/thaylla-home.component';
import { ThayllaTasksComponent } from './thaylla-tasks/thaylla-tasks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: ThayllaHomeComponent},
    {path: 'tasks', component: ThayllaTasksComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThayllaHomeComponent, ThayllaTasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
