import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SearchMovieComponent} from "./search-movie/search-movie.component";

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'searchmovie', component: SearchMovieComponent },
];

export { ROUTES };
