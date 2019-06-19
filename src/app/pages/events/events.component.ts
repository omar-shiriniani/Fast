import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  title = "Events";

  displayedColumns = ["name", "position", "weight"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}

export interface PeriodicElement {
  event: string;
  location: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    event: "NG Conf",
    location: "Salt Lake City, Utah",
    date: "September 19-20, 2019"
  },
  {
    event: "NG Conf",
    location: "Salt Lake City, Utah",
    date: "September 19-20, 2019"
  },
  {
    event: "NG Conf",
    location: "Salt Lake City, Utah",
    date: "September 19-20, 2019"
  },
  {
    event: "NG Conf",
    location: "Salt Lake City, Utah",
    date: "September 19-20, 2019"
  }
];
