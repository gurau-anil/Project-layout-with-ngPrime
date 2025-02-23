import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu],
    template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`,
    styles:[`
    .layout-sidebar {
            position: fixed;
            width: 20rem;
            height: calc(100vh - 4rem);
            z-index: 999;
            overflow-y: auto;
            user-select: none;
            top: 4rem !important;
            left: 0rem !important;
            transition:
                transform var(--layout-section-transition-duration),
                left var(--layout-section-transition-duration);
            background-color: var(--surface-overlay);
            border-radius: 0;
            padding: 0.5rem 1.5rem;
        }
    `]
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
