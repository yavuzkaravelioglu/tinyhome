import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    
    fade

  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
