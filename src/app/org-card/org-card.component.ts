import { Component, OnInit, Input } from '@angular/core';
import { Org } from '../models/org.model';

@Component({
  selector: 'app-org-card',
  templateUrl: './org-card.component.html',
  styleUrls: ['./org-card.component.scss']
})
export class OrgCardComponent implements OnInit {
  @Input() org: Org;
  constructor() { }

  ngOnInit() {
  }

}
