import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-pokemon',
    pathMatch: 'full'
  },
  {
    path: 'lista-pokemon', component: ListaPokemonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
