import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sampleview',
  templateUrl: './sampleview.component.html',
  styleUrls: ['./sampleview.component.css']
})
export class SampleviewComponent implements OnInit {
  public show: any;
  myImage: string = "assets/IMAGE/pizza.jpg";
  public date: any;
  public timer: any;
  public time: any;
 
  public item_names: any;
  public address: any;
  constructor(private location:Location,private route: Router) { }
  ngOnInit() {
    this.show = JSON.parse(sessionStorage.getItem('orders'));
    console.log(this.show.ord_no);
    var date1 = new Date();
    this.date = (date1.getMonth() + 1) + '-' + date1.getDate() + '-' + date1.getFullYear();
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  public close():any{
    sessionStorage.removeItem('orders');
    this.location.back();
  }
}
