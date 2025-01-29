import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey:       string = 'Ezi2uTTVE6anDBXti2DBh24v8MdEGDzp';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];

  constructor( private http: HttpClient) {
    this.loadSessionStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory( tag: string ) {
    tag = tag.toLocaleLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveSessionStorage();
  }

  private saveSessionStorage(): void {
    sessionStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadSessionStorage(): void {
    if( !sessionStorage.getItem('history') ) return;

    this._tagsHistory = JSON.parse( sessionStorage.getItem('history')! );

    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag( tag: string ): void {

    if( tag.length == 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => this.gifList = resp.data );
  }
}
