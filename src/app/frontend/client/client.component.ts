import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"]
})
export class ClientComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
  ) {
    this.addJsToElement('../../../assets/js/owl.carousel.min.js');
  }

  ngOnInit() {}
  
  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

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

  client4 = {
    name: "Kim Chivhima",
    body: "I am happy to recommend you the high quality of developing and leadership work for Alexey and Simlead team for ZipCoin projects. We are one of the leading and cutting edge technology out of Canada and USA using Epic Operating System (EOS) for our blockchain technology projects. Within a short period of time Alexey was able to build a high respective developers to work on our project.  Amazing technical capabilities and truly enjoy working with him. He  actually cares about the  product and contribution to the organization. Communication and transparency  is never an issue. The team he built for our project and quality of work they put out there is great.  They really work with you on what you need. ZipCoin is extremely satisfied with the piece of work and his team's ongoing contribution to our EOS blockchain project.",
    title: "ZipCoin CEO"
    }
}
