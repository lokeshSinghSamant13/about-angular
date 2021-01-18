import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerService } from './servers/server.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServersComponent,
    ServerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ServerService,
    AuthService,
    AuthGuard,
    ServerResolver,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
