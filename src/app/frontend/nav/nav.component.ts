import { Component, OnInit } from '@angular/core';
import {ElementRef} from "@angular/core";
import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  navBarTogglerIsVisible() {
    console.log("offsetParent", this.navbarToggler.nativeElement.offsetParent)
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
