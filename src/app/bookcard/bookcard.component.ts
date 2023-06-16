import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss'],
})
export class BookcardComponent {
  constructor(private route: Router, private http: HttpClient) {}
  @Input() book = {
    id: '0',
    title: 'Vikram',
    author: 'sadham',
    category: 'horror',
    PublicationDate: '02/03/2002',
    status: '',
    image: '',
  };

  @Output() delete = new EventEmitter<string>();
  delBook(id: string) {
    this.delete.emit(id);
  }
  details(id: string) {
    this.route.navigate([`bookdetails/${id}`]);
  }
  edit(id: string) {
    this.route.navigate([`bookdetails/edit/${id}`]);
  }
}
