import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';
import { AuctionHouceComponent } from './auction-house/auction-houce.component';
import { LoginComponent } from './login/login.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuctionHouselistComponent } from './auction-house/auction-house-list.component';
import { AllAuctionsListComponent } from './all-auctions-list/all-auctions-list.component';
import { AuctionHomeComponent } from './auction-home/auction-home.component';
import { NotFoundComponent } from './404-not-found.component';
import { HighscorePageComponent } from './highscore-page/highscore-page.component';
import { UserSaveLookupComponent } from './user-save-lookup/user-save-lookup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ah', component: AuctionHouselistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auction/:id', component: AuctionDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'home', component: AuctionHomeComponent },
  { path: 'highscore', component: HighscorePageComponent },
  { path: 'find-user', component: UserSaveLookupComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
