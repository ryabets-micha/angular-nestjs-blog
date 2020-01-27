import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {server} from '../../../../utils/helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  public title: string;
  public description: string;
  public body: string;
  public author: string;
  public date_posted: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.date_posted = new Date().toLocaleDateString();
  }

  public createPost() {
    console.log('post created');
    const postData = {
      title: this.title,
      description: this.description,
      body: this.body,
      author: this.author,
      date_posted: this.date_posted
    };

    this.submitToServer(postData);
  }

  private submitToServer(data) {
    this.http.post(`${server.baseURL}/blog/post`, data)
      .subscribe(d => {
        console.log(d);
        this.router.navigateByUrl('/');
      });
  }

}
