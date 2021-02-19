import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.sass']
})
export class ListaPokemonsComponent implements OnInit {

  pokemons = [
    {id: 1, nome: 'Pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 2, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {id: 3, nome: 'pikachu', imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
