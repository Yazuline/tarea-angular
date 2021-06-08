import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
listTarea:Tarea [] =[]
nombreTarea ='';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // Se ejecuta cada que el usuario haga enter
    
    //Crear un objeto tarea
    const tarea:Tarea ={
      nombre: this.nombreTarea,
      estado:false
    }
    
    //Agregar el objeto tarea al array
     this.listTarea.push(tarea)
    // Reset el input
    this.nombreTarea=''

  }

  //Metodo para eliminar tareas
  eliminarTarea(index: number){
    this.listTarea.splice(index, 1)
  }

  //Actualizar tarea
  actualizarTarea(index:number,tarea:Tarea)
  {
    this.listTarea[index].estado =!tarea.estado
  }
}
