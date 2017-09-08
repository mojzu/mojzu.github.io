import { Component, OnInit } from "@angular/core";
import { Title, DomSanitizer } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { MdIconRegistry } from "@angular/material";
import { IRouteData } from "./components/home";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: "AppRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.scss"],
})
export class AppComponent implements OnInit {

  public constructor(
    protected iconRegistry: MdIconRegistry,
    protected sanitiser: DomSanitizer,
    protected title: Title,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    // Toolbar button icons.
    this.iconRegistry.addSvgIcon("mojzu",
      this.sanitiser.bypassSecurityTrustResourceUrl("assets/icons/mojzu.svg"));
    this.iconRegistry.addSvgIcon("github",
      this.sanitiser.bypassSecurityTrustResourceUrl("assets/icons/github.svg"));

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
