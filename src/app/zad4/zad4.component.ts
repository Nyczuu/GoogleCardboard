import { Component, OnInit } from '@angular/core';
import { Entity } from 'aframe';

const colors: string[] = ["red","orange","yellow", "green", "blue", "purple", "pink"];
var grow: boolean = true;
var radianCounter: number = 0.0;

@Component({
  selector: 'app-zad4',
  templateUrl: './zad4.component.html',
  styleUrls: ['./zad4.component.css']
})
export class Zad4Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    setInterval(this.moveCamera, 50);
    setInterval(this.rotate, 100);
    setInterval(this.scale, 50);
    setInterval(this.changeColor, 200);
  }

  moveCamera()
  {
    var sphere = document.querySelector('#sphere') as Entity;
    var camera = document.querySelector('#camera') as Entity;

    radianCounter += 0.05;  
    camera.object3D.position.x = 1.5 * Math.cos(radianCounter);
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
