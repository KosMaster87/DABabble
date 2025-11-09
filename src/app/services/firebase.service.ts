/**
 * @fileoverview Firebase Service for Firestore and Auth operations
 * @description This service provides core Firebase functionality for the DABubble application.
 * It manages Firestore database operations and Authentication.
 * @module FirebaseService
 */

import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  constructor() {
    if (!environment.production) {
      console.log('🔥 Firebase Service initialized!');
      console.log('✅ Firestore:', this.firestore ? 'Connected' : 'Not Connected');
      console.log('✅ Auth:', this.auth ? 'Connected' : 'Not Connected');
    }
  }

  // Weitere Firebase-Methoden werden hier hinzugefügt
  // z.B. getUser(), createChannel(), sendMessage(), etc.
}
