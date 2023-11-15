import { Component } from '@angular/core';
import { Appartement } from '../model/appartements';
import { Residence } from '../model/residence';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {

  imageUrl="assets/images/"
  residencesList: Residence[]=[
    {id: 1, name: "Residence 1", address: "Address 1", image: this.imageUrl+"residence1.jpg"},
    {id: 2, name: "Residence 2", address: "Address 2", image: this.imageUrl+"residence2.jpg"},
    {id: 3, name: "Residence 3", address: "Address 3", image: this.imageUrl+"residence3.jpg"}
  ]
}
