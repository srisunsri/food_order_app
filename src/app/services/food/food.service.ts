import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string) :Foods[]{
    return tag == 'All'?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
  }
  getAllTag():Tag[]{
    return [
      { name: 'All', count: 12},
      { name: 'Healthy Lunch', count: 2},
      { name: 'Lunch Sidedish', count: 2},
      { name: 'BreakFast', count: 3},
      { name: 'Snacks', count: 5}
    ];
  }
  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Veg Meals',
        price: 80,
        cookTime: '20-25',
        favorite: true,
        origins: ['India','TamilNadu','Nagercoil'],
        star:9.5,
        imageUrl:'/assets/f1.jpg',
        tags:['Healthy Lunch'],
      },
      {
        id:2,
        name: 'Chicken Biriyani Ngl',
        price: 120,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu','Nagercoil'],
        star:9,
        imageUrl:'/assets/f14.avif',
        tags:['Healthy Lunch'],
      },
      {
        id:3,
        name:'Chicken Fry',
        price: 100,
        cookTime: '20-25',
        favorite:true,
        origins:['India'],
        star:8,
        imageUrl:'/assets/f3.jpg',
        tags:['Lunch Sidedish'],
      },
      {
        id:4,
        name:'Samosa',
        price:12,
        cookTime: '20-25',
        favorite:true,
        origins:['India'],
        star:9,
        imageUrl:'/assets/f4.jpg',
        tags:['Snacks','Desert'],
      },
      {
        id:5,
        name:'Pacharisi Muruku',
        price: 7,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:9,
        imageUrl:'/assets/f5.jpg',
        tags:['Desert','Snacks'],
      },
      {
        id:6,
        name:'Puttu - Kerala',
        price:30,
        cookTime: '20-25',
        favorite:true,
        origins:['India','Kerala'],
        star:9,
        imageUrl:'/assets/f6.webp',
        tags:['BreakFast'],
      },
      {
        id:7,
        name:'Ghee Dosai',
        price: 90,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:8,
        imageUrl:'/assets/f7.jpeg',
        tags:['BreakFast','Dinner'],
      },
      {
        id:8,
        name: 'Idly-chutney',
        price:15,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:9,
        imageUrl:'/assets/f8.jpg',
        tags:['BreakFast','Dinner'],
      },
      {
        id:9,
        name:'Ulundhu vadai',
        price:10,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:8,
        imageUrl:'/assets/f9.jpg',
        tags:['Snacks','Desert'],
      },
      {
        id:10,
        name:'Banana Chips 1kg',
        price:240,
        cookTime: 'packed',
        favorite:true,
        origins:['India','TamilNadu','Nagercoil'],
        star:10,
        imageUrl:'/assets/f10.jpeg',
        tags:['Snacks','Desert'],
      },
      {
        id:11,
        name:'Fish fry',
        price:70,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:9,
        imageUrl:'/assets/f11.jpg',
        tags:['Lunch Sidedish'],
      },
      {
        id:12,
        name: 'Bajji',
        price: 10,
        cookTime: '20-25',
        favorite:true,
        origins:['India','TamilNadu'],
        star:8,
        imageUrl:'/assets/f2.jpg',
        tags:['Desert','Snacks'],
      }
   
    ];
  }
}
