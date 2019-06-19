import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from "./auth/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from "./components/card/card.component";
import { SidenavComponent } from "./auth/sidenav/sidenav.component";
import { DocComponent } from "./pages/doc/doc.component";
import { ResourcesComponent } from "./pages/resources/resources.component";
import { EventsComponent } from "./pages/events/events.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { HomeComponent } from "./pages/home/home.component";
import { FabComponent } from "./components/fab/fab.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SidenavComponent,
    DocComponent,
    ResourcesComponent,
    EventsComponent,
    BlogComponent,
    HomeComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
