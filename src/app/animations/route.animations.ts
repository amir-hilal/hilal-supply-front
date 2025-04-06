import { trigger, transition, style, animate, query } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  // Transition between any routes
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
        }),
      ],
      { optional: true },
    ),
    query(':enter', [animate('300ms ease-in-out', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);
