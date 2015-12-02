/*global angular*/
(function () {
    "use strict";
    var app, gems, food;
    app = angular.module('store', []);
    gems = [
        {
            name: 'Dope Diamond',
            price: 82.95,
            description: "8 cups Chicken Stock or fat-free, lower-sodium chicken broth\n2 (4-ounce) skinless, bone-in chicken thighs\n1 (12-ounce) skinless, bone-in chicken breast half\n2 cups diagonally sliced carrot\n2 cups diagonally sliced celery\n1 cup chopped onion\n6 ounces uncooked medium egg noodles\n1/2 teaspoon kosher salt\n1/2 teaspoon black pepper\nCelery leaves (optional)",
            specification: "Phasellizzle fo shizzle my nizzle crunk. Curabitur non velizzle the bizzle pede crackalackin facilisizzle. Bow wow wow rizzle nulla, iaculizzle fo shizzle, break.",
            review: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope viverra fo. Curabitizzle sollicitudin boom shackalack quizzle purus.",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/diamond.png',
                    thumb: 'img/diamond-thumb.png'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this gem",
                    author: "joe@thomas.com"
                },
                {
                    stars: 3,
                    body: "I bought this for my wife",
                    author: "hubby@loveydovey.com"
                }
            ]
        },
        {
            name: 'Rare Ruby',
            price: 95.95,
            description: "Maecenas quis metus izzle fo shizzle my nizzle yo gangsta. Break yo neck, yall dope viverra fo. Curabitizzle sollicitudin boom shackalack quizzle purus.",
            specification: "Lorizzle ipsizzle dolor sit dang, we gonna chung that's the shizzle shut the shizzle up. Nullam tellivizzle bling bling, aliquet volutpizzle, suscipit break it down, gravida.",
            review: "Phasellizzle fo shizzle my nizzle crunk. Curabitur non velizzle the bizzle pede crackalackin facilisizzle. Bow wow wow rizzle nulla, iaculizzle fo shizzle, break.",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/ruby.png',
                    thumb: 'img/ruby-thumb.png'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "This Ruby is really hard to find",
                    author: "jane@doe.com"
                },
                {
                    stars: 2,
                    body: "Mine came cracked",
                    author: "james@jungle.com"
                }
            ]
        }
    ];
    
    food = [
        {
            name: 'Old Fashion Chicken Soup',
            calories: 82.95,
            ingredients: [
                {
                    item: '8 cups Chicken Stock or fat-free, lower-sodium chicken broth'
                },
                {
                    item: '2 (4-ounce) skinless, bone-in chicken thighs'
                },
                {
                    item: '1 (12-ounce) skinless, bone-in chicken breast half'
                },
                {
                    item: '2 cups diagonally sliced carrot'
                },
                {
                    item: '2 cups diagonally sliced celery'
                },
                {
                    item: '1 cup chopped onion'
                },
                {
                    item: '6 ounces uncooked medium egg noodles'
                },
                {
                    item: '1/2 teaspoon kosher salt'
                },
                {
                    item: '1/2 teaspoon black pepper'
                },
                {
                    item: 'Celery leaves (optional)'
                }
            ],
            preparation: [
                {
                    "Step 1": 'Combine the chicken stock, chicken thighs and breast half in a Dutch oven over medium-high heat',
                    "Step 2": 'Bring to a boil. Reduce heat. Simmer for 20 minutes',
                    "Step 3": 'Remove chicken from pan. Let stand for 10 minutes',
                    "Step 4": 'Remove chicken from bones. Shred meat into bite-sized pieces. Discard bones',
                    "Step 5": 'Add carrot, celery, and onion to pan. Cover and simmer for 10 minutes',
                    "Step 6": 'Add noodles and simmer 6 minutes',
                    "Step 7": 'Add chicken, salt, and black pepper. Cook for 2 minutes or until noodles are done',
                    "Step 8": 'Garnish with celery leaves, if desired'
                }
            ],
            images: [
                {
                    full: 'img/diamond.png',
                    thumb: 'img/diamond-thumb.png'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this soup",
                    author: "joe@thomas.com"
                },
                {
                    stars: 3,
                    body: "I made this for my wife",
                    author: "hubby@loveydovey.com"
                }
            ]
        }
    ];
    
	app.controller('StoreController', function () {
		this.products = gems;
        this.recipes = food;
	});

	app.controller('PanelController', function () {
		this.tab = 1;
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	});

	



}());