import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService } from '../pet.service';
import { Org } from '../models/org.model';

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.scss']
})
export class OrgDetailComponent implements OnInit {

  // @Input()  org: Org;
  org: Org;


  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOrg()
  }

  getOrg(): void {
    // console.log(org);
    const id = this.route.snapshot.paramMap.get('_id');
    this.petService.getOrg(id)
      .subscribe(org => {
        this.org = org;
        console.log('org-detail.component, this.org:',this.org);
      });
  }

  acceptAdoption(queryId, petId, usrId): void {
    const orgId = this.route.snapshot.paramMap.get('_id');
    this.petService.acceptAdoption(queryId, orgId, petId, usrId)
      .subscribe(
      data => console.log('data', data),
      error => console.log('error', error)
    );
    this.getOrg()
  }

  rejectAdoption(queryId, petId, usrId): void {
    const orgId = this.route.snapshot.paramMap.get('_id');
    this.petService.rejectAdoption(queryId, orgId, petId, usrId)
      .subscribe(
      data => console.log('data', data),
      error => console.log('error', error)
    );
    this.getOrg()
  }

  goBack(): void {
    this.location.back()
  }

}
