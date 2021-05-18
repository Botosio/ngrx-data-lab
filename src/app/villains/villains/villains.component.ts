import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;

  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.getVillains();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = null;
  }

  select(villain: Villain) {
    this.selected = villain;
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}
