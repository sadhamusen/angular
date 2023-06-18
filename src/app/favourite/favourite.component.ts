import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent {
  constructor(
    private route: Router,
    private http: HttpClient,
    public service: ServiceService
  ) {}
  showMore = false;
  text: any;
  all = this.service.Fav;
  deleteFromFav(book: any) {
    const ind = this.all.indexOf(book);
    this.all.splice(ind, 1);
  }
  details(id: string) {
    this.route.navigate([`bookdetails/${id}`]);
  }
  edit(id: string) {
    this.route.navigate([`bookdetails/edit/${id}`]);
  }
}
