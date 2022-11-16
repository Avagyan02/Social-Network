import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private _path: string = 'assets/images';

  constructor() { }

  public authImg: string = `${this._path}/auth-image.png`;
  
}
