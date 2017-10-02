import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeners',
  templateUrl: './listeners.component.html',
  styleUrls: ['./listeners.component.css']
})
export class ListenersComponent implements OnInit {

	allowNewServer = false;
	cssClass = 'btn btn-default';
	createServerStatus =  'No server created for the moment';

  	constructor() { 
		setTimeout(() => {
			this.allowNewServer = true;
			this.cssClass = 'btn btn-success';
		}, 3000);
	}

  	ngOnInit() {
	 }
	 
	 onCreateServer() {
		 this.createServerStatus = 'A new server is created';
	 }

}
