import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  currentTab: String = 'store';
  constructor() {}

  setCurrentTab({ tab }) {
    this.currentTab = tab;
  }
}
