import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatGptService } from '../core/services/chat-gpt.service';
import { LodderService } from '../core/services/lodder.service';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnChanges {
  isSubmit: boolean = false;
  result!: string;
  loading$ = this.loader.loading$;

  @Input() keywords: string = "";
  @Input() isSearch: boolean = false;

  constructor(private chatGptService: ChatGptService,
    private _snackBar: MatSnackBar,
    private loader: LodderService) { }

  ngOnChanges(): void {
    if (this.isSearch)
      this.search(this.keywords);
  }

  search(event: string): void {
    //alert("Calling form Google" + event);
    this.isSubmit = true;
  }
}
