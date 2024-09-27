import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  linkTitle: string = ""
}
