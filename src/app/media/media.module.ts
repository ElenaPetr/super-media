import {NgModule} from '@angular/core';
import  {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UUID } from 'angular2-uuid';

import {MediaRoutingModule} from './media-routing.module';
import {MediaService} from './media.service';
import {MediaListComponent} from './list/media-list.component';
import {MediaCardComponent} from './card/media-card.component';
import {AddMediaComponent} from './add/add-media.component';
import {ModalMediaComponent} from './modal/modal-media.component';

@NgModule({
  imports: [
  	CommonModule,
    HttpClientModule,
    MediaRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MediaListComponent,
    MediaCardComponent,
    AddMediaComponent,
    ModalMediaComponent
  ],
  providers:[MediaService],
  entryComponents: [ModalMediaComponent]
})
export class MediaModule {}