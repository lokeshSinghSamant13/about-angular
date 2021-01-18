import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        if (count === 3) {
          observer.complete();
        }
        observer.next(count);
        if (count > 5) {
          observer.error(new Error('count is grater than 5'));
        }
        count++;
      }, 1000);
    });
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 1;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
