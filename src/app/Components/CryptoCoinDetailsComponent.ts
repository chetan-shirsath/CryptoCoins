import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoCoin } from '../Models/CryptoCoin';
import { CryptoCoinService } from '../Services/CryptoCoinService';

@Component({
  selector: 'app-cryptocoindetails-outlet',
  templateUrl: '../Views/CryptoCoinDetailsView.html',
  styleUrls: ['../Styles/CryptoCoinDetailsStyle.scss']
})
export class CryptoCoinDetailsComponent {

  private coin: CryptoCoin;

  constructor(private cryptoCoinService: CryptoCoinService,
    private router: ActivatedRoute,
    private route: Router) {
      this.getCoinDetails(this.router.snapshot.paramMap.get('coinId'));
   }

   getCoinDetails(coinId) {
    this.cryptoCoinService.getCoinDetails(coinId)
    .subscribe(
    data => {
      if (data !== null) {
        this.coin = data;
      } else {
        this.route.navigateByUrl('cryptocoin/error');
      }
    },
      err => {
        console.log('in comp' + err);
        this.route.navigateByUrl('cryptocoin/error');
    });
  }
}
