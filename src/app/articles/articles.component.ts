import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Article } from "./article.model";
import { UploadService } from "../services/upload.service";
import { Upload } from "../models/upload.model";
import * as _ from "lodash"; // to help loop over files more succinctly
import { AngularFireList } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"]
})
export class ArticlesComponent implements OnInit {
  files: FileList;
  upload: Upload;
  newArticle: Article = new Article();
  articleList: AngularFireList<any>;
  private basePath = "/uploads";

  constructor(
    private uploadService: UploadService,
    private ngFire: AngularFireModule,
    private db: AngularFireDatabase,
    private tostr: ToastrService,
    private router: Router
  ) {}

  getData() {
    this.articleList = this.db.list("articles");
    return this.articleList;
  }

  ngOnInit() {
    this.newArticle.title = "";
    this.newArticle.website = "";
    this.newArticle.skills = "";
    this.newArticle.body = "";
    this.getData();
  }

  // Upload Image
  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      // three observers
      // 1.) state_changed observer
      snapshot => {
        // upload in progress
        upload.progress =
          (uploadTask.snapshot.bytesTransferred /
            uploadTask.snapshot.totalBytes) *
          100;
        console.log(upload.progress);
      },
      // 2.) error observer
      error => {
        // upload failed
        console.log(error);
      },
      // 3.) success observer
      (): any => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    this.newArticle.url = upload.url;
  }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, idx => {
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadFile(this.upload);
    });
  }

  insertArticle(article: Article) {
    this.articleList.push({
      title: article.title,
      website: article.website,
      skills: article.skills,
      body: article.body,
      url: article.url
    });
  }

  onSubmit(articleForm: NgForm) {
    this.insertArticle(articleForm.value);
    this.resetForm(articleForm);
    this.tostr.success("Submitted Succcessfully", "Article Created");
    setTimeout(() => {
      this.router.navigate(["/dashboard"]);
    }, 2000);
  }

  resetForm(articleForm?: NgForm) {
    if (articleForm != null) articleForm.reset();
    this.newArticle = {
      title: "",
      website: "",
      body: "",
      skills: "",
      url: ""
    };
  }
}
