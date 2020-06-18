import {Injectable} from "@angular/core";
import * as momment from "moment"
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: "root"
})
export class DateService {
  public date: BehaviorSubject<momment.Moment> = new BehaviorSubject<momment.Moment>(momment());

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  changeDate(date: momment.Moment) {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });

    this.date.next(value);
  }
}
