import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';
import { ApiProductsService } from 'src/app/Services/api-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProduct:IProduct={} as IProduct;
  categoryList:ICategory[]=[];

  message:string="";

  constructor(private apiProdService:ApiProductsService,private router:Router,private apiCatService:ApiCategoriesService,private httpClient:HttpClient) {

    this.apiCatService.getAllCategories().subscribe(categoryList=>{
      this.categoryList=categoryList;
    })

  }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.apiProdService.AddNewProduct(this.newProduct).subscribe(prd=>{
      this.router.navigate(['/Products']);
    })

  }


  uploadfile(files:any,Myfile:string)

  {

    if (files.length === 0) {

      return;

    }

    let fileToUpload = <File>files[0];

    const formData = new FormData();

    formData.append('file', fileToUpload, fileToUpload.name);



    this.httpClient.post('http://localhost:9964/api/Upload', formData, {reportProgress: true, observe: 'events'})

      .subscribe({

        next: (event) => {

        if (event.type === HttpEventType.UploadProgress){}

          // this.progress = Math.round(100 * event.loaded / event.total);

        else if (event.type === HttpEventType.Response) {



               this.newProduct.img=Myfile.split('\\')[2];

               console.log(this.newProduct.img);

               this.message = 'Upload success.';



          //this.onUploadFinished.emit(event.body);

        }

      },

      //error: (err: HttpErrorResponse) => console.log(err)

    });

  }

}
