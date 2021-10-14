import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { delay_fade, delay_fade_slower } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    delay_fade,
    delay_fade_slower,
    
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('0.5s')),
      transition('hide => show', animate('0.5s'))
    ]),

    trigger('slide_in', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])


    
  ]
})
export class HomeComponent implements OnInit {

  state = 'show';
  state_2 = 'not_allowed';

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition <= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide';
        this.state_2 = 'allowed';
      }

    }

}


