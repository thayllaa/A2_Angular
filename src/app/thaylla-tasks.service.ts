import { Injectable } from '@angular/core';

@Injectable()
export class ThayllaTasksService {
  listaTasks = [];

  constructor() {}

  adicionar(task: string) {
    this.listaTasks.push(task);
  }

  remover(index: number) {
    this.listaTasks.splice(index, 1);
  }

  mostrarLista() {
    return this.listaTasks;
  }

  contarTarefas() {
    return this.listaTasks.length;
  }
}