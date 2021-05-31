import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoCoin } from '../Models/CryptoCoin';
import { CryptoCoinService } from '../Services/CryptoCoinService';

@Component({
  selector: 'app-cryptocoinhome-outlet',
  templateUrl: '../Views/CryptoHomeView.html',
  styleUrls: ['../Styles/CryptoHomeStyle.scss']
})
export class CryptoHomeComponent {

  private cryptoCoin: CryptoCoin[];
  private coin: CryptoCoin;
  private coinIds: Number[];

  constructor(private cryptoCoinService: CryptoCoinService,
    private router: Router) {
      this.getCoins();
    }

   getCoinIds() {
    this.coinIds = this.cryptoCoin.map(c => c.id);
  }

    getCoins() {
      this.cryptoCoinService.getCoins()
      .subscribe(
        data => {
          if (data.length !== 0) {
            this.cryptoCoin = data;
            this.getCoinIds();
          } else {
            this.router.navigateByUrl('cryptocoin/error');
          }},
        err => {
          console.log('in comp' + err);
          this.router.navigateByUrl('cryptocoin/error');
      });
    }

  navigateToCoinDetails(coinId) {
    if (coinId !== null && !isNaN(coinId) && this.coinIds.includes(coinId)) {
      this.router.navigate(['cryptocoin/coindetails',  coinId]);
    } else {
      this.router.navigateByUrl('cryptocoin/error');
    }
  }

  sortColumn(columnName) {
    if (columnName !== null && isNaN(columnName)) {
      this.cryptoCoin.sort((a, b) => (a[columnName] > b[columnName]) ? 1 : -1);
    }
  }
}
