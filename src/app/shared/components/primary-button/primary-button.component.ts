/**
 * @fileoverview Reusable Primary Button Component
 * @description Standalone component for primary action buttons with loading state
 * @module shared/components/primary-button
 * @author DABubble Team
 */

import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Primary button component with loading spinner
 * @component PrimaryButtonComponent
 */
@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  /**
   * Button text label
   * @type {Signal<string>}
   */
  label = input<string>('Continue');

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
   * Whether button is in loading state
   * @type {Signal<boolean>}
   */
  loading = input<boolean>(false);

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
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit();
    }
  }
}
