import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';
import { ApiProductsService } from 'src/app/Services/api-products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  newProduct:IProduct={} as IProduct;
  categoryList:ICategory[]=[];
  currPrdID:number=0;

  message:string="";





  constructor(private apiProdService:ApiProductsService,private router:Router,
    private apiCatService:ApiCategoriesService,
    private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient
    )
    {
      this.apiCatService.getAllCategories().subscribe(categoryList=>{
        this.categoryList=categoryList;
      })

    }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("Pid"));

    this.apiProdService.UpdateProduct(this.currPrdID,this.newProduct).subscribe(prd=>{
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
