import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { DocComponent } from "./pages/doc/doc.component";
import { EventsComponent } from "./pages/events/events.component";
import { ResourcesComponent } from "./pages/resources/resources.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "Blog", component: BlogComponent },
  { path: "Doc", component: DocComponent },
  { path: "Events", component: EventsComponent },
  { path: "Resources", component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
