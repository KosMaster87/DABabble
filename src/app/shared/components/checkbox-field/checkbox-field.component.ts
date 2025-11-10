/**
 * @fileoverview Reusable Checkbox Field Component
 * @description Standalone component for custom checkbox with label
 * @module shared/components/checkbox-field
 * @author DABubble Team
 */

import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/**
 * Reusable checkbox field component with custom styling
 * @component CheckboxFieldComponent
 */
@Component({
  selector: 'app-checkbox-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss',
})
export class CheckboxFieldComponent {
  /**
   * Form control for the checkbox
   * @type {Signal<FormControl>}
   */
  control = input.required<FormControl>();

  /**
   * Checkbox field ID
   * @type {Signal<string>}
   */
  id = input.required<string>();

  /**
   * Label text for the checkbox
   * @type {Signal<string>}
   */
  label = input<string>('');
}
