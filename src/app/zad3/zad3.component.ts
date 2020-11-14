import { Component, OnInit } from '@angular/core';
import { Entity } from 'aframe';

const colors: string[] = ["red","orange","yellow", "green", "blue", "purple", "pink"];
var grow: boolean = true;

@Component({
  selector: 'app-zad3',
  templateUrl: './zad3.component.html',
  styleUrls: ['./zad3.component.css']
})

export class Zad3Component implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
    setInterval(this.rotate, 100);
    setInterval(this.scale, 50);
    setInterval(this.changeColor, 200);
  }

  rotate() 
  { 
    var box = document.querySelector('#box') as Entity;
    box.object3D.rotation.y += 3;
  }
  
  scale() 
  { 
    var sphere = document.querySelector('#sphere') as Entity;
    var scale = sphere.object3D.scale.x;

    if(grow) {
      sphere.object3D.scale.x +=0.01;
      sphere.object3D.scale.y +=0.01;
      sphere.object3D.scale.z +=0.01;

      if(scale > 1.3)
      grow =false;
    }
    else {
      sphere.object3D.scale.x -=0.01;
      sphere.object3D.scale.y -=0.01;
      sphere.object3D.scale.z -=0.01;
      if(scale < 1)
      grow =true;
    }
  }
  
  changeColor()
  {
    var cylinder = document.querySelector('#cylinder');
    var color = colors[Math.floor(Math.random() * colors.length)];
    cylinder.setAttribute("color", color);
  }
}

