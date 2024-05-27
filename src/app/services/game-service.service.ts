import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  colorful = [
    "#8C031C",
    "#F20F38",
    "#D90D1E",
    "#BF0426",
    "#FF4C50",
    "#47017F",
    "#49067F",
    "#7609CC",
    "#930BFF",
    "#D094FF",
    "#0B5219",
    "#22572C",
    "#159E30",
    "#1BD140",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
    "#64EB7E",
  ]

  colorPurple = "#49067F"

  speedList: number[] = [100, 700, 450]
  speed: number = this.speedList[1]
  points: number = 0

  constructor() { }

  getColors() : string[] {
    return this.colorful;
  }

  earnPoints(points: number) : void {
    this.points += points
  }

  getPoints() : number {
    return this.points
  }
}
