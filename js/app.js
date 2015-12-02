/*global angular*/
(function () {
    "use strict";
    var app, gems, food;
    app = angular.module('store', []);
    gems = [
        {/*1*/
            name: 'Old Fashion Chicken Soup',
            description: "8 cups Chicken Stock or fat-free, lower-sodium chicken broth\n2 (4-ounce) skinless, bone-in chicken thighs\n1 (12-ounce) skinless, bone-in chicken breast half\n2 cups diagonally sliced carrot\n2 cups diagonally sliced celery\n1 cup chopped onion\n6 ounces uncooked medium egg noodles\n1/2 teaspoon kosher salt\n1/2 teaspoon black pepper\nCelery leaves (optional)",
            specification: "Step 1: Combine the chicken stock, chicken thighs and breast half in a Dutch oven over medium-high heat.\nStep 2: Bring to a boil. Reduce heat. Simmer for 20 minutes.\nStep 3: Remove chicken from pan. Let stand for 10 minutes.\nStep 4: Remove chicken from bones. Shred meat into bite-sized pieces. Discard bones.\nStep 5: Add carrot, celery, and onion to pan. Cover and simmer for 10 minutes.\nStep 6: Add noodles and simmer 6 minutes.\nStep 7: Add chicken, salt, and black pepper. Cook for 2 minutes or until noodles are done.\nStep 8: Garnish with celery leaves, if desired.",
            illness: 'Cancer',
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
        {/*2*/
            name: 'Cold Chicken and Rice Salad',
            description: "2 (6-ounce) skinless, boneless chicken breast halves\n3/4 teaspoon salt, divided\n3/4 teaspoon black pepper, divided\nCooking spray\n3/4 cup uncooked long-grain rice\n3 tablespoons fresh lemon juice\n2 tablespoons olive oil\n1/3 cup dried cranberries\n1/4 cup diced celery\n1/4 cup thinly sliced green onions\n1/4 cup diced red bell pepper\n1/4 cup chopped pimiento-stuffed olives\n12 green leaf lettuce leaves, torn\n1/4 cup thinly sliced green onion tops\n4 lemon wedges",
            specification: "Step 1: Preheat oven to 400°.\nStep 2: Sprinkle chicken with 1/4 teaspoon salt and 1/2 teaspoon pepper.\nStep 3: Heat a medium ovenproof skillet over medium-high heat. Coat pan with cooking spray.\nStep 4: Add chicken to pan; cook 3 minutes. Turn chicken over. Place pan in oven; bake at 400° for 8 minutes or until done.\nStep 5: Remove chicken from pan, and let stand for 5 minutes. Shred chicken, and chill for 30 minutes.\nStep 6: Cook rice according to package directions, omitting salt and fat.\nStep 7: Coat a jelly-roll pan with cooking spray. Spread rice in an even layer in pan. Chill for 30 minutes.\nStep 8: Combine remaining 1/2 teaspoon salt, remaining 1/4 teaspoon pepper, juice, and oil in a large bowl, stirring with a whisk.\nStep 9: Add chicken, rice, cranberries, and next 5 ingredients (through lettuce) to juice mixture in bowl, and toss gently.\nStep 10: Divide the rice mixture evenly among 4 plates, and sprinkle with green onion tops. Serve with lemon wedges.",
            illness: 'Cancer',
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
        },
		{/*3*/
            name: 'Lemon Risotto with Tarragon and Leeks',
            description: "1 cup fresh green peas\n4 cups Homemade Chicken Stock\n2 tablespoons extra-virgin olive oil\n1 1/2 cups finely chopped leek (about 2)\n1/2 cup chopped shallots\n1 cup uncooked Carnaroli or Arborio rice or other medium-grain rice 3 tablespoonsdry white wine\n1/2 cup (2 ounces) grated fresh Parmigiano-Reggiano cheese\n1 teaspoon grated lemon rind\n2 tablespoons fresh lemon juice\n1/2 teaspoon salt\n1/8 teaspoon freshly ground black pepper\n2 tablespoons chopped fresh tarragon\n1 tablespoon butter",
            specification: "Step 1: Bring a small saucepan of water to a boil.\nStep 2: Add peas; boil 1 minute. Drain and rinse with cold water; drain well.\nStep 3: Bring Homemade Chicken Stock to a simmer in a small saucepan (do not boil). Keep warm over low heat.\nStep 4: Heat oil in a large saucepan over medium heat.\nStep 5: Add leek and shallots to pan; cook 7 minutes or until tender, stirring frequently.\nStep 6: Add rice; cook 1 minute, stirring constantly.\nStep 7: Add wine; cook 30 seconds or until the liquid is nearly absorbed, stirring constantly.\nStep 8: Stir in 1 cup stock; cook 4 minutes or until the liquid is nearly absorbed, stirring constantly.\nStep 9: Add remaining stock, 1/2 cup at a time, stirring constantly until each portion of stock is absorbed.\nStep 10: Stir in peas; cook 1 minute.\nStep 11: Stir in cheese, rind, juice, salt, and pepper.\nStep 12: Remove from heat; stir in tarragon and butter.",
            illness: 'Cancer',
            images: [
                {
                    full: 'img/Risotto.jpg'
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
		{/*4*/
            name: 'Tomato & Olive Stuffed Portobello Caps',
            description: "2/3 cup chopped plum tomatoes\n1/2 cup shredded part-skim mozzarella cheese\n1/4 cup chopped Kalamata olives\n1 teaspoon minced garlic\n2 teaspoons extra-virgin olive oil, divided\n1/2 teaspoon finely chopped fresh rosemary, or 1/8 teaspoon dried\n1/8 teaspoon freshly ground pepper\n4 portobello mushroom caps, 5 inches wide\n2 tablespoons lemon juice\n2 teaspoons reduced-sodium soy sauce",
            specification: "Step 1: Combine tomatoes, cheese, olives, garlic, 1 teaspoon oil, rosemary and pepper in a small bowl.\nStep 2: Preheat grill to medium.\nStep 3: Discard mushroom stems. Remove brown gills from the undersides of the caps using a spoon; discard gills.\nStep 4: Mix the remaining 1 teaspoon oil, lemon juice and soy sauce in a small bowl.\nStep 5: Brush the mixture over both sides of the caps.\nStep 6: Oil a grill rack. Place the caps on the rack, stem sides down, cover and grill until soft, about 5 minutes per side.\nStep 7: Remove from the grill and fill with the tomato mixture.\nStep 8: Return to the grill, cover, and cook until the cheese is melted, about 3 minutes more.",
            illness: 'Blood Pressure',
            images: [
                {
                    full: 'img/Stuffed-Portobello-Caps.jpg'
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
		{/*5*/
            name: 'Grilled Aetichokes',
            description: "2 lemons\n4 large artichokes, (3-3 1/2 pounds total)\n1 tablespoon extra-virgin olive oil\n1/4 teaspoon salt\nFreshly ground pepper, to taste",
            specification: "Step 1: Fill a Dutch oven with water; add the juice of 1 lemon.\nStep 2: Trim leaves from the top of an artichoke. Remove the outer layer(s) of leaves from the stem end and snip all remaining spiky tips from the outer leaves. Trim an inch off the bottom of the stem and use a vegetable peeler to remove the fibrous outer layer.\nStep 3: As each artichoke is prepared, drop it into the lemon water to prevent it from turning brown.\nStep 4: When all the artichokes are prepared, cover the pan and bring to a boil. Boil until the base of the stem can be pierced with a fork, 12 to 15 minutes.\nStep 5: Transfer to a cutting board and let stand until cool enough to handle, about 10 minutes.\nStep 6: Preheat grill to medium.\nStep 7: Slice the artichokes in half lengthwise. Scoop out the choke and first few inner layers in the center until the bottom is revealed.\nStep 8: Brush each half with oil and sprinkle with salt and pepper.\nStep 9: Grill the artichokes until tender and lightly charred, about 5 minutes per side.\nStep 10: Transfer to a serving platter, squeeze half a lemon over them and garnish with the remaining lemon half cut into 4 wedges. Serve warm, at room temperature or chilled",
            illness: 'Blood Pressure',
            images: [
                {
                    full: 'img/Grilled-Aetichokes.jpg'
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
		{/*6*/
            name: 'Banana-Kiwi Salad',
            description: "2 tablespoons lime juice\n1 tablespoon canola oil\n1 tablespoon minced shallot\n2 teaspoons rice vinegar\n1 teaspoon honey\n1/4 teaspoon salt\nPinch of cayenne pepper, or to taste\n4 kiwis, peeled and diced\n2 firm ripe bananas, cut diagonally into 1/2-inch-thick slices\n1/2 cup diced red bell pepper\n2 tablespoons thinly sliced fresh mint\n2 tablespoons chopped cashews, toasted",
            specification: "Step 1: Whisk lime juice, oil, shallot, vinegar, honey, salt and cayenne in a medium bowl.\nStep 2: Add kiwis, bananas, bell pepper and mint; toss to coat.\nStep 3: Serve sprinkled with cashews.",
            illness: 'Blood Pressure',
            images: [
                {
                    full: 'img/Banana-Kiwi-Salad.jpg'
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
		{/*7*/
            name: 'Apple Sauce Pancake',
            description: "1 cup all-purpose flour\n1 teaspoon baking soda\n1/8 teaspoon salt\n2 tablespoons toasted wheat germ\n1 cup nonfat buttermilk1/4 cup unsweetened applesauce\n2 teaspoons vegetable oil1 large egg, lightly beaten\nCooking spray\nSugar-free maple syrup (optional)\nFresh fruit slices (optional)",
            specification: "Step 1: Combine first 4 ingredients in a medium bowl; make a well in center of mixture.\nStep 2: Combine buttermilk and next 3 ingredients.\nStep 3: Add buttermilk mixture to dry ingredients, stirring just until dry ingredients are moistened.\nStep 4: Heat a nonstick griddle or nonstick skillet coated with cooking spray over medium heat.\nStep 5: For each pancake, pour 1/4 cup batter onto hot griddle, spreading to a 5-inch circle.\nStep 6: Cook pancakes until tops are covered with bubbles and edges look cooked; turn pancakes, and cook other side.\nStep 7: Serve with maple syrup and fresh fruit, if desired (syrup and fruit not included in analysis).\nTip: One tablespoon of sugar-free maple syrup has 8 calories and 3 grams of carbohydrate.",
            illness: 'Diabetes',
            images: [
                {
                    full: 'img/Apple-Sauce-Pancake.jpg'
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
		{/*8*/
            name: 'Happy Grapefruit with Banana',
            description: "1 (24-ounce) jar refrigerated red grapefruit sections (about 2 cups)\n1 cup sliced banana (about 1)\n1 tablespoon fresh chopped mint\n1 tablespoon honey",
            specification: "Step 1: Drain grapefruit sections, reserving 1/4 cup juice.\nStep 2: Combine grapefruit sections, juice, and remaining ingredients in a medium bowl.\nStep 3: Toss gently to coat.\nStep 4: Serve immediately, or cover and chill.",
            illness: 'Diabetes',
            images: [
                {
                    full: 'img/Grapefruit.jpg'
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
		{/*9*/
            name: 'Veggie Sausage-Cheddar Frittata',
            description: "Cooking spray\n1 green bell pepper, chopped\n1 (8-ounce) package presliced mushrooms\n4 (1.3-ounce) frozen vegetable protein sausage patties, thawed and crumbled\n1/8 teaspoon salt\n1/8 teaspoon freshly ground black pepper\n1 cup egg substitute\n1/4 cup fat-free half-and-half\n1/2 cup (2 ounces) shredded reduced-fat sharp Cheddar cheese",
            specification: "Step 1: Preheat broiler.\nStep 2: Place a 12-inch ovenproof nonstick skillet over medium-high heat. Coat pan with cooking spray. \nStep 3: Add chopped bell pepper and mushrooms; sauté 3 minutes.\nStep 4: Add sausage, salt, and pepper; reduce heat to medium-low, and cook 1 minute.\nStep 5: Combine egg substitute and half-and-half; carefully pour over sausage mixture.\nStep 6: Cover and cook 6 minutes. (Frittata will be slightly moist on top.) Sprinkle with cheese.\nStep 7: Broil 1 to 2 minutes or until cheese melts.\nStep 8: Cut into 8 wedges.",
            illness: 'Diabetes',
            images: [
                {
                    full: 'img/Veggie-Frittata.jpg'
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
		{/*10*/
            name: 'Blue Cheese & Chive Straws',
            description: "6.75 ounces all-purpose flour (about 1 1/2 cups)\n1/4 cup chilled butter, cut into small pieces\n1 cup (4 ounces) crumbled blue cheese\n1/3 cup finely chopped chives\n1/4 teaspoon salt\n1/4 teaspoon freshly ground black pepper\n1 to 2 tablespoons cold water",
            specification: "Step 1: Weigh or lightly spoon flour into dry measuring cups; level with a knife.\nStep 2: Combine flour and butter in a food processor; pulse to blend.\nStep 3: Add cheese, chives, salt, and pepper; pulse until mixture resembles coarse meal.\nStep 4: Drizzle water into flour mixture until dough forms a ball.\nStep 5: Roll dough into a 16 x 8-inch rectangle. Wrap dough in plastic wrap; refrigerate 4 hours or until firm.\nStep 6: Preheat oven to 350°.\nStep 7: Cut dough crosswise into 64 (1/4-inch-wide) slices. Place 1/2 inch apart on a baking sheet lined with parchment paper.\nStep 8: Bake at 350° for 10 minutes or until the edges are lightly browned.\nStep 9: Cool straws completely on wire racks.",
            illness: 'Keeping Figure',
            images: [
                {
                    full: 'img/Blue-Cheese-Chive-Straws.jpg'
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
		{/*11*/
            name: 'Smoked Salmon Twice-Baked Potatoes',
            description: "6 small Yukon gold or red potatoes (about 2 pounds)\n1 teaspoon olive oil\n1/2 teaspoon salt, divided\nCooking spray\n2 tablespoons fat-free milk\n1 tablespoon butter\n1/2 teaspoon black pepper\n1/2 cup (2 ounces) finely grated white cheddar cheese\n2 tablespoons finely chopped smoked salmon (1 ounce)",
            specification: "Step 1: Preheat oven to 400°.\nStep 2: Rub potatoes with oil; sprinkle with 1/4 teaspoon salt.\nStep 3: Place potatoes on a jelly-roll pan coated with cooking spray.\nStep 4: Bake at 400° for 35 minutes or until tender. Remove from oven; cool 10 minutes.\nStep 5: Cut potatoes in half crosswise; cut off a small portion of the rounded edge so the potato will stand upright.\nStep 6: Carefully scoop out about 1 teaspoon pulp from each half, leaving the shells intact.\nStep 7: Combine potato pulp, milk, butter, pepper, cheese, and remaining 1/4 teaspoon salt in a bowl.\nStep 8: Spoon about 1 heaping teaspoon potato mixture into each potato shell.\nStep 9: Arrange stuffed potatoes on a jelly-roll pan; top each with 1/2 teaspoon chopped salmon.\nStep 10: Bake at 400° for 15 minutes or until thoroughly heated.",
            illness: 'Keeping Figure',
            images: [
                {
                    full: 'img/Salmon-Baked-Potatoes.jpg'
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
		{/*12*/
            name: 'Crab & Celery Root Remoulade',
            description: "2 cups shredded peeled celery root (about 1 pound)\n1/2 cup finely chopped red onion\n8 ounces lump crabmeat, drained and shell pieces removed\n3 tablespoons mayonnaise1 tablespoon Dijon mustard\n1 tablespoon fresh lemon juice\n1 teaspoon finely chopped tarragon\n1/4 teaspoon kosher salt\n1/4 teaspoon freshly ground black pepper\n1/8 teaspoon ground red pepper\n2 tablespoons olive oil\n24 baby Boston lettuce leaves",
            specification: "Step 1: Combine first 3 ingredients in a medium bowl.\nStep 2: Combine mayonnaise and next 6 ingredients (through red pepper) in a small bowl, stirring with a whisk.\nStep 3: Gradually add oil, stirring well with a whisk.\nStep 4: Drizzle dressing over crab mixture, tossing well to combine.\nStep 5: Spoon about 1 1/2 tablespoons crab mixture in center of each lettuce leaf.",
            illness: 'Keeping Figure',
            images: [
                {
                    full: 'img/Remoulade.jpg'
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
        this.filters = { };
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