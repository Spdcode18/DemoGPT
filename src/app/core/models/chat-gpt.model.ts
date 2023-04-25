export interface ChatGptRequest {
    model: string;
    prompt: string;
    max_tokens: number;
    temperature: number;
}

export interface ChatGptResponse {
    choices: Array<{ text: string }>;
}