import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';  // 从文件中导入一个/变量

@Component({      // @component是装饰器函数，为该组件执行angular所需要的元数据
  selector: 'app-heroes',  // 组件的选择器，css选择器，表明本组件的html元素名称是<app-heroes>，相当于<body>、<h1>之类的
  templateUrl: './heroes.component.html', // 组件模板文件位置,模板文件其实就是这个组件的html文件，只不过考虑了以后可能复用的情况，又称作模板文件
  styleUrls: ['./heroes.component.css']   // 组件私有css样式表文件位置
})

export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'WindStorm' }; // 一个属性hero，数据/对象类型是Hero类，并对这个Hero实例进行赋值/初始化

  heros=HEROES;

  constructor() {
  }

  ngOnInit() {
  }

}
