import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formModal: any;
  displayLoading = false;
  visitorDetail: any;
  constructor(private http: HttpClient, private contactData: ContactService) {}

  ngOnInit(): void {
    const element = document.getElementById('contactSuccessModel') as HTMLElement;
    this.formModal =  new (window as any).bootstrap.Modal(element);
    this.fetchVisitorDetail();
  }
  private fetchVisitorDetail(){
    this.http.get('https://ip-api.com/json')
    .subscribe((res) => {
      console.log('fetch response', JSON. stringify(res));
      this.visitorDetail = res;
    })
  }
  onSubmit(data: any) {

    // console.log('visitorDetail', this.visitorDetail)

    if (!data.valid) {
      // data.markAsTouched();
      return;
    }
    this.displayLoading = true;
    console.warn('Your form data : ', data.value);
    // this.contactData.sendMessage(data.value).subscribe( (result) => {
    //   console.log('result', result)
    // })
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // console.log('visitorDetail', this.visitorDetail);
  
    var formdata = new FormData();

    formdata.append("name", data.value.name);
    formdata.append("email", data.value.email);
    formdata.append("subject", data.value.subject);
    formdata.append("message", data.value.message);
    formdata.append("date", dateTime);
    formdata.append("visitor", JSON.stringify(this.visitorDetail));

    // console.log('data', data.value);

    fetch("https://script.google.com/macros/s/AKfycbyD84cmP1oiyGHg42yNN87ImwIzyOUWj1iyuMueXWFngyA--wEwMD1XwwAXXCFIHzTv/exec", {method: "POST", body: formdata})
    .then(response => response.json())
    .then(result => {
      console.log('result', result)
      this.displayLoading = false;
      this.formModal.show();
      data.reset();
    })
    .catch(error => console.log('error', error));
  }

}
