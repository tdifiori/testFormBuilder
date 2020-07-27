import { Component, OnInit } from '@angular/core';
import { components } from "../../Shared/control/hash-map-component";

@Component({
  selector: 'app-menu-controls',
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
  <a class="navbar-brand" href="#">INPUT LIST</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item mr-2">
        <span class="badge badge-success">Text</span>
      </li>
      <li class="nav-item mr-2">
        <span class="badge badge-success">Data</span>
      </li>
      <li class="nav-item mr-2">
        <span class="badge badge-success">Select</span>
      </li>

    </ul>
  </div>
</nav>
  `,
  styleUrls: ['./menu-controls.component.css']
})
export class MenuControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(components);
  }

}