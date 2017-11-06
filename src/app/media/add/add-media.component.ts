import {Component, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ModalMediaComponent} from '../modal/modal-media.component';
import {Media} from '../media';

@Component({
  selector: 'add-media',
  templateUrl: './add-media.component.html',
})
export class AddMediaComponent {

	@Output() onAdd = new EventEmitter<Media>();

	constructor(private modalService: NgbModal) {}

	open() {
		const modalContent = this.modalService.open(ModalMediaComponent);
		const modalInstance = modalContent.componentInstance;
		modalInstance.media = new Media;
		modalContent.result.then((media) => {
			if(media) {
				this.onAdd.emit(media);
			}
		}, (media) => {});
	}
}