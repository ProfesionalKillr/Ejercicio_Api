import { Component } from '@angular/core';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  data: any; // Variable para almacenar los datos de la API

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getDataFromApi2().subscribe(
      (response) => {
        this.data = response; // Asigna la respuesta a la variable data
        console.log(this.data); // Mostrar los datos en la consola
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}
