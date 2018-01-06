import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DtaService {

	private goals = new BehaviorSubject<any>(['The Initial goal', 'Another silly life goal']);

	goal = this.goals.asObservable();

  constructor() { 

  }

  changeGoal(goal){
  	this.goals.next(goal);
  }

}
