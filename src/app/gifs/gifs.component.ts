import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifServiceService } from '../gif-service.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription!: Subscription;

  constructor(private giftService: GifServiceService) {}

  ngOnInit(): void {
    this.giftService.getTrendingGifs();
    this.subscription = this.giftService
      .getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      });
  }
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.giftService.searchGifs(searchTerm);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
