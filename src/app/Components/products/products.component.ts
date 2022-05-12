import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {

  prdListOfCat:IProduct[]=[];
  // categoryList:ICategory[]=[];
  // recievedSelectedCatID:number=0;


  constructor(private router:Router,
    private prdApiService:ApiProductsService,
    // private catService:ApiCategoriesService
    public matDialog:MatDialog
    ) { }


  ngOnChanges(changes: SimpleChanges): void {

    // this.prdApiService.getProductByCatID(this.recievedSelectedCatID).subscribe(prdList=>{
    //   this.prdListOfCat=prdList;
    // })
  }

  ngOnInit(): void {

    this.prdApiService.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    })

    // this.catService.getAllCategories().subscribe(categoryList=>{
    //   this.categoryList=categoryList;
    // })
  }

  openProductDetails(prod:IProduct)
  {
    // this.router.navigate(['/',prdID]);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=prod;
    this.matDialog.open(DetailsComponent,dialogConfig)
  }

  deleteProduct(Pid:number)
  {
    // console.log(Pid);
    // this.prdApiService.DeleteProductByID(Pid).subscribe(prdList=>{
    //   this.prdListOfCat=prdList;
    // })
    if(confirm("Are you sure to delete?"))
    {
      this.prdApiService.DeleteProductByID(Pid).subscribe(prdList=>{
        this.prdApiService.getAllProducts().subscribe(products=>{
          this.prdListOfCat=products;
        })
      })

    }

  }

  createimgpath=(serverpath:string)=> {

    return `https://localhost:9964/${serverpath}`

    }

}
