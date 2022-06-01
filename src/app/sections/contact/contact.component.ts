import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  displayStyle = "none";
  displayLoading = "none";
  constructor(private contactData: ContactService) { }

  ngOnInit(): void {
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
      // var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      //   keyboard: false
      // })
      // myModal.show();
      this.displayLoading = "none";
      this.displayStyle = "block";
    })
    .catch(error => console.log('error', error));
  }

}
