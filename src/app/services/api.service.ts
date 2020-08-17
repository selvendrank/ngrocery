import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductSubGroup } from '../model/product-sub-group';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl: string = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    // return this.httpClient.get(`http://localhost:53739/api/Product${this.API_KEY}`);
    return this.httpClient.get(this.baseurl + `/Product`);
  }

  public getProductGroups(companyId: number) {
    return this.httpClient.get(this.baseurl + `/ProductGroup/` + companyId);
  }

  public getProductSubGroups() {
    return this.httpClient.get(this.baseurl + `/ProductSubGroup`);
  }
  public getCompanies() {
    return this.httpClient.get(this.baseurl + `/Company`);
  }

  public SaveProductSubGroup(subGroup: ProductSubGroup) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     //Authorization: 'my-auth-token'
    //   })
    // };
    // return this.httpClient.post<ProductSubGroup>(this.baseurl + `/ProductSubGroup`, subGroup, httpOptions);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'

    });
    const params = new HttpParams()
      .set('username', 'test@example.com')
      .set('password', 'secret')
      .set('grant_type', 'password');
    const options = {
      headers,
      //params,
      withCredentials: true
    };
    this.httpClient.post('http://localhost:5000/api/ProductSubGroup', subGroup, options)
      .subscribe(response => console.log(response));

  }

  public login(userName: string, password: string) {
    return this.post(`/Login`, { loginName: userName, loginPassword: password })
  }

  private post<T>(url: string, data: T): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'

    });
    const params = new HttpParams()
      .set('username', 'test@example.com')
      .set('password', 'secret')
      .set('grant_type', 'password');
    const options = {
      headers,
      //params,
      withCredentials: true
    };
    return this.httpClient.post(this.baseurl + url, data, options);
  }
}

/*
get(url: string, options: {
      headers?: HttpHeaders;
      observe: 'response';
      params?: HttpParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
}): Observable<HttpResponse<Object>>;
*/