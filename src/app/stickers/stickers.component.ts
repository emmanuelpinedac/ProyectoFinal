import { Component, OnInit } from '@angular/core';
import { GifServiceService } from '../gif-service.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers: any[]=[]

  constructor(private stickerService:GifServiceService) { }

  ngOnInit(): void {
    this.stickerService.getTrendingStickers()
    .subscribe((response:any)=>{
      this.stickers=response.data;
    });
  }

}
