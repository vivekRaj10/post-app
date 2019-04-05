import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

/* Import all components */
import { AppComponent } from './app.component';
import { RawDataComponent } from './common/dialogs/raw-data/raw-data.component';

/* Import all modules */
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RawDataComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: "API", useValue: environment.api },
  ],
  entryComponents: [RawDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
