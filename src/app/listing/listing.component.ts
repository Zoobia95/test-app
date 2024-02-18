import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['id', 'title', 'userId', 'body', 'user', 'comments'];
  term: any;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.dataSource = await this.appService.findPosts();
    return this.dataSource
  }

  search(key: any, term: any) {
    if (key.keyCode !== '8') {
      this.term = term;
      this.searchData();
    }
  }

  async refreshSearch(key: any) {
    if (key.keyCode === '8') {
      this.searchData();
    }
  }

  async searchData() {
    this.dataSource = await this.appService.findPosts();
    let terms: any = [];
    this.dataSource.map((item: any) => {
      if (this.term === '') {
        this.fetchData();
      } else if (
        item.id.toString().indexOf(this.term) >= 0 ||
        item.title.toString().toLowerCase().indexOf(this.term) >= 0 ||
        item.userId.toString().indexOf(this.term) >= 0 ||
        item.body.toString().toLowerCase().indexOf(this.term) >= 0
      ) {
        terms.push(item);
      }
      this.dataSource = terms;
    });
  }

  goToUserDetails(row: any) {
    this.router.navigate(['/user-detail', row.userId]);
  }

  goToComments(row: any) {
    this.router.navigate(['/comments', row.id]);
  }
}
