/**
 * @fileoverview Reusable Back Button Component
 * @description Standalone component for circular icon-only back navigation
 * @module shared/components/back-button
 * @author DABubble Team
 */

import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Circular icon-only back button component
 * @component BackButtonComponent
 */
@Component({
  selector: 'app-back-button',
  imports: [CommonModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
})
export class BackButtonComponent {
  /**
   * Button type (submit, button)
   * @type {Signal<'submit' | 'button'>}
   */
  type = input<'submit' | 'button'>('button');

  /**
   * Whether button is disabled
   * @type {Signal<boolean>}
   */
  disabled = input<boolean>(false);

  /**
   * Click event emitter
   * @type {OutputEmitterRef<void>}
   */
  clicked = output<void>();

  /**
   * Handle button click
   * @function handleClick
   * @returns {void}
   */
  handleClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
