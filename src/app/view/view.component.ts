import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public path: string;
  public project: string;
  public work: string;
  public problem: string;

  public tags: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.path = this.route.snapshot.url[0].path;

    this.project = this.route.snapshot.params['project'];
    this.work = this.route.snapshot.params['work'];
    this.problem = this.route.snapshot.params['problem'];
    this.tags = this.route.snapshot.params['tags'];

    //console.log();
  }

}