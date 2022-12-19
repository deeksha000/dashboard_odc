import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class OdcService {

  constructor(private http: HttpClient) { }

//  private Url =  "/AjaxServlet?AJAXHandler=com.novell.zenworks.admin.pages.diagnostics.ajax";
private Url = "https://10.71.65.192/zenworks-content/stats/storage";

  getResponse():Observable<String>{
  return this.http.get<String>(this.Url);
  }

}