import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';
import { Reservation2Component } from './pages/reservation2/reservation2.component';
import { CreaReservaComponent } from './crea-reserva/crea-reserva.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { ListaMisReservasComponent } from './lista-mis-reservas/lista-mis-reservas.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MoviesComponent,
    HomePageComponent,
    ReservationComponent,
    ReservationSearchComponent,
    Reservation2Component,
    CreaReservaComponent,
    MisReservasComponent,
    ListaMisReservasComponent,
    FavoritesComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule, 
    AngularFirestoreModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
