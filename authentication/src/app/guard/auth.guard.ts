import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  if (!service.IsLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if(service.GetUserRole() != 'admin'){
    router.navigate(['']);
    
  return false;

  }
  return true

};
