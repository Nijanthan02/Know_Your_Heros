import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }

  getvalues(){
    // this.http.get('http://localhost:52109/api/values').subscribe(response => {
    //     this.values = response;
    // }, error => {
    //   console.log(error);
    // }
    // );
    this.values = [{"id":1,"name":"text1"},{"id":2,"name":"text2"},{"id":3,"name":"text3"}]
  }

}
