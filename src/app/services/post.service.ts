import { Injectable , Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../interfaces/response.interface';
import { Post } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(@Inject('API') public API, private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const getPostUrl = this.API + 'v1/search_by_date?tags=story';
    return this.http.get(getPostUrl).pipe(
      map((response: Response) => {
        const posts : Post[] = response.hits;
        return posts;
      })
    );
  }

}
