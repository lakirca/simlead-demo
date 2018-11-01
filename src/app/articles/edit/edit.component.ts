import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as fb from "firebase";
import { Article } from "../article.model";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import "rxjs/add/operator/map";
import { NgForm } from "@angular/forms";
import { Upload } from "../../models/upload.model";
import { UploadService } from "../../services/upload.service";
import { AngularFireModule } from "angularfire2";
import { ToastrService } from "ngx-toastr";
import * as _ from "lodash"; // to help loop over files more succinctly

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: [
    "./edit.component.scss",
    "../../dashboard/dashboard.component.scss"
  ]
})
export class EditComponent implements OnInit {
  articleList: AngularFireList<any>;
  files: FileList;
  upload: Upload;
  selectedArticle: Article = new Article();
  articleUrl: string;
  basePath = "/uploads";

  constructor(
    private firebase: AngularFireDatabase,
    private route: ActivatedRoute,
    private uploadService: UploadService,
    private ngFire: AngularFireModule,
    private db: AngularFireDatabase,
    private tostr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"].toString();
    this.getArticleUrl(id);
    this.articleUrl = id;
    let x = this.getData();
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.articleList.push(y as Article);
        this.articleUrl = this.route.snapshot.params["id"];
      });
    });
  }

  // Image Upload Edit
  uploadFile(upload: Upload) {
    const storageRef = fb.storage().ref();
    const uploadTask = storageRef
      .child(`uploads/${upload.file.name}`)
      .put(upload.file);
    uploadTask.on(
      fb.storage.TaskEvent.STATE_CHANGED,
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
      // 2.) error observer1
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
    this.db.list(`uploads/`).push(upload);
    this.selectedArticle.url = upload.url;
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

  //
  getArticleUrl(key: string) {
    this.getArticle(key).then(article => {
      console.log(article);
      this.selectedArticle.body = article.body;
      this.selectedArticle.title = article.title;
      this.selectedArticle.skills = article.skills;
      this.selectedArticle.website = article.website;
      this.selectedArticle.url = article.url;
    });
  }

  getArticle(key: string) {
    return fb
    .database()
    .ref("articles/" + key)
    .once("value")
    .then(snap => snap.val());
  }
  
  getData() {
    this.articleList = this.firebase.list("articles");
    return this.articleList;
  }
  
  updateArticle(article: Article) {
    this.articleList.update(this.articleUrl, {
      title: article.title,
      body: article.body,
      website: article.website,
      skills: article.skills,
      url: article.url
    });
  }
  onSubmit(articleForm: NgForm) {
    this.updateArticle(articleForm.value);
    this.tostr.success("Submitted Succcessfully", "Article Upadted");
    setTimeout(() => {
      this.router.navigate(["/dashboard"]);
    }, 2000);
  }
}
