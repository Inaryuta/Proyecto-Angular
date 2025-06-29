import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible globalmente
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    // Simulación de login
    console.log('Intentando login con:', email, password);

    // Simulamos éxito si el email contiene "admin"
    return email.includes('admin');
  }
}
