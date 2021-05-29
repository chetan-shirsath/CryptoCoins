import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoCoin } from '../Models/CryptoCoin';
import { CryptoCoinService } from '../Services/CryptoCoinService';

@Component({
  selector: 'app-cryptocoinhome-outlet',
  templateUrl: '../Views/CryptoHomeView.html',
  //  styleUrls: ['../Styles/header.css']
})
export class CryptoHomeComponent implements OnInit {

  private cryptoCoin: CryptoCoin[];
  private coin: CryptoCoin;
  constructor(private cryptoCoinService: CryptoCoinService,
    private router: Router) { }

   ngOnInit() {
    this.cryptoCoinService.getCoins()
        .subscribe(
          data => this.cryptoCoin = data,
          err => {
            console.log('in comp' + err);

        });
  }

  navigateToCoinDetails(coinId: Number) {
    if (coinId !== null) {
      this.router.navigate(['cryptocoin/coindetails',  coinId]);
    } else {
      this.router.navigate(['cryptocoin/coindetails',  coinId]);
    }

  }
}
