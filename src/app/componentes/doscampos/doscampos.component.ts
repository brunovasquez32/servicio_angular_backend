import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-doscampos',
  templateUrl: './doscampos.component.html',
  styleUrl: './doscampos.component.css'
})
export class DoscamposComponent {

  registros = [];
  constructor(private registroSrv:RegistroService){}

  ngOnInit(){
    this.registrosObtenidos();
  }

  registrosObtenidos(){
    this.registroSrv.obtenerRegistros().subscribe(
    (response:any) => {
      this.registros = response.registros;
      console.log("Aquí estan los registros obtenidos del Backend");
      console.log(this.registros);
    }
    )
  }
}
