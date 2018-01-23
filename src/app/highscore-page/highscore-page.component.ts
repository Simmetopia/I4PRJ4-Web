import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Data/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-highscore-page',
  templateUrl: './highscore-page.component.html',
  styleUrls: ['./highscore-page.component.css']
})
export class HighscorePageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users: IUser[];
  dataSource;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.http
      .get<IUser[]>('http://kingsofdanger.herokuapp.com/api/users')
      .subscribe(data => {
        this.users = data.sort(this.CompareFunc);
        this.dataSource = new MatTableDataSource<IUser>(this.users);
        this.dataSource.paginator = this.paginator;
      });
  }
  CompareFunc(user1: IUser, user2: IUser) {
    if (user1.totalLevel > user2.totalLevel) {
      return -1;
    }
    if (user1.totalLevel < user2.totalLevel) {
      return 1;
    }
    return 0;
  }
}
