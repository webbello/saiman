import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';
// import { Modal } from 'bootstrap';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formModal: any;
  displayLoading = "none";
  constructor(private contactData: ContactService) { }

  ngOnInit(): void {
    const element = document.getElementById('contactSuccessModel') as HTMLElement;
    // this.formModal = new Modal(element);
    this.formModal =  new (window as any).bootstrap.Modal(element)
  }
  onSubmit(data: any) {
    this.displayLoading = "block";
    console.warn('Your form data : ', data.value);
    // this.contactData.sendMessage(data.value).subscribe( (result) => {
    //   console.log('result', result)
    // })
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var formdata = new FormData();
    
    formdata.append("name", data.value.name);
    formdata.append("email", data.value.email);
    formdata.append("subject", data.value.subject);
    formdata.append("message", data.value.message);
    formdata.append("date", dateTime);
    console.log('data', formdata);

    fetch("https://script.google.com/macros/s/AKfycbyD84cmP1oiyGHg42yNN87ImwIzyOUWj1iyuMueXWFngyA--wEwMD1XwwAXXCFIHzTv/exec", {method: "POST", body: formdata})
    .then(response => response.json())
    .then(result => {
      console.log('result', result)
      
      this.formModal.show();
      this.displayLoading = "none";
    })
    .catch(error => console.log('error', error));
  }

}
