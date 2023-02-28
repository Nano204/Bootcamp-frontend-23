import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'interactive-type-tag',
  templateUrl: './interactive-type-tag.component.html',
  styleUrls: ['./interactive-type-tag.component.sass'],
})
export class InteractiveTypeTagComponent implements OnInit {
  @Input() type!: string;
  image: string = '';
  ngOnInit(): void {
    this.type = this.capitalize(this.type);
    this.image = `../../assets/types/${this.type}.svg`;
  }
  capitalize(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}
