import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private acountService: AccountService) {}

  ngOnInit(): void {}
  onSetTo(status: string) {
    this.acountService.updateStatus(this.id, status);
    this.acountService.statusUpdate.emit(status);
  }
}
