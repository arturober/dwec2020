import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.rating.previousValue + ' - ' + changes.rating.currentValue);
  }

  ngOnInit(): void {
    this.auxRating = this.rating;
  }

  changeRating(rating: number): void {
    this.ratingChanged.emit(rating);
  }
}
