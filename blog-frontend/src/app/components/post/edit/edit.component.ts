import { Component, OnInit } from '@angular/core';
import {server} from '../../../../utils/helper';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {PostData} from '../../../../types/blog-types';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  public id: number = 0;
  public post: PostData = new PostData();

  constructor(private http: HttpClient, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRout.params.subscribe((params: HttpParams) => {
      this.id = params['id'];
      this.getPost();
    });
  }

  private getPost() {
    this.http.get(`${server.baseURL}/blog/post/${this.id}`)
      .subscribe(data => (this.post = data['data']))
  }

  public editPost() {
    this.http.put(`${server.baseURL}/blog/edit?postID=${this.id}`, this.post)
      .subscribe(d => console.log(d));
  }

  public navigate() {
    this.router.navigateByUrl('/');
  }

}
