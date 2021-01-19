import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.appService.secondForm(form.value.education);
  }

}
