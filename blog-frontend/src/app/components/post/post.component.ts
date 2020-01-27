import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostData} from '../../../types/blog-types';
import {HttpClient, HttpParams} from '@angular/common/http';
import {server} from '../../../utils/helper';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  public id: number = 0;
  public post: PostData = new PostData();

  constructor(private http: HttpClient, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRout.params.subscribe((params: HttpParams) => {
      this.id = params['id'];
      this.getPost();
    });
  }

  public navigate() {
    this.router.navigateByUrl('/');
  }

  private getPost() {
    this.http.get(`${server.baseURL}/blog/post/${this.id}`)
      .subscribe((data: PostData) => (this.post = data));
  }

}
