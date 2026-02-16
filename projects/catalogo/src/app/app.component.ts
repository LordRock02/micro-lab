import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 👈 ¿Tienes esta línea?

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 ¿Y está agregada aquí?
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogo';
}