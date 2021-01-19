import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.appService.firstForm(form.value.username, form.value.email);
  }

}
