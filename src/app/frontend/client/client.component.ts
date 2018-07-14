import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"]
})
export class ClientComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  client1 = {
    name: "ALEX CHAMKIN",
    body:
      "Our list of requirements were many and Simlead team provided the best overall solution for our CRM system.",
    title: "Delivery Director"
  };

  client2 = {
    name: "MARK THOMPSON",
    body:
      "Working with Simlead has been a breath of fresh air. We now have hired 4 time developers and each has been extremely skilled, reliable and dedicated to their given project. Over the years, we’ve had some horror stories, hiring developers that never seen to pan out. Simlead has continued to be our best resource for finding excellent talent to join our team!",
    title: "Co-founder of Digital Kickstart"
  };

  client3 = {
    name: "JOSEPH MAGARO",
    body:
      " Simlead team were solely responsible for the maintenance and extension of our existing PHP eCommerce application built on a custom framework. Team worked on both the front end and back end of the website, proving themselves an expert in HTML, CSS, JavaScript, and PHP.",
    title: "CEO, Impact Nutraceuticals LLC"
  };
}
