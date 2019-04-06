import { Component, OnInit } from '@angular/core';
import { Post } from './interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';
import { RawDataComponent } from './common/dialogs/raw-data/raw-data.component';

/* Import all RxJs Dependencies */
import { startWith, switchMap } from "rxjs/operators";
import { interval } from "rxjs/internal/observable/interval";

/* Import all Material Dependencies */
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})
export class AppComponent implements OnInit {

  posts: Post[];
  loader: boolean = false;
  displayedColumns: string[];
  dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();;

  constructor(private postService: PostService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    /* Columns to display in the table */
    this.displayedColumns = ['title', 'author', 'url', 'created_at'];

    /* Get Posts after every 10 seconds */
    interval(10000).pipe(
      startWith(0),
      switchMap(() => this.postService.getPosts() )
    ).subscribe(response => {
      this.posts = response;
      this.dataSource.data = this.posts;
      this.loader = false;

      /* Filter the table by title */
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.title.toLowerCase().includes(filter);
      };

    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row : Post): void {
    const dialogRef = this.dialog.open(RawDataComponent, {
      width: '50vw',
      data: row
    });
  }
}
