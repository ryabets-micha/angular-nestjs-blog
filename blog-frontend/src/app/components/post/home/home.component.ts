import { Component, OnInit } from '@angular/core';
import {PostData} from '../../../../types/blog-types';
import {HttpClient} from '@angular/common/http';
import {server} from '../../../../utils/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public posts: PostData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http.get(`${server.baseURL}/blog/posts`)
      .subscribe((data: PostData[]) => {
        this.posts = data;
      });
  }

  public deletePost(id) {
    this.http.delete(`${server.baseURL}/blog/delete?postID=${id}`).subscribe(_ => window.location.reload());
  }

}
