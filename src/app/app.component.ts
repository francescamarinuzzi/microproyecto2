import { Component } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microproyecto2';

  constructor(public api: ApiService){
    this.api.getMovies('https://api.themoviedb.org/3/discover/movie?api_key=5361906910b10ce1f4ec541225a2ed09&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').subscribe((res: any) => {
      console.log(res);
    })
  }
}
