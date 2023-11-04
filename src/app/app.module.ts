import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './components/password/password.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
