import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'movie/:movieId', component: MovieComponent },
];

@NgModule({
  declarations: [AppComponent, TopBarComponent, ListComponent, MovieComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
