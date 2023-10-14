import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalenderDataService {
  static colors = {
    green: '#6aa84f',
    yellow: '#f1c232',
    red: '#cc4125',
    gray: '#fafafa',
    blue: '#2e78d6',
  };

  eventData = [
    {
      id: 1,
      text: 'Need for speed',
      subText: 'Live Stream',
      dayDifference: 1,
      start: 10,
      end: 11,
      participants: 2,
    },
    {
      id: 2,
      text: 'Call of Duty',
      subText: 'Live Stream',
      dayDifference: 2,
      start: 12,
      end: 13,
      participants: 1,
    },
    {
      id: 3,
      text: 'Need for speed',
      subText: 'Live Stream',
      dayDifference: 3,
      start: 13,
      end: 14,
      participants: 3,
    },
    {
      id: 4,
      text: 'Call of Duty',
      subText: 'Live Stream',
      dayDifference: 4,
      start: 11,
      end: 12,
      participants: 4,
    },
  ];
  events: any[] = [];
  // currentTime: any;
  constructor(private http: HttpClient) {
    // this.currentTime = DayPilot.Date.today();
    let event: any;
    for (let i = 0; i < this.eventData.length; i++) {
      const startTime = this.eventData[i].start;
      const endTime = this.eventData[i].end;
      let markS = '';
      let markE = '';
      if (startTime < 13) {
        markS = 'AM';
      } else {
        markS = 'PM';
      }
      if (endTime < 13) {
        markE = 'AM';
      } else {
        markE = 'PM';
      }

      event = {
        id: this.eventData[i].id,
        borderColor: 'white',
        text: this.eventData[i].text,
        start: DayPilot.Date.today()
          .firstDayOfWeek()
          .addDays(this.eventData[i].dayDifference)
          .addHours(this.eventData[i].start),
        end: DayPilot.Date.today()
          .firstDayOfWeek()
          .addDays(this.eventData[i].dayDifference)
          .addHours(this.eventData[i].end),
        backColor: CalenderDataService.colors.gray,
        participants: this.eventData[i].participants,
        html: `<div style="
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;">
                  <div style="
                    display: flex; flex-direction: column; margin-top: 5px;
                  ">
                    <label
                      style="
                        color: var(--text-dark, rgba(0, 0, 0, 0.87));
                        font-family: Roboto;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: normal;
                      "
                      >${this.eventData[i].text}</label
                    ><span
                      style="
                        color: var(--g-3-main-black, #333);
                        font-family: Roboto;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                      "
                      >${this.eventData[i].subText}</span
                    >
                  </div>
                  <div style="margin-bottom: 5px; text-align: center;">${
                    startTime.toString() +
                    markS +
                    '~' +
                    endTime.toString() +
                    markE
                  }
                  </div>
              </div>`,
      };
      this.events = [...this.events, event];
    }
    console.log(this.events);
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getColors(): any[] {
    const colors = [
      { name: 'Green', id: CalenderDataService.colors.green },
      { name: 'Yellow', id: CalenderDataService.colors.yellow },
      { name: 'Red', id: CalenderDataService.colors.red },
      { name: 'Gray', id: CalenderDataService.colors.gray },
      { name: 'Blue', id: CalenderDataService.colors.blue },
    ];
    return colors;
  }
}
