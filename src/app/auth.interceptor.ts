import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = environment.apiKey;
  const modifiedReq = req.clone({
    params: (req.params? req.params : new HttpParams()).append('api-key', token)
  });
  return next(modifiedReq);
};
