import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
