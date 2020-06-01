import { Component } from '@angular/core';
import { ApexApiService } from '../services/apex-api-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apexApiService: ApexApiService) {
    apexApiService.getPlayerData().subscribe(data => {
      console.log(data);
    });
  }
}
