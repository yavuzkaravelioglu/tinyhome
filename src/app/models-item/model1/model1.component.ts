import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';


@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.scss']
})
export class Model1Component implements OnInit {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

      this.galleryOptions = [
        {
            width: '800px',
            height: '550px',
            //thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            imageBullets: true,
            thumbnails: false,
            previewCloseOnEsc: true,
            previewKeyboardNavigation: true,
            imageSwipe: true,
            arrowPrevIcon: "fa fa-chevron-left",
            arrowNextIcon: "fa fa-chevron-right",
            closeIcon: "fa fa-window-close",
            imageArrowsAutoHide: true,
            imageInfinityMove: true,
            previewInfinityMove: true,
            previewCloseOnClick: true
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: 'assets/img/m1/1.jpg',
            medium: 'assets/img/m1/1.jpg',
            big: 'assets/img/m1/1.jpg'
        },
        {
            small: 'assets/img/m1/2.jpg',
            medium: 'assets/img/m1/2.jpg',
            big: 'assets/img/m1/2.jpg'
        },
        {
            small: 'assets/img/m1/3.jpg',
            medium: 'assets/img/m1/3.jpg',
            big: 'assets/img/m1/3.jpg'
        },
        {
            small: 'assets/img/m1/4.jpg',
            medium: 'assets/img/m1/4.jpg',
            big: 'assets/img/m1/4.jpg'
        },
        {
            small: 'assets/img/m1/5.jpg',
            medium: 'assets/img/m1/5.jpg',
            big: 'assets/img/m1/5.jpg'
        },
        {
            small: 'assets/img/m1/6.jpg',
            medium: 'assets/img/m1/6.jpg',
            big: 'assets/img/m1/6.jpg'
        },
        {
            small: 'assets/img/m1/7.jpg',
            medium: 'assets/img/m1/7.jpg',
            big: 'assets/img/m1/7.jpg'
        },
        {
            small: 'assets/img/m1/8.jpg',
            medium: 'assets/img/m1/8.jpg',
            big: 'assets/img/m1/8.jpg'
        },
        {
            small: 'assets/img/m1/9.jpg',
            medium: 'assets/img/m1/9.jpg',
            big: 'assets/img/m1/9.jpg'
        }
        
    ];

  }

}
