
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputSearchFilter = new FormControl('');
  @Output() emitSearchValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // this.inputSearchFilter.valueChanges.subscribe((search:string) => {
    //   this.emitSearchValue.emit(search);
    // })
  }

}
