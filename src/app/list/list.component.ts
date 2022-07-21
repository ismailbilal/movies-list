import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: Array<Movie> = [];
  IMGPATH: string = environment.IMGPATH;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMoviesList()
      .subscribe((data) => (this.movies = data.results));
  }
}
