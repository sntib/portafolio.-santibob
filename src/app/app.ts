import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <--- AGREGÁ ESTO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // <--- AGREGALOS ACÁ TAMBIÉN
  templateUrl: './app.html', // Veo en tu imagen que tu HTML se llama app.html
  styleUrl: './app.css'      // Y tu CSS se llama app.css
})
export class AppComponent {
  title = 'porftfolio-santino';
}