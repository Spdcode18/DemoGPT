import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LodderService } from '../services/lodder.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === "POST") {
      if (!request.headers.has("Authorization")) {
        request = request.clone({
          setHeaders: {
            'Authorization': 'Bearer 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'
          }
        });
      }
    }
    return next.handle(request);
  }
}
