import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 15,
      slidesPerGroup: 5,
      autoplay: true,
      loop: true,
      /*pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },*/
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 1,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 15,
          slidesPerGroup: 2,
        },
        968: {
          slidesPerView: 3,
          spaceBetween: 15,
          slidesPerGroup: 3,
        },
        1124: {
          slidesPerView: 5,
          spaceBetween: 15,
          slidesPerGroup: 5,
        },
      },
    });
  }
}
