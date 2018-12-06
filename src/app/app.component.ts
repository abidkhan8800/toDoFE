import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   restItems: any;
   items: Array<string>;
   restItemsUrl = 'http://localhost:3128/tasks';

   constructor(private http: HttpClient){}
   ngOnInit(){
     this.getRestItems();
   }
   
   getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems.length);
          for(let i=0;i<=this.restItems.length;i++){
            console.log(i);
            // this.items.push(this.restItems[i].tname);
            // console.log(this.items);
          }
        }
        
    )
      
    
  }
 
  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
  
  
  newItem="";
  pushItem = function(){
    console.log("hello");
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem="";
    }
  }
  removeItem = function(index){
    this.items.splice(index, 1);
  }
}
