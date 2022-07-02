import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent, DashboardComponent } from '@ralbx/ui';


const routes: Routes = [
    /* {
         path: "",
         component: LayoutComponent,
         children: [
             { path: "dashboard", component: DashboardComponent },
 
         ],
     }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
