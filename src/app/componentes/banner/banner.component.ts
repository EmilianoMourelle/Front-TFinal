import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from '../servicios/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  implements OnInit {
  persona: persona = new persona ("", "");
  constructor (public personaSevice : PersonaService ) {}

  ngOnInit():void {
    this.personaSevice.getPersona().subscribe(data =>{this.persona = data})
  }
}  