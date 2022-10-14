import { Component, OnInit } from "@angular/core";

import { Todo } from "./models/todo";
import { TodosService } from "./todos.service";

@Component({
    selector: "todos",
    templateUrl: "./todos.component.html",
    providers: [TodosService],
    styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
    todos: Todo[] = [];
    todo: Todo | undefined;
    summaryInput = "";
    descriptionInput = "";

    constructor(private todosService: TodosService) {}

    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {
        this.todosService.getTodos().subscribe(todos => this.todos = todos);
    }

    add(summary: string, description: string): void {
        this.todo = undefined;
        if (!summary) {
            return;
        }

        const newTodo = { summary, description } as Todo;
        this.todosService
            .addTodo(newTodo)
            .subscribe((todo) => this.todos.push(todo));
    }

    delete(todo: Todo): void {
        this.todos = this.todos.filter(t => t !== todo);
        this.todosService.deleteTodo(todo.id).subscribe();
    }

    refresh(): void {
        this.todosService.getTodos().subscribe(todos => this.todos = todos);
    }
}