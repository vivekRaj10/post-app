import { Injectable , Inject} from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';
import { Response } from '../interfaces/response.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private loaderSubject = new Subject<boolean>();
  loaderState = this.loaderSubject.asObservable();

  constructor(@Inject('API') public API, private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const getPostUrl = this.API + 'v1/search_by_date?tags=story';
    this.loaderSubject.next(true);
    return this.http.get(getPostUrl).pipe(
      map((response: Response) => {
        const posts : Post[] = response.hits;
        this.loaderSubject.next(false);
        return posts;
      })
    );
  }

}
