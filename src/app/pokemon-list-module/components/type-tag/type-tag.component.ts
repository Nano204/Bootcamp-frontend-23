import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.sass'],
})
export class TypeTagComponent implements OnInit {
  @Input() type!: string;
  image: string = '';
  ngOnInit(): void {
    this.image = `../../assets/types/${this.type}.svg`;
  }
}
