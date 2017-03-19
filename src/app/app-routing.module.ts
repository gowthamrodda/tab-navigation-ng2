import {NgModule}                       from '@angular/core';
import {
  RouterModule,
  Routes
}                                       from '@angular/router';
import {HomeComponent}                  from './home/home.component';
import {Tab1Component}                  from './tab1/tab1.component';
import {Tab2Component}                  from './tab2/tab2.component';
import {Tab3Component}                  from './tab3/tab3.component';
import {Tab4Component}                  from './tab4/tab4.component';


const appRoutes: Routes = [
  {
    path:'home', component: HomeComponent,
    children: [
      {path:'tab1' , component: HomeComponent},
      {path:'tab2' , component: HomeComponent},
      {path:'tab3' , component: HomeComponent},
      {path:'tab4' , component: HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
