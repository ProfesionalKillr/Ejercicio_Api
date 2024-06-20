import { Component } from '@angular/core';
import { ServicioService } from '../../service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  data: any; // Variable para almacenar los datos de la API
  

  constructor(private servicioService: ServicioService, private router:Router) { }

  ngOnInit() {
    this.servicioService.getDataFromApi().subscribe(
      (response) => {
        this.data = response; // Asigna la respuesta a la variable data
        console.log(this.data); // Mostrar los datos en la consola
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
  componente2(){
    this.router.navigate(['componente2']);
  }
}
