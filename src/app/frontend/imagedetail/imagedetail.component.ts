import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";
import { ImageService } from "../../services/image.service";
import { Location } from "../../../../node_modules/@angular/common";

@Component({
  selector: "app-imagedetail",
  templateUrl: "./imagedetail.component.html",
  styleUrls: ["./imagedetail.component.css"]
})
export class ImagedetailComponent implements OnInit {
  imageUrl = "";

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  backClicked() {
    this._location.back();
  }
  getImageUrl(key: string) {
    this.imageService.getImage(key).then(image => (this.imageUrl = image.url));
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params["id"]);
  }
}
