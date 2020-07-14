import { Component, OnInit } from '@angular/core';
//2.2
// import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 2.3 goToItems() 方法会把目标 URI 解释为相对于当前路由的，并导航到 items 路由。
  // goToItems() {
  //   this.router.navigate(['items'], { relativeTo: this.route });
  // }
}
