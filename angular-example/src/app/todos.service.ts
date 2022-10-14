import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";

import { Todo } from "./models/todo";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";

@Injectable()
export class TodosService {
    url = "https://localhost:8080/todos";
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError("TodosService");
    }

    getTodos(): Observable<Todo[]> {
        return this.http
            .get<Todo[]>(this.url)
            .pipe(catchError(this.handleError("getTodos", [])));
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http
            .post<Todo>(this.url, todo)
            .pipe(catchError(this.handleError("addTodo", todo)));
    } 

    deleteTodo(id: number): Observable<unknown> {
        return this.http
            .delete(`${this.url}/${id}`)
            .pipe(catchError(this.handleError("deleteTodo")));
    }
}