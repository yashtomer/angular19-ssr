import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-angular-ssr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-ssr.component.html',
  styleUrl: './angular-ssr.component.css'
})
export class AngularSsrComponent {
  posts$: Observable<Post[]> | null = null;
  http = inject(HttpClient);

  ngOnInit(){
    this.getPost();
  }

  getPost(){
    this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
