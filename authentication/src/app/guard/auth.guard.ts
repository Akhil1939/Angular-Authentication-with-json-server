import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastrService);

  if (!service.IsLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (service.GetUserRole() != 'admin') {
    toast.error('You are not authorized to access this page');
    router.navigate(['']);

    return false;
  }
  return true;
};
