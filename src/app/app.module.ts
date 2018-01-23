import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapAppComponent } from './bootstrap-app/bootstrap-app.component';
import { NavbarComponent } from './bootstrap-app/navbar/navbar.component';

import { FormComponent } from './form/form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PipesComponent } from './pipes/pipes.component';
import { TransformPipe } from './pipes/transform.pipe';

import { AuctionHouceComponent } from './auction-house/auction-houce.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { AuctionService } from './auction.service';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuctionHouselistComponent } from './auction-house/auction-house-list.component';
import { AllAuctionsListComponent } from './all-auctions-list/all-auctions-list.component';
import { AuctionHomeComponent } from './auction-home/auction-home.component';
import { NotFoundComponent } from './404-not-found.component';
import { HighscorePageComponent } from './highscore-page/highscore-page.component';
import { UserSaveLookupComponent } from './user-save-lookup/user-save-lookup.component';
import { SaveDetailComponent } from './save-detail/save-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SmallSavegameViewComponent } from './user-home/small-savegame-view/small-savegame-view.component';
import { ItemViewComponent } from './user-home/item-view-component';
import { NameMaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NameMaterialModule
  ],
  declarations: [
    BootstrapAppComponent,
    NavbarComponent,
    FormComponent,
    PipesComponent,
    TransformPipe,
    AuctionHouceComponent,
    LoginComponent,
    AuctionDetailComponent,
    RegisterComponent,
    UserHomeComponent,
    AuctionHouselistComponent,
    AllAuctionsListComponent,
    AuctionHomeComponent,
    NotFoundComponent,
    HighscorePageComponent,
    UserSaveLookupComponent,
    SaveDetailComponent,
    CharacterDetailComponent,
    SmallSavegameViewComponent,
    ItemViewComponent
  ],
  providers: [AuthService, AuctionService],
  bootstrap: [BootstrapAppComponent]
})
export class AppModule {}
