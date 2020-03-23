import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i = 0;
  txt = [
    // ' Summer Dates: July 25 - August 2, 2020',
    ' is an LGBTQ+ camp for families and allies',
    ' is for families like yours',
    ' is a place to be yourself',
  ];
  index = 0;
  speed = 50;
  timeouts = [];

  slides = [
    './assets/front-image-2.jpg',
    './assets/front-image-3.jpg',
    './assets/front-image-4.jpg',
    './assets/centralcamp.jpg',
    './assets/emptytent.jpg'
  ];
  gallery = [
    './assets/gallery-1.jpg',
    './assets/new-imgs/img3.JPG',
    './assets/new-imgs/img8.JPG',
    './assets/new-imgs/img21.JPG',
    './assets/new-imgs/img11.JPG',
    './assets/new-imgs/img24.JPG',
    './assets/new-imgs/img19.JPG',
    './assets/new-imgs/img17.JPG'
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private titleService: Title) {
    this.titleService.setTitle('Camp It Up!: A Summer Camp for LGBTQ+ Families');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let $videoSrc: string;
      $('.video-btn').click(function () {
        $videoSrc = $(this).data('src');
        const url = $videoSrc + '?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1';
        $('#video').attr('src', url);
      });
      $('.close').click(function () {
        $('#video').attr('src', $videoSrc);
      });
      $('.carousel.lazy').on('slide', function (ev) {
        console.log('in');
        const lazy = $(ev.relatedTarget).find('img[data-src]');
        lazy.attr('src', lazy.data('src'));
        lazy.removeAttr('data-src');
      });
      $('.carousel.lazy').on('slide.bs.carousel', function () {
        console.log('Slide Event');
        // console.log('slid event');
      });
      setTimeout(this.typeWriter.bind(this), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timeouts.length > 0) {
      console.log('clearing timeouts');
      for (const t of this.timeouts) {
        clearTimeout(t);
      }
    }
  }

  typeWriter() {
    if (this.i < this.txt[this.index].length) {
      const t = this;
      $('.type').each(function () {
        $(this).append(t.txt[t.index].charAt(t.i));
      });
      this.i++;
      this.timeouts[0] = setTimeout(this.typeWriter.bind(this), this.speed);
    } else {
      this.i = 0;
      this.timeouts[1] = setTimeout(this.deleteWriter.bind(this), 2000);
    }
  }

  deleteWriter() {
    if (this.i < this.txt[this.index].length) {
      $('.type').each(function () {
        $(this).html($(this).html().slice(0, -1));
      });
      this.i++;
      this.timeouts[2] = setTimeout(this.deleteWriter.bind(this), this.speed);
    } else if (this.index === this.txt.length - 1) {
      this.index = 0;
      this.i = 0;
      this.timeouts[3] = setTimeout(this.typeWriter.bind(this), 1500);
    } else {
      this.index++;
      this.i = 0;
      this.timeouts[4] = setTimeout(this.typeWriter.bind(this), 1500);
    }
  }
}
