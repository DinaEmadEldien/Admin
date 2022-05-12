import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  private httpOptions;

  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"application/json"   //Headers data
        ,"Authorization":"token"
      }

      )
    }
  }

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/Product`);
  }

  getProductByCatID(CategoryID:Number):Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.ApiBaseUrl}/api/Product/AnyThing/${CategoryID}`);
  }

  getProductByID(prdID:number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.ApiBaseUrl}/api/Product/${prdID}`);
  }

  AddNewProduct(newPrd:IProduct):Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.ApiBaseUrl}/api/Product`,JSON.stringify(newPrd),this.httpOptions);
  }

  UpdateProduct(Pid:number,newPrd:IProduct):Observable<IProduct>
  {
    return this.httpClient.put<IProduct>(`${environment.ApiBaseUrl}/api/Product/${Pid}`,newPrd);
  }

  DeleteProductByID(prdID:number):Observable<IProduct[]>
  {
    return this.httpClient.delete<IProduct[]>(`${environment.ApiBaseUrl}/api/Product/${prdID}`);
  }
}
