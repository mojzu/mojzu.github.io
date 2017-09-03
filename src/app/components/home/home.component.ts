import { Component, OnDestroy } from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import { ITile } from "./home";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnDestroy {

  public tiles: ITile[] = [
    {
      text: "1",
    },
    {
      text: "2",
    },
    {
      text: "3",
    },
    {
      text: "4",
    },
    {
      text: "5",
    },
    {
      text: "6",
    },
  ];

  // Tile layouts based on screen size.
  public tileColumns: number[];
  public tileRows: number[];

  /** Subscriber to observable media service. */
  protected mediaWatcher: Subscription;

  public constructor(
    protected media: ObservableMedia,
  ) {
    this.mediaWatcher = media.subscribe((change: MediaChange) => {
      this.layoutTiles(change.mqAlias);
    });
  }

  public ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

  protected layoutTiles(layout: string): void {
    const tileColumns = this.tileColumns || new Array(this.tiles.length).fill(1);
    const tileRows = this.tileRows || new Array(this.tiles.length).fill(1);

    tileColumns.map((v, i) => {
      switch (layout) {
        // Mobile layout.
        case "xs": {
          tileColumns[i] = 4;
          tileRows[i] = 4;
          break;
        }
        // Tablet layout.
        case "sm": {
          if (i < 1) {
            tileColumns[i] = 4;
            tileRows[i] = 4;
          } else {
            tileColumns[i] = 2;
            tileRows[i] = 2;
          }
          break;
        }
        // Desktop layout.
        default: {
          if (i < 1) {
            tileColumns[i] = 4;
            tileRows[i] = 4;
          } else if (i < 3) {
            tileColumns[i] = 2;
            tileRows[i] = 2;
          } else {
            tileColumns[i] = 1;
            tileRows[i] = 1;
          }
          break;
        }
      }
    });

    this.tileColumns = tileColumns;
    this.tileRows = tileRows;
  }

}
