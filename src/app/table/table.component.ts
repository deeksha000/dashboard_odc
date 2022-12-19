import {Component} from '@angular/core';
export interface PeriodicElement {
  fileName: string;
 fileType:String;
 fileSize:String;
 DownloadedBytes:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fileName: 'WindowsPatchData.zip', fileType: 'Patch', fileSize:"24874975",DownloadedBytes:'24874975'},
  {fileName: '"windows10.0-kb5021233-x64_00bbf75a829a2cb4f37e4a2b876ea9503acfaf4d.msu.tmp"', fileType: 'Patch', fileSize:"674975",DownloadedBytes:'674975'},
  {fileName: '"windows10.0-kb5020872-x64-ndp48_bb5ae5e053bff6c04f6ea938fee416ddaf92e14e.msu.tmp"', fileType: 'Patch', fileSize:"576443",DownloadedBytes:'576443'}
]


@Component({
  selector: 'odc-table',
  styleUrls: ['table.css'],
  templateUrl: 'table.html',
})
export class TableComponent {
  displayedColumns: string[] = ['FileName','FileType', 'FileSize',  'DownloadedBytes'];
  dataSource = ELEMENT_DATA;
}
