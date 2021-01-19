import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { FormData } from '../form.data';

@Component({
  selector: 'app-fill-data',
  templateUrl: './fill-data.component.html',
  styleUrls: ['./fill-data.component.css'],
})
export class FillDataComponent implements OnInit, OnDestroy {
  formData: FormData;
  appSub: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getFormData.subscribe((result) => {
      console.log(result);
      this.formData = result;
    });
  }

  ngOnDestroy() {
    this.appSub.unsubscribe();
  }
}
