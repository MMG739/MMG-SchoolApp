import { Injectable } from '@angular/core';
import { Class } from '../models/classe.model';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private classes: Class[] = [
    { id: 1, name: 'Terminal S1' },
    { id: 2, name: 'Terminal S2' },
    { id: 3, name: 'Terminal L1a' },
    { id: 4, name: 'Terminal L2b' }
  ];

  private etudiants: Etudiant[] = [];

  getClasses() {
    return this.classes;
  }

  addClass(newClass: Class) {
    this.classes.push(newClass);
  }

  updateClass(updatedClass: Class) {
    const index = this.classes.findIndex(c => c.id === updatedClass.id);
    if (index !== -1) {
      this.classes[index] = updatedClass;
    }
  }

  deleteClass(id: number) {
    this.classes = this.classes.filter(c => c.id !== id);
  }

  getEtudiants() {
    return this.etudiants;
  }

  addEtudiant(newEtudiant: Etudiant) {
    this.etudiants.push(newEtudiant);
  }

  updateEtudiant(updatedEtudiant: Etudiant) {
    const index = this.etudiants.findIndex(s => s.id === updatedEtudiant.id);
    if (index !== -1) {
      this.etudiants[index] = updatedEtudiant;
    }
  }

  deleteEtudiant(id: number) {
    this.etudiants = this.etudiants.filter(s => s.id !== id);
  }
}
