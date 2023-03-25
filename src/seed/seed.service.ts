import { Injectable } from '@nestjs/common';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axion.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http:AxiosAdapter
  ) {}


  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const  data  = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    const pokemonToInsert:{name:string,no:number}[]=[];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      /*let createPokemon= new CreatePokemonDto();
      createPokemon.name = name.toLowerCase();
      createPokemon.no = no;
      this.axion.post<CreatePokemonDto>(
        'http://localhost:3000/api/v1/pokemon',createPokemon
      );
      */    
      //insercion uno a uno
      //await this.pokemonModel.create({name,no});

       //insertPromisesArray.push(this.pokemonModel.create);

       pokemonToInsert.push({name,no});
    });
    await this.pokemonModel.insertMany(pokemonToInsert);
     
    //await Promise.all(insertPromisesArray);

    return 'Seed executed';
  }
}
