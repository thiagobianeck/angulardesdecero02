import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(  private activatedRoute: ActivatedRoute,
                private router: Router,
                private _heroesService: HeroesService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(this._heroesService.buscarHeroes(params['termino']));
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
