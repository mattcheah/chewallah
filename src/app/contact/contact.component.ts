import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  phone: string = "";
  message: string = "";
  messageSent: boolean = false;
  responseMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendMessage():void {
    let formData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    }
    let thisComponent = this;

    fetch("http://chewallahdesigns.com/backend/contact-form-submission.php", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json"
      },
      mode: "no-cors"
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      } else {
        throw res.json();
      }
    })
    .then(function(response) {
      // console.log(response);
      thisComponent.messageSent = true;
      thisComponent.responseMessage = response.message;
    })
    .catch(function(errorPromise) {
      errorPromise.then(function(error) {
        thisComponent.messageSent = true;
        thisComponent.responseMessage = error.message;
        console.log("Error: POST Request Failed: "+ error.message);
      });
    });
  }

}