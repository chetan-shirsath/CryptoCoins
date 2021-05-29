import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoCoinDetailsComponent } from './Components/CryptoCoinDetailsComponent';
import { CryptoHomeComponent } from './Components/CryptoHomeComponent';

const routes: Routes = [
  { path: 'cryptocoin', component: CryptoHomeComponent },
   { path: 'cryptocoin/coindetails/:coinId', component: CryptoCoinDetailsComponent }
];

@NgModule({
  imports: [BrowserModule,
            HttpClientModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    CryptoHomeComponent,
    CryptoCoinDetailsComponent
  ]

})
export class AppRoutingModule { }
