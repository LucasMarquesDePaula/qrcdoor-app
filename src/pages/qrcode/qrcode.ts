import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PopoverController } from 'ionic-angular';

@Component({
  selector: "page-qrcode",
  templateUrl: "qrcode.html"
})
export class QRCodePage {
  selectedItem: any;
  items: Array<{ text: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        text: `Ambiente ${i}`
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    let popover = this.popoverCtrl.create(QRCodePage);
    popover.present();

    this.navCtrl.push(QRCodePage, {
      item: item
    });
  }
}
