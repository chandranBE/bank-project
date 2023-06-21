import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-fund-transfer",
  templateUrl: "./fund-transfer.component.html",
  styleUrls: ["./fund-transfer.component.css"],
})
export class FundTransferComponent implements OnInit {
  hours: any = [];
  min: any = [];
  date: any;
  hr: any;
  minute: any;
  seconds: any;
  testForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      date: ["", Validators.required],
      time: this.fb.group({
        HH: ["", Validators.required],
        min: ["", Validators.required],
        sec: ["", Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.hoursFunction();
    this.minFunction();
  }

  hoursFunction() {
    for (let i = 1; i <= 24; i++) {
      this.hours.push(i);
    }
    console.log(this.hours);
  }
  minFunction() {
    for (let i = 1; i <= 60; i++) {
      this.min.push(i);
    }
    console.log(this.min);
  }

  submitFunction(data) {
    console.log(this.testForm.value);
  }
}
