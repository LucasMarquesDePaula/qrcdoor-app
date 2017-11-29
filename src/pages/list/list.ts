import { AlertController } from "ionic-angular";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  selectedItem: any;
  items: Array<{ text: string, disabled: boolean }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        text: `Ambiente ${i}`,
        disabled: Math.random() > 0.5
      });
    }
  }

  itemTapped(event, item) {
    const alert = this.alertCtrl.create({
      title: "Confirmar abertura",
      inputs: [
        { name: "password", placeholder: "Senha", type: "password" }
      ],
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

          }
        }
      ]
    });

    alert.present();
  }
}
