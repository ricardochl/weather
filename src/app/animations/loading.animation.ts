import { trigger,style,transition,animate,stagger,query } from '@angular/animations';

export const loadingAnimation = function(){
	return trigger('loading',[
		transition('* => *',[
			query(':leave',[
                style({opacity: 0}),
				stagger(100,[
					animate('350ms',style({opacity:0}))
				])
            ],{optional:true}),
            query(':enter',[
				style({opacity:0}),
				stagger(100,[
					animate('350ms',style({opacity:1}))
				])
			],{optional:true})
		])
	]);
}