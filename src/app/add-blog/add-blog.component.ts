import { Component, OnInit } from '@angular/core';


class Blog {
  name: string;
  title: string;
  content: string;
}
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  public blog: Blog;
  constructor() { }

  ngOnInit() {
    this.blog = new Blog();
  }

  onSubmit(){
    console.log(this.blog);
  }

}
