import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametroSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';
  categorias: any[] = [
    {
      value: 'general',
      nombre: 'General',
    },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimientos' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];

  paises: any[] = [
    {
      value: 'ar',
      nombre: 'Argentina',
    },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungría' },
    { value: 'mx', nombre: 'México' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor() {}

  ngOnInit(): void {}
  buscarNoticia() {
    const PARAMETROS={
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }
    this.parametroSeleccionados.emit(PARAMETROS)
  }
}
