import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { RsaService } from "../../services/rsa";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    const rsa = new RsaService();

    const message:string = "Message";
    const e = rsa.encrypt(message);
    const d = rsa.decrypt(e);

    console.log("Decrypted: ", d)

  }
}
