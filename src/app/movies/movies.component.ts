import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: Movie[] = [];
  private poster: string = '';
  private popularity: string = '';
  data:any = []
  htm: string = '';
  
  constructor(private http: HttpClient){
    // this.api.getMovies('https://api.themoviedb.org/3/discover/movie?api_key=5361906910b10ce1f4ec541225a2ed09&language=en-US&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').subscribe((res: any) => {
    //   //console.log(res);
    //   this.movie = [...this.movie]
    //   this.poster = '';
    //   this.popularity = '';
    // })
  }

  getData(){
    const url ='https://api.themoviedb.org/3/discover/movie?api_key=5361906910b10ce1f4ec541225a2ed09&language=en-US&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    this.http.get(url).subscribe((res: any)=>{
      const {results} = res
      this.data = [... this.data, ...results]
      this.htm = "https://image.tmdb.org/t/p/w500"
      console.log(this.data)
    })
  }

 
  
  
  ngOnInit(): void {
    this.getData()
  }

}
