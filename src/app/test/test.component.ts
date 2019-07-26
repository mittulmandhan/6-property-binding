import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-root',
  template: `
            <h1>
              Hello {{name}}
            </h1>
            <!--property binding -->
            <input [id]="myId" type="text" value="Mittul">
            <!--there is one more syntax for property binding-->
            <input bind-id="myId" type="text" value="Mittul">

            <!--we can also use interpolation to bind the property -->
            <input id="{{myId}}" type="text" value="Mittul">
            <!--but using interpolation has a limitation i.e. it can only work with string value -->
            <!--although we sometime need to bind boolean html properties too-->

            <!--even if the disable attribute contain false value the element will still remain disabled-->
            <input disabled="false" [id]="myId" type="text" value="Mittul">

            <!--even adding interpolation wont work here-->
            <input disabled="{{isDisabled}}" [id]="myId" type="text" value="Mittul">

            <!--only property binding will work-->
            <input [disabled]="isDisabled" [id]="myId" type="text" value="Mittul">
            <input bind-disabled="isDisabled" [id]="myId" type="text" value="Mittul">
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Mittul';
  // new property
  public myId = 'testId';
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
