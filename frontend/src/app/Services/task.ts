import { inject, Injectable, signal } from '@angular/core';
import { TaskItem } from '../Models/task-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Task {
  http = inject(HttpClient);
  tasks = signal<TaskItem[]>([]);

  apiUrl = 'http://localhost:5062/api/Task';

  getTasks() {
    this.http.get<TaskItem[]>(this.apiUrl).subscribe((data) => {
      this.tasks.set(data);
    });
  }

  addTask(text: string, status: string) {
    this.http.post<TaskItem>(this.apiUrl, { text, status }).subscribe(() => {
      this.getTasks();
    });
  }

  // creating task (frontend Only)
  // addTask(task: string, status: string) {
  //   this.tasks.update((previousTasks) => {
  //     return [...previousTasks, { task, status }];
  //   });
  // }

  markAsStatus(id: string, updatedStatus: string) {
    this.tasks.update((existingCollection) => {
      return existingCollection.map((task) =>
        task.id === id ? { ...task, status: updatedStatus } : task,
      );
    });
  }

  // // status change of task
  // markAsStatus(id:string, updatedStatus: string) {
  //   this.tasks.update((existingCollection) => {
  //     // finding task using text
  //     const findTask = existingCollection.find((x) => x.id === id);

  //     if (findTask) {
  //       return [
  //         ...existingCollection.filter((x) => x.id !== id),
  //         { text: findTask.text, status: updatedStatus },
  //       ];
  //     } else {
  //       return existingCollection;
  //     }
  //   });
  // }
}
