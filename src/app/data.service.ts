import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>([
    {
      name: 'Apprendre Angular 5',
      done: false
    },
    {
      name: 'Chapitre 1: Intaller angular/cli',
      done: false
    },
    {
      name: 'Chapitre 2: les routes',
      done: false
    }
  ]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
