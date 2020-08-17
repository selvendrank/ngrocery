import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export class StoreSummary {
  icon: string;
  title: string;
  textValue: string;
  value: number;
  color: string;
  percentValue: number;
}
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  miniCardData: StoreSummary[];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  // constructor(private breakpointObserver: BreakpointObserver, private summaryService: StoreSummaryService) {}

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.miniCardData = [
      { icon:"shopping_cart", title: 'Total Orders', textValue: '4', value: 100, color: 'primary', percentValue: 10 },
      { icon:"shop", title: 'Total Sales', textValue: '4', value: 200, color: 'accent', percentValue: 10 },
      { icon:"assignment_turned_in", title: 'Total Purchase', textValue: '4', value: 300, color: 'warn', percentValue: 10 },
      { icon:"alarm", title: 'Total Outstanding', textValue: '4', value: 1400, color: 'primary', percentValue: 10 }
    ];
    //   this.summaryService.getStoreSummary().subscribe({
    //     next: summaryData => {
    //       this.miniCardData = summaryData;
    //     }
    //   });
  }
}
