import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CryptoCoin } from '../Models/CryptoCoin';
import { catchError, map, retry, retryWhen, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CryptoCoinService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<CryptoCoin[]> {
    return this.http.get<CryptoCoin[]>(`cryptocoins/getCoins`)
    .pipe(
      tap(() => console.log('HTTP request executed')),
      catchError(err => {
        console.log(err);
        throw err;
      })
  );
  }

  getCoinDetails(coinId): Observable<CryptoCoin> {
    const hparams = new HttpParams().set(coinId, coinId);
    return this.http.get<any>(`cryptocoins/getCoinDetails/${coinId}`)
    .pipe(
      tap(() => console.log('HTTP request executed')),
      catchError(err => {
        console.log(err);
        throw err;
      })
  );
  }
}
