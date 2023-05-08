import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/componentes/servicios/portfolio.service';
import { persona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/modelos/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  implements OnInit {
  persona: persona = new persona ("", "",);
  constructor (public personaService: PersonaService) {}

  ngOnInit():void {
    this.personaService.getPersona().subscribe(data=> {this.persona = data})
  }
}
