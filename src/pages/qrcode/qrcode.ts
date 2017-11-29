import { AlertController } from "ionic-angular";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PopoverController } from "ionic-angular";

@Component({
  selector: "page-qrcode",
  templateUrl: "qrcode.html"
})
export class QRCodePage {
  show: boolean;

  constructor(private alertCtrl: AlertController) {
    const self = this;
    self.show = false;
    const alert = this.alertCtrl.create({
      title: "Confirmar abertura",
      inputs: [{ name: "password", placeholder: "Senha", type: "password" }],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Confirmar",
          handler: data => {
            self.show = true
          }
        }
      ]
    });

    alert.present();
  }
}
