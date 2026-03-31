import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './Components/task-form/task-form';
import { TaskList } from './Components/task-list/task-list';
import { Task } from './Services/task';
import { Header } from "./Components/header/header";

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskService = inject(Task);

  private tasks = this.taskService.tasks;
  constructor() {
    this.taskService.getTasks();
  }

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Todo');
  });
  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'InProgress');
  });
  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Completed');
  });
}
