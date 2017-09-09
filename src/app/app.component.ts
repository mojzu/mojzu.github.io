import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { IRouteData } from "./components";
import { icons, IconsService } from "./services";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: "AppRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.scss"],
})
export class AppComponent implements OnInit {

  public icons = icons;

  public constructor(
    protected title: Title,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    // Load icons service with root component.
    protected iconsService: IconsService,
  ) { }

  public ngOnInit(): void {
    // Set HTML title based on route.
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild != null) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === "primary")
      .mergeMap<ActivatedRoute, IRouteData>((route) => route.data)
      .subscribe((data) => this.setTitle(data.title));
  }

  protected setTitle(title: string): void {
    this.title.setTitle(`MojzuNet - ${title}`);
  }

}
