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
    this.marjoryeService.adicionar(this.task);
  }

  removerTarefa(index: number) {
    this.marjoryeService.remover(index);
  }

  listarTarefas() {
    return this.marjoryeService.mostrarLista();
  }
}