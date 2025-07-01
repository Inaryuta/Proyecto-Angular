import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'airbnb-project';

  constructor(private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToLogin(){
    this.router.navigate(['/auth']);
  }

  navigateToRegister(){
    this.router.navigate(['/register'])
  }

  navigateToContact(){
    this.router.navigate(['/contact'])
  }

  navigateToReservations(){
    this.router.navigate(['/listings'])
  }
}
