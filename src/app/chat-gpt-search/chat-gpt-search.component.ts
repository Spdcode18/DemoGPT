import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatGptService } from '../core/services/chat-gpt.service';
import { LodderService } from '../core/services/lodder.service';

@Component({
  selector: 'app-chat-gpt-search',
  templateUrl: './chat-gpt-search.component.html',
  styleUrls: ['./chat-gpt-search.component.css']
})
export class ChatGptSearchComponent implements OnChanges {
  isSubmit: boolean = false;
  result!: string;
  // loading$ = this.loader.loading$;
  loading: boolean = false;

  @Input() keywords: string = "";
  @Input() isSearch: boolean = false;

  constructor(private chatGptService: ChatGptService,
    private _snackBar: MatSnackBar) { }

  ngOnChanges(): void {
    if (this.isSearch)
      this.search(this.keywords);
  }

  search(event: string): void {
    // alert("Calling form ChatGpt" + event);
    let requestData = {
      model: "text-davinci-003",
      prompt: event,
      max_tokens: 1000,
      temperature: 0.7
    };
    // this.loader.show();
    this.loading = true;
    this.chatGptService.getchatGptResult(requestData).subscribe({
      next: (res) => {
        // this.loader.hide();
        this.loading = false;
        this.isSubmit = true;
        // console.log(res.choices[0].text);
        this.result = res.choices[0].text;
      },
      error: (err) => {
        this._snackBar.open("Response Error", "close", {
          horizontalPosition: "right",
          verticalPosition: "top"
        });
      }
    });


  }

}
