import { Component, OnInit } from '@angular/core';
import { GifServiceService } from '../gif-service.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];
  // despues de private, se de la un nombre con sentido y luego aca se llama a
  // la linea 8 "export class ***GifServiceService*** del TS del gif-service.service"
  constructor(private giftService: GifServiceService) {}

  ngOnInit(): void {
    this.giftService.getTrendingGifs()
    .subscribe((response: any) => {
      this.gifs = response.data;
    });
  }
}
 