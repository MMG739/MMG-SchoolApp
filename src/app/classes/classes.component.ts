import { Component, OnInit } from '@angular/core';
import { Class } from '../models/classe.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
  classes: Class[] = [];
  newClass: Class = { id: 0, name: '' };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.classes = this.dataService.getClasses();
  }

  addClass() {
    if (this.newClass.name) {
      this.newClass.id = this.classes.length ? Math.max(...this.classes.map(c => c.id)) + 1 : 1;
      this.dataService.addClass(this.newClass);
      this.newClass = { id: 0, name: '' };
    }
  }

  updateClass(updatedClass: Class) {
    this.dataService.updateClass(updatedClass);
  }

  deleteClass(id: number) {
    this.dataService.deleteClass(id);
  }

}
