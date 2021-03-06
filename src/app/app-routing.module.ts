import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import {Reservation2Component} from './pages/reservation2/reservation2.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';




const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'reserva', component: ReservationComponent},
  {path: 'reserva-2', component: Reservation2Component},
  {path: 'mis-reservas', component: MisReservasComponent},
  {path: 'favoritos', component: FavoritesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
