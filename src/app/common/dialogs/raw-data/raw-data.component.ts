import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RawDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
