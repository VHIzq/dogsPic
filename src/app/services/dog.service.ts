import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private serviceUrl: string = 'https://dog.ceo/api/breed/hound/images/random/10';
  private _history: string[] = [];
  public results: any[] = [];

  get history() {
    return [...this._history];
  }

  searchPuppies( query: string = '') {
    query = query.trim().toLowerCase();

    if( !this._history.includes( query )){
      this._history.unshift( query );
      this._history = this._history.splice(0, 9);
    }
  };


}
