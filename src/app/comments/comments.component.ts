import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  id: any;
  comments: any;
  postComments: any = [];
  dataSource: any = [];
  displayedColumns = ['id', 'name', 'postId', 'email', 'body'];
  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getComments();
  }

  async getComments() {
    this.comments = await this.appService.getComments();

    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].postId == this.id) {
        this.postComments.push(this.comments[i]);
      }
    }
    this.dataSource = new MatTableDataSource<any>(this.postComments);
  }

  goBack() {
    this.router.navigate(['/listing']);
  }
}
