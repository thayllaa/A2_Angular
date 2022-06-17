import { Component, OnInit } from '@angular/core';
import { ThayllaTasksService } from '../thaylla-tasks.service';

@Component({
  selector: 'app-thaylla-home',
  templateUrl: './thaylla-home.component.html',
  styleUrls: ['./thaylla-home.component.css']
})
export class ThayllaHomeComponent implements OnInit {

  constructor(private thayllaService: ThayllaTasksService) { }

  ngOnInit() {
  }

  contarTasks() {
    return this.thayllaService.contarTarefas();
  }
}