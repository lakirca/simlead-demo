import { Component, OnInit } from "@angular/core";
import { NgForm } from "../../../../node_modules/@angular/forms";
import { AngularFireDatabase } from "../../../../node_modules/angularfire2/database-deprecated";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
  
  constructor(private af: AngularFireDatabase) {
  }

  ngOnInit() {
  }
  

  onSubmit(form: NgForm){
    console.log(form);
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    let formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    form.reset();
  }
}
