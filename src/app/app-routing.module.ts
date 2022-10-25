import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { HomeComponent } from './home/home.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gifs', component: GifsComponent },
  { path: 'stickers', component: StickersComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
