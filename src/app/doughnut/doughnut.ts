import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
//import { OdcData } from 'odc.data';

@Component({
  selector: 'doughnut',
  template: '<div echarts [options]="chartOption" class="demo-chart"></div>'
  
})
export class DoughnutChartComponent implements OnInit{
 // odcData !: OdcData[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 10, name: 'Antimalware' },
          { value: 10, name: 'External Content' },
          { value: 65, name: 'Patch' },
          { value: 0, name: 'Linked Content' }
        ]
      }
    ]
  };
}