import { Component,Input,OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
    @Input()
    food!:Foods;
    tags:Tag[] =[];

    foodPageTags?:string[];
    constructor(private activatedRoute: ActivatedRoute,private foodService:FoodService,private cartService : CartService,
      private router: Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
      if(!this.foodPageTags)
      this.tags = this.foodService.getAllTag();
    }
    ngOnInit(){
      
    }
    addToCart(){
      this.cartService.addtToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
}
