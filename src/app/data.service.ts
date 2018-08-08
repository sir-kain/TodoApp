import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>([
    {
      name: 'Chapitre 1: Intaller angular/cli',
      done: true
    },
    {
      name: 'Chapitre 2: les components',
      done: false
    },
    {
      name: 'Chapitre 3: les routes',
      done: false
    },
    {
      name: 'Chapitre 4: databinding',
      done: true
    },
  ]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  changeState(goal) {
    goal.done = !goal.done;
  }

}
