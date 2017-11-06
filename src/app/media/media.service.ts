import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import {Media} from './media';

const mediaUrl = 'http://localhost:3004/media';
// const mediaUrl = 'http://landman.herokuapp.com/api/media/search?all';

@Injectable()
export class MediaService {

	constructor(private httpClient:HttpClient){}

	private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	private headerOptions = {headers: this.httpHeaders};
	
	getList(): Observable <Media[]> {
		console.log('get media list from service');
		return this.httpClient.get(mediaUrl, this.headerOptions)
								.catch(this.handleError);      
	}

	delete(media:Media | string): Observable<Media> {
		const id = typeof media === 'string' ? media : media.id;
		console.log(media === 'string');
		console.log(id);
		const deleteUrl = `${mediaUrl}/${id}`;
		return this.httpClient.delete(deleteUrl, this.headerOptions)
								.catch(this.handleError);
	}

	create(media:Media): Observable<Media> {
		console.log('create new media');
		const createUrl = mediaUrl;
		return this.httpClient.post(createUrl, media, this.headerOptions)
								.catch(this.handleError);
	}

	update(media:Media | string): Observable<Media> {
		const id = typeof media === 'string' ? media : media.id;
		console.log(media === 'string');
		console.log(media);
		const updateUrl =`${mediaUrl}/${id}`;
		return this.httpClient.put(updateUrl, media, this.headerOptions)
								.catch(this.handleError);
	}

	private handleError(error: any): Observable<any> {
    	console.error('An error occurred', error);
    	return Observable.throw(error);
	}
}