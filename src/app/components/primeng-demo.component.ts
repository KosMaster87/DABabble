/**
 * @fileoverview PrimeNG Demo Component
 * @description Demo component to verify PrimeNG installation and configuration.
 * Showcases various PrimeNG components like Button, Card, and Input.
 * @module Components
 * @author DABubble Team
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

/**
 * Demo component for PrimeNG components
 * @class PrimengDemoComponent
 */
@Component({
  selector: 'app-primeng-demo',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, InputTextModule, ToastModule],
  providers: [MessageService],
  template: `
    <div class="primeng-demo">
      <p-toast></p-toast>

      <p-card header="PrimeNG Demo" subheader="Testing PrimeNG Components">
        <div class="primeng-demo__content">
          <div class="primeng-demo__section">
            <h3>Buttons</h3>
            <div class="primeng-demo__buttons">
              <p-button
                label="Primary Button"
                icon="pi pi-check"
                [autofocus]="false"
                (onClick)="showSuccess()"
              >
              </p-button>

              <p-button
                label="Secondary"
                icon="pi pi-times"
                severity="secondary"
                [autofocus]="false"
                (onClick)="showInfo()"
              >
              </p-button>

              <p-button
                label="Danger"
                icon="pi pi-trash"
                severity="danger"
                [autofocus]="false"
                (onClick)="showError()"
              >
              </p-button>
            </div>
          </div>

          <div class="primeng-demo__section">
            <h3>Input</h3>
            <input
              type="text"
              pInputText
              placeholder="Enter text here"
              class="primeng-demo__input"
            />
          </div>

          <div class="primeng-demo__section">
            <h3>Icons</h3>
            <div class="primeng-demo__icons">
              <i class="pi pi-check" style="font-size: 2rem"></i>
              <i class="pi pi-times" style="font-size: 2rem"></i>
              <i class="pi pi-user" style="font-size: 2rem"></i>
              <i class="pi pi-calendar" style="font-size: 2rem"></i>
              <i class="pi pi-search" style="font-size: 2rem"></i>
            </div>
          </div>
        </div>
      </p-card>
    </div>
  `,
  styles: [
    `
      .primeng-demo {
        padding: var(--spacing-lg);
        max-width: 800px;
        margin: 0 auto;

        &__content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        &__section {
          h3 {
            margin-bottom: var(--spacing-md);
            color: var(--primary-color);
          }
        }

        &__buttons {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        &__input {
          width: 100%;
          max-width: 400px;
        }

        &__icons {
          display: flex;
          gap: var(--spacing-lg);
          color: var(--primary-color);
        }
      }
    `,
  ],
})
export class PrimengDemoComponent {
  /**
   * Creates an instance of PrimengDemoComponent
   * @constructor
   * @param {MessageService} messageService - PrimeNG message service for toast notifications
   */
  constructor(private messageService: MessageService) {}

  /**
   * Show success toast message
   * @function showSuccess
   * @returns {void}
   */
  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'PrimeNG is working correctly!',
    });
  }

  /**
   * Show info toast message
   * @function showInfo
   * @returns {void}
   */
  showInfo(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'This is an info message',
    });
  }

  /**
   * Show error toast message
   * @function showError
   * @returns {void}
   */
  showError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'This is an error message',
    });
  }
}
