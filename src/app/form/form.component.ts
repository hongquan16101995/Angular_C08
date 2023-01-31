import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  // demoForm = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl(''),
  //   age: new FormControl('',
  //     [Validators.min(18), Validators.max(65)]),
  //   address: new FormControl(''),
  // })
  demoForm!: FormGroup
  person: any = {
    id: 1,
    name: "Tú",
    age: "18",
    address: "LC"
  }

  check: any = "";

  constructor() {
  }

  ngOnInit(): void {
    this.demoForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl('',
        [Validators.min(18), Validators.max(65)]),
      address: new FormControl(''),
    })
    this.demoForm.patchValue(this.person)
  }

  onSubmit(event: Event) {
    console.log(this.demoForm.value)
    console.log((event.target as HTMLElement).innerHTML)
  }
}
