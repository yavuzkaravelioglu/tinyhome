import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Model1Component } from './models-item/model1/model1.component';
import { Model2Component } from './models-item/model2/model2.component';
import { Model3Component } from './models-item/model3/model3.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [];

@NgModule({

  imports: [RouterModule.forRoot( [

      {
        path: "",
        component: HomeComponent
      },
      {
        path: "modeller",
        component: ModelsComponent
      },
      {
        path: "model1",
        component: Model1Component
      },
      {
        path: "model2",
        component: Model2Component
      },
      {
        path: "model3",
        component: Model3Component
      }
      
    ],
    {scrollPositionRestoration: 'enabled'}

  )],
  exports: [RouterModule]

})
export class AppRoutingModule { }
