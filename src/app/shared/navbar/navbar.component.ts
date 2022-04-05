import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent  {

  @ViewChild('inputValue') inputValue!: ElementRef<HTMLInputElement>;

  constructor() { }

  buscar() {

    const inputValue = this.inputValue.nativeElement.value;
    console.log(inputValue);
  }

}
