import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    getDashboard(): Promise<Dashboard> {
        return this.http
            .get<Dashboard>('https://localhost:5001/api/Home')
            .toPromise();
    }
}