import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import {Reservation2Component} from './pages/reservation2/reservation2.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'reserva', component: ReservationComponent},
  {path: 'reserva-2', component: Reservation2Component},
  {path: 'mis-reservas', component: MisReservasComponent},
  {path: 'favoritos', component: FavoritesComponent},
  {path: 'search-1', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
