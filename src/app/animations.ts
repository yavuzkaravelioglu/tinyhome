import { animate, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    transition( 'void => *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ])
]);

export let delay_fade = trigger('delay_fade', [
  transition( 'void => *', [
    style({ opacity: 0 }),
    animate('0.7s 500ms', style({ opacity: 1 }))
  ])
]);

export let delay_fade_slower = trigger('delay_fade_slower', [
    transition( 'void => *', [
      style({ opacity: 0 }),
      animate('0.7s 1.2s', style({ opacity: 1 }))
    ])
]);



