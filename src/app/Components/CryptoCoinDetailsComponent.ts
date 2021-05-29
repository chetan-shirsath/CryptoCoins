import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoCoin } from '../Models/CryptoCoin';
import { CryptoCoinService } from '../Services/CryptoCoinService';

@Component({
  selector: 'app-cryptocoindetails-outlet',
  templateUrl: '../Views/CryptoCoinDetailsView.html',
  //  styleUrls: ['../Styles/header.css']
})
export class CryptoCoinDetailsComponent {

  private cryptoCoin: CryptoCoin[];
  private coin: CryptoCoin;

  constructor(private cryptoCoinService: CryptoCoinService,
    private router: ActivatedRoute,
    private route: Router) {
      this.getCoinDetails(this.router.snapshot.paramMap.get('coinId'));
   }

   getCoinDetails(coinId) {
    this.cryptoCoinService.getCoinDetails(coinId)
    .subscribe(
    data => this.coin = data,
      err => {
        console.log('in comp' + err);

    });
  }
}
