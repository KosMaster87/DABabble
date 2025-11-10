/**
 * @fileoverview Application Configuration
 * @description This file contains the main application configuration for the DABubble app.
 * It sets up routing, error handling, integrates Firebase services including
 * Firestore, Authentication, Storage, and configures PrimeNG with Aura theme.
 * @module AppConfig
 * @author DABubble Team
 */

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from './../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // Animations async for better performance (lazy loading)
    // PrimeNG needs Angular Animations for Ripple, Dialogs, Transitions
    provideAnimationsAsync(),

    // PrimeNG v20+ Theme Configuration
    // No CSS files needed! Theme is loaded programmatically
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
      ripple: true, // Ripple effect on buttons (requires Animations!)
      csp: {
        nonce: undefined, // PrimeNG's global Autofocus-System (Content Security Policy)
      },
    }),

    // Firebase services
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // Firestore Database
    provideStorage(() => getStorage()),
  ],
};
