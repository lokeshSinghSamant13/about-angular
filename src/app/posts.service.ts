import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Post } from './post.model';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, body: content, author: 'Lokesh Singh' };
    this.http
      .post<{ name: string }>(`${BASE_URL}/posts`, postData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchPosts() {
    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string]: Post }>(`${BASE_URL}/posts`).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

  deletePosts(postId: number) {
    return this.http.delete(`${BASE_URL}/posts/${postId}`).pipe(
      tap((event) => {
        console.log(event);
      })
    );
  }
}
