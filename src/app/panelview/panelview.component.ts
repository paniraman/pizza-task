import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-panelview',
  templateUrl: './panelview.component.html',
  styleUrls: ['./panelview.component.css']
})
export class PanelviewComponent implements OnInit {
  json: any = [
    { ord_no: "09398",
      name: "channa",items: 5,
      amount: 1000,
      status: "order Received",
      address: 'Miyapur Cross Roads,D.no:9-7-088,hyderabad-500094',
      item_names: 'medium sweet corn pizza:400,2 bugger kings:300,2 sandwich:300'},
    { ord_no: "09382",
      name: "phani",
      items: 4,
      amount: 1500,
      status: "Processing",
    address: 'Miyapur Cross Roads,D.no:9-7-088,hyderabad-500094',
    item_names: 'large paneer pizza:600,bugger kings:200,2 pack of french frys:400'},
    { ord_no: "09372",
      name: "raman",
      items: 10,
      amount: 2000, status:"Ready to Delivery",
    address: 'C Roads,D.no:9-7-088,hyderabad-500094',
    item_names: 'Multi grain pizza:800,4 buggers:400,1 sandwich:200,4 sprite Bottle:400'}
  ];
  public hide:boolean=false;
  public date: any;
  public time: any;
  public ord_no: any;
  public min: any;
  public timer: any;
  public step1:any;
  public step2:any;
  public step3:any;
  constructor(private route: Router) { }
  myImage: string = "assets/IMAGE/pizza.jpg";
  ngOnInit() {
    var date1 = new Date();
    this.date = (date1.getMonth() + 1) + '-' + date1.getDate() + '-' + date1.getFullYear();
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public modelDetails(obj): any {
    this.ord_no = obj.ord_no;
    if (obj.status == "order Received") {
        this.step1={['width']: '40%'};
        this.step2={['width']: '0%'};
        this.step3={['width']: '0%'};
    }
    if(obj.status=="Processing"){
      this.step1={['width']: '40%'};
      this.step2={['width']: '40%'};
      this.step3={['width']: '0%'};
    }
    if(obj.status=="Ready to Delivery")
    {
      this.step1={['width']: '40%'};
      this.step2={['width']: '40%'};
      this.step3={['width']: '40%'};
    }
  }
  public details(obj): any {
    console.log(obj);
    sessionStorage.setItem('orders', JSON.stringify(obj));
    return this.route.navigate(['view']);
  }
}
