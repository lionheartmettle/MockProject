import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  constructor(private builder: FormBuilder) {
    this.name = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.signUpForm = this.builder.group({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {}
  onSubmit() {
    console.log(this.signUpForm);
  }
}
