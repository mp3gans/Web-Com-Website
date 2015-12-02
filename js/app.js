/*global angular*/
(function () {
    "use strict";
    var app, gems, food;
    app = angular.module('store', []);
    gems = [
        {
            name: 'Old Fashion Chicken Soup',
            description: "8 cups Chicken Stock or fat-free, lower-sodium chicken broth\n2 (4-ounce) skinless, bone-in chicken thighs\n1 (12-ounce) skinless, bone-in chicken breast half\n2 cups diagonally sliced carrot\n2 cups diagonally sliced celery\n1 cup chopped onion\n6 ounces uncooked medium egg noodles\n1/2 teaspoon kosher salt\n1/2 teaspoon black pepper\nCelery leaves (optional)",
            specification: "Step 1: Combine the chicken stock, chicken thighs and breast half in a Dutch oven over medium-high heat.\nStep 2: Bring to a boil. Reduce heat. Simmer for 20 minutes.\nStep 3: Remove chicken from pan. Let stand for 10 minutes.\nStep 4: Remove chicken from bones. Shred meat into bite-sized pieces. Discard bones.\nStep 5: Add carrot, celery, and onion to pan. Cover and simmer for 10 minutes.\nStep 6: Add noodles and simmer 6 minutes.\nStep 7: Add chicken, salt, and black pepper. Cook for 2 minutes or until noodles are done.\nStep 8: Garnish with celery leaves, if desired.",
            images: [
                {
                    full: 'img/Chicken-Soup.jpg'
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
        },
        {
            name: 'Cold Chicken and Rice Salad',
            description: "2 (6-ounce) skinless, boneless chicken breast halves\n3/4 teaspoon salt, divided\n3/4 teaspoon black pepper, divided\nCooking spray\n3/4 cup uncooked long-grain rice\n3 tablespoons fresh lemon juice\n2 tablespoons olive oil\n1/3 cup dried cranberries\n1/4 cup diced celery\n1/4 cup thinly sliced green onions\n1/4 cup diced red bell pepper\n1/4 cup chopped pimiento-stuffed olives\n12 green leaf lettuce leaves, torn\n1/4 cup thinly sliced green onion tops\n4 lemon wedges",
            specification: "Step 1: Preheat oven to 400°.\nStep 2: Sprinkle chicken with 1/4 teaspoon salt and 1/2 teaspoon pepper.\nStep 3: Heat a medium ovenproof skillet over medium-high heat. Coat pan with cooking spray.\nStep 4: Add chicken to pan; cook 3 minutes. Turn chicken over. Place pan in oven; bake at 400° for 8 minutes or until done.\nStep 5: Remove chicken from pan, and let stand for 5 minutes. Shred chicken, and chill for 30 minutes.\nStep 6: Cook rice according to package directions, omitting salt and fat.\nStep 7: Coat a jelly-roll pan with cooking spray. Spread rice in an even layer in pan. Chill for 30 minutes.\nStep 8: Combine remaining 1/2 teaspoon salt, remaining 1/4 teaspoon pepper, juice, and oil in a large bowl, stirring with a whisk.\nStep 9: Add chicken, rice, cranberries, and next 5 ingredients (through lettuce) to juice mixture in bowl, and toss gently.\nStep 10: Divide the rice mixture evenly among 4 plates, and sprinkle with green onion tops. Serve with lemon wedges.",
            images: [
                {
                    full: 'img/Chicken-Rice-Salad.jpg'
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