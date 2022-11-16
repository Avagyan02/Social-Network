import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/core/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public get authImage(): string { return this._imgService.authImg; }

  constructor(
    private _imgService: ImagesService
  ) { }

  ngOnInit(): void {
  }

}
