import { Component, OnInit } from '@angular/core';
import { voiture } from '../model/voiture.model';
import {VoitureService} from '../services/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
  
})
export class VoituresComponent implements OnInit{
  
  voitures? : voiture[] = [];

  
  constructor(private voitureService : VoitureService,
    private router :Router ){
   
  }

  ngOnInit(): void {
   
   this.chargerVoiture();
  }

  chargerVoiture(){
    this.voitureService.listeVoiture().subscribe(mar =>{console.log(mar);
      this.voitures = mar;
    });
  }

  supprimerVoiture(car : voiture){
    let conf = confirm("Etes-vous sur ?");
    if (conf)
    this.voitureService.supprimerVoiture(car.idVoiture!).subscribe(()=>{console.log("voiture supprimé");
      this.chargerVoiture();
      this.router.navigate(["voitures"]);
    });
  }

}
