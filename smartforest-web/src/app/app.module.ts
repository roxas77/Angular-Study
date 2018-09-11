import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeslideComponent } from './homeslide/homeslide.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterlineComponent } from './footerline/footerline.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { SitelistComponent } from './sitelist/sitelist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeslideComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'servicerequest', component: ServicerequestComponent},
  {path: 'sitelist', component: SitelistComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeslideComponent,
    LoginpageComponent,
    FooterlineComponent,
    ServicerequestComponent,
    SitelistComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
