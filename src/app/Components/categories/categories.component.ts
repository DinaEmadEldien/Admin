import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  catList:ICategory[]=[];

  constructor(private apicatService:ApiCategoriesService) { }

  ngOnInit(): void {

    this.apicatService.getAllCategories().subscribe(catList=>{
      this.catList=catList;
    })
  }

  deleteCategory(CatID:number)
  {
    if(confirm("Are you sure to delete?"))
    {
      this.apicatService.DeleteCategoryByID(CatID).subscribe(catList=>{
        this.apicatService.getAllCategories().subscribe(categories=>{
          this.catList=categories;
        })
      })

    }
  }

}
