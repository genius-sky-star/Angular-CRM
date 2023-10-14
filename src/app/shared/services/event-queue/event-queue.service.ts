import { Injectable } from '@angular/core';
import { AppEvent } from '../../types/events/app-event.type';
import { Subject, Observable, filter, BehaviorSubject } from 'rxjs';
import { AppEventType } from '../../enums/app-event-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EventQueueService {

  private eventBrocker = new BehaviorSubject<AppEvent<any>>(new AppEvent(AppEventType.DEFAULT_EVENT));

  on(eventType: AppEventType): Observable<AppEvent<any>> {
    console.log('Registering ', eventType);
    return this.eventBrocker.pipe(filter(event => event.type === eventType && event.type !== AppEventType.DEFAULT_EVENT));
  }

  dispatch<T>(event: AppEvent<T>): void {
    console.log('Dispatching ', event);
    this.eventBrocker.next(event);
  }

}
