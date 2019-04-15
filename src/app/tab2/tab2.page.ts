import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  options = [];

  ionViewDidEnter() {
    Promise.resolve().then(() => {
      for (let i = 0; i < 300; ++i) {
        this.options.push({id: i, label: `option ${i + 1}`});
      }
    });
  }

}
