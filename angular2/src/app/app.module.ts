import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
