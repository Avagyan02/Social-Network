import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-post',
  templateUrl: './large-post.component.html',
  styleUrls: ['./large-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LargePostComponent implements OnInit {

  // @Input('post') public post!: string; 

  constructor() { }

  ngOnInit(): void {
  }

}