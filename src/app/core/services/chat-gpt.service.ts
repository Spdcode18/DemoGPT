import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatGptRequest, ChatGptResponse } from '../models/chat-gpt.model';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  private urls = {
    chat_gpt_url: "https://api.openai.com/v1/completions"
  };

  constructor(private httpClient: HttpClient) { }

  getchatGptResult(data: ChatGptRequest) {
    return this.httpClient.post<ChatGptResponse>(this.urls.chat_gpt_url, data);
  }
}
