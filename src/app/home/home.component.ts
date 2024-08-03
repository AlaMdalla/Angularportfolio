import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email ='alamdalla11@gmail.com';
  projectCount:number=0
  projectStop:any = setInterval(()=>{
    this.projectCount++;
    if(this.projectCount==10){
      clearInterval(this.projectStop)
    }
  },70)

}
