import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './odc.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoughnutChartComponent } from './doughnut/doughnut';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    TableComponent
   
  ],
  imports: [
    BrowserModule,
    MatTabsModule, 
    BrowserAnimationsModule,
    NgxEchartsModule,
    MatTableModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({

      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ODCModule { }
