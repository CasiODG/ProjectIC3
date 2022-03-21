import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();}

     // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }
}
