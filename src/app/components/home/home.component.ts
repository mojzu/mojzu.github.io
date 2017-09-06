import { Component, OnDestroy } from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import * as marginCalculator from "../margin-calculator";
import { ITile } from "./home";

@Component({
  selector: "AppHome",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnDestroy {

  /** Tiles. */
  public tiles: ITile[] = [
    marginCalculator.tile,
    // TODO: MojzuNet tile.
  ];

  // Tile layouts based on screen size.
  public tileColumns: number[];
  public tileRows: number[];

  /** Subscriber to observable media service. */
  protected mediaWatcher: Subscription;

  public constructor(
    protected media: ObservableMedia,
  ) {
    // Initialise tile layout and subscribe to changes.
    this.layoutTiles();
    this.mediaWatcher = media.subscribe((change: MediaChange) => {
      this.layoutTiles(change.mqAlias);
    });
  }

  public ngOnDestroy(): void {
    // Destroy observable subscriber.
    this.mediaWatcher.unsubscribe();
  }

  protected layoutTiles(query?: string): void {
    // Test for active query if none provided.
    if (query == null) {
      query = this.media.isActive("xs") ? "xs" : "md";
    }

    // Reuse existing arrays or create new ones.
    const tileColumns = this.tileColumns || new Array(this.tiles.length).fill(1);
    const tileRows = this.tileRows || new Array(this.tiles.length).fill(1);

    tileColumns.map((v, i) => {
      switch (query) {
        // Mobile layout.
        case "xs": {
          tileColumns[i] = 4;
          tileRows[i] = 4;
          break;
        }
        // Desktop layout.
        default: {
          if (i < 1) {
            tileColumns[i] = 4;
            tileRows[i] = 4;
          } else {
            tileColumns[i] = 2;
            tileRows[i] = 2;
          }
          break;
        }
      }
    });

    // (Re)assign properties.
    this.tileColumns = tileColumns;
    this.tileRows = tileRows;
  }

}
