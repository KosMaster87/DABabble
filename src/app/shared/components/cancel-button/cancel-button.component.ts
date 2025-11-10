/**
 * @fileoverview Reusable Cancel Button Component
 * @description Standalone component for cancel action buttons
 * @module shared/components/cancel-button
 * @author DABubble Team
 */

import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Cancel button component for dismissing actions
 * @component CancelButtonComponent
 */
@Component({
  selector: 'app-cancel-button',
  imports: [CommonModule],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss',
})
export class CancelButtonComponent {
  /**
   * Button text label
   * @type {Signal<string>}
   */
  label = input<string>('Cancel');

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
