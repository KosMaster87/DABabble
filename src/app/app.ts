/**
 * @fileoverview Main Application Component
 * @description This component serves as the root of the DABubble application.
 * It initializes the Firebase service on startup.
 * @module AppComponent
 * @author DABubble Team
 */

import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dabubble');
  private firebaseService = inject(FirebaseService);

  constructor() {
    if (!environment.production) {
      console.log('🚀 DABubble App started!');
    }
  }
}
