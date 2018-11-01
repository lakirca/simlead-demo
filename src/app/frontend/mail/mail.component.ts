import {Component, OnInit} from "@angular/core";
import {NgForm, Validators, FormGroup, FormBuilder, FormControl} from "../../../../node_modules/@angular/forms";
import {AngularFireDatabase} from "../../../../node_modules/angularfire2/database-deprecated";
import {URLSearchParams, Http, Headers} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import {CustomService} from "../../articles/custom.service";
import {Article} from "../../articles/article.model";
import {isString} from "angularfire2/database-deprecated/utils";


@Component({
    selector: "app-mail",
    templateUrl: "./mail.component.html",
    styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
    recaptcha;
    constructor(private af:AngularFireDatabase,
                private http:Http,
                private customService:CustomService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {

    }
    resolved(captchaResponse: string) {
        this.recaptcha = captchaResponse;
        console.log(`Resolved captcha with response ${captchaResponse}:`, "isString",isString(this.recaptcha));
    }

    onSubmit(form:NgForm) {
        // console.log(form);
        const value = form.value;
        const name = value.name;
        const email = value.email;
        const message = value.content;
        const subject = value.subject;

        let formRequest = {name, email, subject, message};
        if(isString(this.recaptcha)) {
            this.af.list('/messages').push(formRequest);
            form.reset();
        }
    }

    submitForm(form:NgForm) {
        let url = 'https://us-central1-simlead-demo.cloudfunctions.net/httpEmail';
        let params:URLSearchParams = new URLSearchParams();
        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

        params.set('to', 'user@example.com');
        params.set('from', 'you@yoursupercoolapp.com');
        params.set('subject', 'test-email');
        params.set('content', 'Hello World');
        let body = {
            to: 'user@example.com',
            from: 'you@yoursupercoolapp.com',
            subject: 'test-email',
            content: 'Hello World'
        }
        // {headers: headers}
        return this.http.post(url, params)
            .toPromise()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }
    title;
    website;
    skills;
    body;
    url;
    key;
    writeData() {
        let arL: Article = {
            title: this.title,
            website: this.website,
            skills: this.skills,
            body: this.body,
            url: this.url,
            $key:this.key
        }
        this.customService.insertArticle(arL);
    }
}
