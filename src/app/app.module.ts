import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiviteComponent } from './activite/activite.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { TagComponent } from './tag/tag.component';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteByTagsComponent } from './activite-by-tags/activite-by-tags.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActivitePageComponent } from "./activite-page/activite-page.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OnATesteComponent } from './on-ateste/on-ateste.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TagListParamsComponent } from './tag-list-params/tag-list-params.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { ValidationComponent } from './validation/validation.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'activite/tag/:idTag/:intituleTag', component: ActiviteByTagsComponent},
  {path: 'activite/:idActivite', component: ActivitePageComponent},
  {path: 'signUp', component: InscriptionComponent},
  {path: 'signIn', component: ConnexionComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'profil/deleteTag/:idTag', component: TagListParamsComponent},
  {path: 'profil/addTag', component: AddTagComponent},
  {path: 'validate', component: ValidationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ActiviteComponent,
    InscriptionComponent,
    TagComponent,
    ActiviteByTagsComponent,
    PageNotFoundComponent,
    ActivitePageComponent,
    HomeComponent,
    OnATesteComponent,
    ConnexionComponent,
    ProfilComponent,
    SuggestionsComponent,
    TagListParamsComponent,
    AddTagComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
