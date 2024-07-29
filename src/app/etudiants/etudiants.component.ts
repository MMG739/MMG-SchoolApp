import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant.model';
import { Class } from '../models/classe.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrl: './etudiants.component.css'
})
export class EtudiantsComponent  implements OnInit {
  etudiants: Etudiant[] = [];
  classes: Class[] = [];
  newEtudiant: Etudiant = { id: 0, name: '', classId: 0 };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.etudiants = this.dataService.getEtudiants();
    this.classes = this.dataService.getClasses();
  }

  addEtudiant() {
    if (this.newEtudiant.name && this.newEtudiant.classId) {
      this.newEtudiant.id = this.etudiants.length ? Math.max(...this.etudiants.map(s => s.id)) + 1 : 1;
      this.dataService.addEtudiant(this.newEtudiant);
      this.newEtudiant = { id: 0, name: '', classId: 0 };
    }
  }

  updateEtudiant(updatedEtudiant: Etudiant) {
    this.dataService.updateEtudiant(updatedEtudiant);
  }

  deleteEtudiant(id: number) {
    this.dataService.deleteEtudiant(id);
  }

}
