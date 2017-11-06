import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UUID} from 'angular2-uuid';


import {Media} from './../media';
import {MediaService} from '../media.service';

@Component({
  selector: 'modal-media',
  templateUrl: './modal-media.component.html'
})
export class ModalMediaComponent implements OnInit {

	modalTitle:string;
	modalSubmit:string;
	mediaForm:FormGroup;
	@Input() media:Media;
	
	constructor(public activeModal: NgbActiveModal,
				private mediaService:MediaService) {}

	ngOnInit(){
		console.log('modal media');
		this.mediaForm = new FormGroup({
			'id': new FormControl(this.media.id),
			'url': new FormControl(this.media.url),
			'description': new FormControl(this.media.description)
		});
		this.checkMedia(this.media);
	}

	checkMedia(media:Media): boolean {
		console.log(media);
		if (media.id) {
			this.modalTitle = `Update media ${media.description}`;
			this.modalSubmit = 'Update';
			return true;
		} else {
			this.modalTitle = 'Add media';
			this.modalSubmit = 'Add';
			return false;
		}
	}

	submitMedia() {
		const media = this.mediaForm.value;
		if(this.checkMedia(media)) {
			this.updateMedia(media);
		} else {
			this.addMedia(media);
		}
	}

	addMedia(media:Media) {
	
		console.log('add media ' + media.id);

		this.mediaService.create(media).subscribe(
				newMedia => this.activeModal.close(newMedia)
			);
	}

	updateMedia(media:Media) {
		console.log('update media ' + media.id);

		this.mediaService.update(media).subscribe(
		   updateMedia => this.activeModal.close(updateMedia)
			);
	}
}