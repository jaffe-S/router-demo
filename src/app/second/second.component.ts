import { Component, OnInit } from '@angular/core';
// +1 使用一个路由把ｉｄ信息传给应用组件
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  name;
  constructor(
    //  +2
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // +3 更新 ngOnInit() 方法来访问这个 ActivatedRoute 并跟踪 id 参数
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

  }

}
