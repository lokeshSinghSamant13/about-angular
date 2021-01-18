import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  constructor(private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.router.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  onEdit() {
    this.route.navigate(['edit'], {
      relativeTo: this.router,
      queryParamsHandling: 'preserve',
    });
  }
}
