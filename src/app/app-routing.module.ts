import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:'hoteles', component:HotelesComponent},
  {path:'search', component:SearchComponent},
  {path:'', component:HotelesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
