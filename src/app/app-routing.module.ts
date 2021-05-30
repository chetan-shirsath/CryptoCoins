import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoCoinDetailsComponent } from './Components/CryptoCoinDetailsComponent';
import { CryptoHomeComponent } from './Components/CryptoHomeComponent';
import { ErrorComponent } from './Components/ErrorComponent';
import { NavBarComponent } from './Components/NavBarComponent';

const routes: Routes = [
  { path: 'cryptocoin', component: CryptoHomeComponent },
   { path: 'cryptocoin/coindetails/:coinId', component: CryptoCoinDetailsComponent },
   { path: 'cryptocoin/error', component: ErrorComponent }
];

@NgModule({
  imports: [BrowserModule,
            HttpClientModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    CryptoHomeComponent,
    CryptoCoinDetailsComponent,
    NavBarComponent,
    ErrorComponent
  ]

})
export class AppRoutingModule { }
