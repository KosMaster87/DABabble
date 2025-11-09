/**
 * @fileoverview Main entry point for the DABubble Angular application
 * @description This file bootstraps the Angular application using the App component
 * and the application configuration defined in app.config.ts.
 * @module Main
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
