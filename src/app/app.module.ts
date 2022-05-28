import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { UserGroupsComponent } from './admin/user-groups/user-groups.component';
import { MasterComponent } from './master/master.component';
import { RegistrationComponent } from './master/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserRolesComponent,
    UserGroupsComponent,
    MasterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
