import { Component, OnInit } from '@angular/core';
import { ThayllaTasksService } from '../thaylla-tasks.service';

@Component({
  selector: 'app-thaylla-tasks',
  templateUrl: './thaylla-tasks.component.html',
  styleUrls: ['./thaylla-tasks.component.css']
})
export class ThayllaTasksComponent implements OnInit {
  task = '';

  constructor(private thayllaService: ThayllaTasksService) { }

  ngOnInit() {
  }

  cadastrarTarefa() {
    this.thayllaService.adicionar(this.task);
  }

  removerTarefa(index: number) {
    this.thayllaService.remover(index);
  }

  listarTarefas() {
    return this.thayllaService.mostrarLista();
  }
}