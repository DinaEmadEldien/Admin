import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  newCategory:ICategory={} as ICategory;

  constructor(private apiCatService:ApiCategoriesService,private router:Router) { }

  ngOnInit(): void {
  }

  saveCategory()
  {
    this.apiCatService.AddNewCategory(this.newCategory).subscribe(cat=>{
      this.router.navigate(['/Categories']);
    })

  }

}
