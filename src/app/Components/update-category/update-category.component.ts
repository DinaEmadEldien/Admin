import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  newCategory:ICategory={} as ICategory;
  currCatID:number=0;


  constructor(private router:Router,private apiCatService:ApiCategoriesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveCategory()
  {

    this.currCatID=Number(this.activatedRoute.snapshot.paramMap.get("Cid"));

    this.apiCatService.UpdateCategory(this.currCatID,this.newCategory).subscribe(cat=>{
      this.router.navigate(['/Categories']);
    })

  }

}
