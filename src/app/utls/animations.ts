import { style, animate, trigger, transition, useAnimation } from '@angular/animations';
export const customAnimation = [
    trigger(
        'inOutAnimation',
        [
            transition(
                ':enter',
                [
                style({ height: 0, opacity: 0 }),
                animate('1s ease-out',
                        style({ height: 300, opacity: 1 }))
                ]
            ),
            transition(
                ':leave',
                [
                style({ height: 300, opacity: 1 }),
                animate('1s ease-in',
                        style({ height: 0, opacity: 0 }))
                ]
            )
        ]
    ),
    trigger(
        'fadeInAnimation',
        [
            transition(
                ':enter',
                [
                style({ opacity: 0 }),
                animate('1s ease-out',
                        style({opacity: 1 }))
                ]
            ),
            transition(
                ':leave',
                [
                style({ height: 300, opacity: 1 }),
                animate('1s ease-in',
                        style({ height: 0, opacity: 0 }))
                ]
            )
        ]
    )
]