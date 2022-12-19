import { Component, OnInit } from '@angular/core';
import { OdcService } from './odc.service';

@Component({
  selector: 'app-root',
  templateUrl: './odc.component.html',
  styleUrls: ['./odc.component.css']
})
export class AppComponent  {
  
  constructor(private odcService: OdcService) { }

  
  title = 'odc';


  }