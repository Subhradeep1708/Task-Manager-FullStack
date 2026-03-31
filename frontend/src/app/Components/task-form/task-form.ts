import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../Services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  taskService = inject(Task);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),

    // default value Todo & cannot be null
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    const rawData = this.taskForm.getRawValue();
    this.taskService.addTask(rawData.task, rawData.status);
    this.taskForm.reset({
      task: '',
      status: 'Todo',
    });
  }
}
