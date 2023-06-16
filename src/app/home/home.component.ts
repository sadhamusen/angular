import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bookes = [];
  filterBy: any;

  constructor(private http: HttpClient, public service: ServiceService) {}

  bookes$: any;
  ngOnInit() {
    // this.http.get('https://648a951717f1536d65e94e9e.mockapi.io/movies').subscribe((val:any)=>{

    // this.movies=val;

    //   console.log(val);

    // })

    this.bookes$ = this.service.getMovies();
  }

  filter(event: any) {
    this.bookes$ = this.service.filtersearch(event.target.value);
    // this.bookes$ = this.service.filtersearch(event.target.value);
  }
  // trackBy(index: number, mv:any) {
  //   return mv ? mv.id : undefined;
  // }
  deleteMovie(id: any) {
    this.bookes$ = this.service.deleteMovie(id);
  }
}
