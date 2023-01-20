import { Component, OnInit } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  prompt: string = '';
  imageUrl: string = '';
  isLoading: boolean = false;

  constructor() {}

  changed(event: Event) {
    const value = event.target;
    this.prompt = (event.target as any).value;
  }

  generateImage = async () => {
    this.isLoading = true;
    this.imageUrl = '';
    console.log('isLoading:', this.isLoading);
    const res = await openapi.createImage({
      prompt: this.prompt,
      n: 1,
      size: '512x512',
    });
    const url = res.data.data[0].url as string;
    this.isLoading = false;
    this.imageUrl = url;
  };

  ngOnInit(): void {}
}

const configuration = new Configuration({
  apiKey: environment.Open_AI_Key,
});

const openapi = new OpenAIApi(configuration);
