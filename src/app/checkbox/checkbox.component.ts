import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;
  checkboxValues = [
    {id: 1, name: 'Chrish'},
    {id: 3, name: 'Mike'},
    {id: 3, name: 'John'},
  ];
  conditionCheck = [
    {id: 2, check: false},
    {id: 3, check: true}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: this.fb.array(this.checkboxValues.map((s) => this.fb.control(false)), [Validators.required])
    })
  }

  checkValue(id: number) {
    // console.log(id);
    let isTrue = false;
    this.conditionCheck.forEach((i) => {
      if (i.id === id) {
        return isTrue = true;
      }
    })
    return isTrue;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
