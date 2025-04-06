import { trigger, transition, style, animate } from '@angular/animations';

export const overlayFadeAnimation = trigger('overlayFadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in-out', style({ opacity: 0.3 })),
  ]),
  transition(':leave', [animate('300ms ease-in-out', style({ opacity: 0 }))]),
]);

export const slideLeftToRightAnimation = trigger('slideLeftToRightAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))]),
]);

export const slideRightToLeftAnimation = trigger('slideRightToLeftAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))]),
]);

export const tabAnimation = trigger('tabAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
]);
export const tabAnimationRTL = trigger('tabAnimationRTL', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
]);
