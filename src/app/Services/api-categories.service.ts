import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

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

  getAllCategories():Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.ApiBaseUrl}/api/Category`);
  }

  getCategoryByID(catID:number):Observable<ICategory>
  {
    return this.httpClient.get<ICategory>(`${environment.ApiBaseUrl}/api/Category/${catID}`);
  }

  AddNewCategory(newCat:ICategory):Observable<ICategory>
  {
    return this.httpClient.post<ICategory>(`${environment.ApiBaseUrl}/api/Category`,JSON.stringify(newCat),this.httpOptions);
  }
  UpdateCategory(Catid:number,newCat:ICategory):Observable<ICategory>
  {
    return this.httpClient.put<ICategory>(`${environment.ApiBaseUrl}/api/Category/${Catid}`,newCat);
  }

  DeleteCategoryByID(catID:number):Observable<ICategory[]>
  {
    return this.httpClient.delete<ICategory[]>(`${environment.ApiBaseUrl}/api/Category/${catID}`);
  }
}
