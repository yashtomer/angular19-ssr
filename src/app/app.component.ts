import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSsrComponent } from "./angular-ssr/angular-ssr.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularSsrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19-ssr';
}
