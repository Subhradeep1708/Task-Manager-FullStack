import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../../Models/task-item.model';
import { Task } from '../../Services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  taskItem = input.required<TaskItem>();
  statusValue = ['Todo', 'InProgress', 'Completed'];
  taskService = inject(Task);


  // ngOnInit(){
  //   this.taskService.getTasks().subscribe((data)=>{
  //     this.tasks = data;
  //   })
  // }

  action = computed(() => {
    const taskItemValue = this.taskItem();

    return this.statusValue.filter((x) => taskItemValue.status !== x);
  });

  markAs(id: string, updatedStatus: string) {
    this.taskService.markAsStatus(id,updatedStatus);
  }
}
