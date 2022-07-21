import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() svgName = 'example';
  @Input() fillValue = 'black';
  @Input() cardTitle = 'example.lorem-ipsum-title';
  @Input() cardContent = 'example.lorem-ipsum-full';

  constructor() { }

  ngOnInit(): void {
  }

}
