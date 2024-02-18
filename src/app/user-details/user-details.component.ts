import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  userDetails: any;
  allUserDetails: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
  }

  async getUserDetails() {
    this.allUserDetails = await this.appService.getUserDetals();

    for (let i = 0; i < this.allUserDetails.length; i++) {
      if (this.allUserDetails[i].id == this.id) {
        this.userDetails = this.allUserDetails[i];
      }
    }
  }

  goBack() {
    this.router.navigate(['/listing']);
  }
}
