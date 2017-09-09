import { Component, OnDestroy } from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import { marginCalculatorTile } from "../margin-calculator";
import { modbusTsTile } from "../modbus-ts";
import { mojzuNetTile } from "../mojzunet";
import { ITile } from "./home";

@Component({
  selector: "AppHome",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.scss"],
})
export class HomeComponent implements OnDestroy {

  /** Tiles. */
  public tiles: ITile[] = [
    marginCalculatorTile,
    modbusTsTile,
    mojzuNetTile,
  ];

  // Tile layout properties.
  public tileGutterSize = "5px";
  public tileColumnSpans: number[];
  public tileRowSpans: number[];

  /** Subscriber to observable media service. */
  protected mediaWatcher: Subscription;

  public constructor(protected media: ObservableMedia) {
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

  public tileBackground(tile: ITile): string {
    return `assets/${tile.background}`;
  }

  protected layoutTiles(query?: string): void {
    // Test for active query if none provided.
    if (query == null) {
      query = this.media.isActive("xs") ? "xs" : "md";
    }

    // Reuse existing arrays or create new ones.
    const tileColumnSpans = this.tileColumnSpans || new Array(this.tiles.length).fill(1);
    const tileRowSpans = this.tileRowSpans || new Array(this.tiles.length).fill(1);

    tileColumnSpans.map((v, i) => {
      switch (query) {
        // Mobile layout.
        case "xs": {
          tileColumnSpans[i] = 4;
          tileRowSpans[i] = 4;
          break;
        }
        // Desktop layout.
        default: {
          if (i < 1) {
            tileColumnSpans[i] = 4;
            tileRowSpans[i] = 4;
          } else {
            tileColumnSpans[i] = 2;
            tileRowSpans[i] = 2;
          }
          break;
        }
      }
    });

    // (Re)assign properties.
    this.tileColumnSpans = tileColumnSpans;
    this.tileRowSpans = tileRowSpans;
  }

}
