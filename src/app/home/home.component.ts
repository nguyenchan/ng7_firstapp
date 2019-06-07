import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Author } from '../author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  authors: Author[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAuthors().subscribe(data => {
      this.authors = data
      console.log(this.authors)
    })
  }

}
