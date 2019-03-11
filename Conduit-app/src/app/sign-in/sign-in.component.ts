import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.signInForm = this.builder.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {}
  onSubmit() {}
}
