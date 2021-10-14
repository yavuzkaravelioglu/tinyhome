import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.scss']
})
export class Model2Component implements OnInit {

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
            small: 'assets/img/m2/1-(1728x1152).jpg',
            medium: 'assets/img/m2/1-(1728x1152).jpg',
            big: 'assets/img/m2/1-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/2-(1728x1152).jpg',
            medium: 'assets/img/m2/2-(1728x1152).jpg',
            big: 'assets/img/m2/2-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/3-(1728x1152).jpg',
            medium: 'assets/img/m2/3-(1728x1152).jpg',
            big: 'assets/img/m2/3-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/4-(1728x1152).jpg',
            medium: 'assets/img/m2/4-(1728x1152).jpg',
            big: 'assets/img/m2/4-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/5-(1728x1152).jpg',
            medium: 'assets/img/m2/5-(1728x1152).jpg',
            big: 'assets/img/m2/5-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/6-(1728x1152).jpg',
            medium: 'assets/img/m2/6-(1728x1152).jpg',
            big: 'assets/img/m2/6-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/7-(1728x1152).jpg',
            medium: 'assets/img/m2/7-(1728x1152).jpg',
            big: 'assets/img/m2/7-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/8-(1728x1152).jpg',
            medium: 'assets/img/m2/8-(1728x1152).jpg',
            big: 'assets/img/m2/8-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/9-(1728x1152).jpg',
            medium: 'assets/img/m2/9-(1728x1152).jpg',
            big: 'assets/img/m2/9-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/10-(1728x1152).jpg',
            medium: 'assets/img/m2/10-(1728x1152).jpg',
            big: 'assets/img/m2/10-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/11-(1728x1152).jpg',
            medium: 'assets/img/m2/11-(1728x1152).jpg',
            big: 'assets/img/m2/11-(1728x1152).jpg'
        },
        {
            small: 'assets/img/m2/12-(1728x1152).jpg',
            medium: 'assets/img/m2/12-(1728x1152).jpg',
            big: 'assets/img/m2/12-(1728x1152).jpg'
        }
        
    ];

  }

}
