import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsService } from './services/items.service';
import { VoteComponent } from './vote/vote.component';
import { VotesService } from './services/votes.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemsService, VotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
