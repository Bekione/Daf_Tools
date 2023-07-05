const lists = [
    {
      "Meat": "Beef",
      "group O": "+",
      "group A": "X",
      "group B": "O",
      "group AB": "X"
    },
    {
      "Meat": "Lamb",
      "group O": "+",
      "group A": "X",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Meat": "Mutton",
      "group O": "+",
      "group A": "X",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Meat": "Veal",
      "group O": "+",
      "group A": "X",
      "group B": "O",
      "group AB": "X"
    },
    {
      "Meat": "Pork",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Meat": "Chicken",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Meat": "Duck",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Meat": "Quail",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Meat": "Rabbit",
      "group O": "O",
      "group A": "X",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Meat": "Turkey",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Meat": "Ham",
      "group O": "X",
      "group A": "X",
      "group B": "X"
    },
    {
      "Meat": "Bacon",
      "group O": "X",
      "group A": "X",
      "group B": "X"
    },
    {
      "Meat": "Goose",
      "group O": "X",
      "group A": "X",
      "group B": "X"
    },{
      "Fish": "Cod",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Fish": "Mackerell",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Fish": "Snapper",
      "group O": "+",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Fish": "Salmon",
      "group O": "+",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Fish": "Sardines",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Fish": "Swordfish",
      "group O": "+",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Fish": "Abalone",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Fish": "Tuna",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Fish": "Red Snapper",
      "group O": "+",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Fish": "Carp",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Fish": "Anchovy(Ikan Bilis)",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Fish": "Clams",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Fish": "Crab",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Fish": "Crayfish",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Fish": "Eels",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Fish": "Frogs's legs",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Product": "Eggs",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Product": "Soya milk",
      "group O": "O",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Product": "Milk - whole",
      "group O": "X",
      "group A": "O",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Product": "Milk - semi skimmed, skimmed",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Product": "Goat's milk",
      "group O": "X",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Product": "Yogurt",
      "group O": "X",
      "group A": "O",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Product": "Butter",
      "group O": "O",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Product": "Cottage Cheese",
      "group O": "X",
      "group A": "X",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Product": "Cheddar Cheese",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Product": "Mozarella Cheese",
      "group O": "+",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Product": "Ice cream",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Oil": "Olive oil",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Oil": "Cod liver oil",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Oil": "Sesame oil",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Oil": "Corn oil",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Oil": "Groundnut oil",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Oil": "Safflower oil",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
      
    },
    {
      "Oil": "Sunflower oil",
      "group O": "unknown",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Oil": "Rapseed (Canola) oil",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Nut": "Almonds",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Nut": "Chestnuts",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Nut": "Hazelnuts",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Nut": "Macadamia nuts",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Nut": "Sesame seeds",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
      
    },
    {
      "Nut": "Sunflower seeds",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Nut": "Cashew nuts",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Nut": "Peanuts",
      "group O": "X",
      "group A": "+",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Nut": "Peanut butter",
      "group O": "X",
      "group A": "+",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Nut": "Pumpkin seeds",
      "group O": "+",
      "group A": "+",
      "group B": "unknown",
      "group AB": "X"
    },
    {
      "Nut": "Brazil nuts",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Nut": "Walnuts",
      "group O": "+",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Bean": "Black-eyed beans",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "X"
    },
    {
      "Bean": "Black beans",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "X"
    },
    {
      "Bean": "Chick-peas",
      "group O": "O",
      "group A": "+",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Bean": "Green peas",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Bean": "Kidney beans",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Bean": "Soya beans",
      "group O": "X",
      "group A": "unknown",
      "group B": "unknown",
      "group AB": "+"
    },
    {
      "Bean": "Red soya beans/Red brans",
      "group O": "unknown",
      "group A": "+",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Bean": "Sugar-snap brans & peas",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Cereal": "Barley",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Cereal": "Oat bran",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Cereal": "Oatmeal",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
            },
    {
      "Cereal": "Rice bran",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Cereal": "Rice-puffed",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Cereal": "Cornflakes",
      "group O": "X",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Cereal": "Wheat bran",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Cereal": "Wheatgerm",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Cereal": "Buckwheat",
      "group O": "O",
      "group A": "+",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Bread": "Sprouted-wheat Essence bread",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Bread": "Brown rice bread",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Bread": "Gluten-free bread",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Bread": "Multi-grain bread",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Bread": "Wholewheat bread",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Bread": "Corn muffins",
      "group O": "X",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Bread": "Hi-protein bread",
      "group O": "unknown",
      "group A": "unknown",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Grain": "Barley flour",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Grain": "Rice flour",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Grain": "Rice vermicelli",
      "group O": "O",
      "group A": "unknown",
      "group B": "unknown",
      "group AB": "unknown"
    },
    {
      "Grain": "Rice - basmati, brown white",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Grain": "Oat flour",
      "group O": "X",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Grain": "Plain flour",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Grain": "Self-raising flour",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Grain": "Wholewheat flour",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Grain": "Tapioca flour",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },{
      "Vegetable": "Broccoli",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Vegetable": "Avocado",
      "group O": "X",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Brussels sprouts",
      "group O": "unknown",
      "group A": "unknown",
      "group B": "unknown",
      "group AB": "+"
    },
    {
      "Vegetable": "Broad beans",
      "group O": "unknown",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Cabbage - Chinese, red, white",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Vegetable": "Cauliflower",
      "group O": "X",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Vegetable": "Garlic",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Vegetable": "Leeks",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Vegetable": "Okra - ladies' finger",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Vegetable": "Onions",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Vegetable": "Parsley",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "Vegetable": "Peppers, red",
      "group O": "+",
      "group A": "+",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Peppers, green and yellow",
      "group O": "O",
      "group A": "+",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Pumpkin",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "X"
    },
    {
      "Vegetable": "Seaweeds",
      "group O": "+",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Spinach",
      "group O": "+",
      "group A": "+",
      "group B": "+"
    },{
      "Vegetable": "Sweet potatoes",
      "group O": "+",
      "group A": "+",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Vegetable": "Potatoes - red, white",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Vegetable": "Tapioca",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "unknown"
    },
    {
      "Vegetable": "Asparagus",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Bamboo shoots",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Carrots",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Vegetable": "Celery",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Vegetable": "Chilli peppers",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Coriander",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Cucumber",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Vegetable": "Ginger",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "Vegetable": "Lettuce",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Mushrooms - cultivated",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Vegetable": "Tofu",
      "group O": "O",
      "group A": "+",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Vegetable": "Tomatoes",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "O"
    },
    {
      "Vegetable": "Yams",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "+"
    },
    {
      "Vegetable": "Sweetcorn",
      "group O": "X",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Mung bean sprouts",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "Vegetable": "Bak choy",
      "group O": "unknown",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "Vegetable": "Beat Roots",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "+"
    },
    {
      "Vegetable": "Water chestnuts",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    
        {
          "Fruit": "Apples",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Apricots",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Banana",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Blackberries",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Blueberries",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Cantaloupe",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Cherries",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Dates",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Figs",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
          "Fruit": "Grapefruit",
          "group O": "+",
          "group A": "+",
          "group B": "+",
          "group AB": "+"
        },
        {
  "Vegetable": "Yams",
  "group O": "O",
  "group A": "X",
  "group B": "X",
  "group AB": "+"
  },
  {
  "Vegetable": "Sweetcorn",
  "group O": "X",
  "group A": "O",
  "group B": "X",
  "group AB": "X"
  },
  {
  "Vegetable": "Mung bean sprouts",
  "group O": "O",
  "group A": "O",
  "group B": "X",
  "group AB": "X"
  },
  {
  "Vegetable": "Bak choy",
  "group O": "unknown",
  "group A": "O",
  "group B": "O",
  "group AB": "O"
  },
  {
  "Vegetable": "Beat Roots",
  "group O": "O",
  "group A": "O",
  "group B": "O",
  "group AB": "+"
  },
  {
  "Vegetable": "Water chestnuts",
  "group O": "O",
  "group A": "O",
  "group B": "O",
  "group AB": "O"
  },
  
  {
    "Fruit": "Apples",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Apricots",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Banana",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Blackberries",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Blueberries",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Cantaloupe",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Cherries",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Dates",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fruit": "Figs",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
    
  },
  {
    "Fruit": "Grapefruit",
    "group O": "+",
    "group A": "+",
    "group B": "+"
    
  },      
    {
      "Fruit": "Grapes",
      "group O": "+",
      "group A": "+",
      "group B": "+"
  
    },
    {
      "fruit": "Bananas",
      "group O": "O",
      "group A": "X",
      "group B": "+",
      "groupA B": "X"
    },
    {
      "fruit": "Cranberries",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "fruit": "Grapes (black, green, purple, red)",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "fruit": "Papaya",
      "group O": "O",
      "group A": "X",
      "group B": "+",
      "group AB": "O"
    },
    {
      "fruit": "Pineapple",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "O"
    },
    {
      "fruit": "Plums (green, purple, red)",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "fruit": "Raisins",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Apples",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Apricots",
      "group O": "O",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Blackcurrants",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Blueberries",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Cherries",
      "group O": "O",
      "group A": "+",
      "group B": "O",
      "group AB": "+"
    },
    {
      "fruit": "Dates/Red dates",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Figs (dried, fresh)",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "fruit": "Grapefruit",
      "group O": "O",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Guava",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "X"
    },
    {
      "fruit": "Kiwi",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Lemons",
      "group O": "O",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Limes",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Lychees",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Mangoes",
      "group O": "O",
      "group A": "X",
      "group B": "O",
      "group AB": "X"
    },
    {
      "fruit": "Melons - honeydew, cantaloupe",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Watermelons",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Nectarines",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Peaches",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Oranges/Tangerines",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Pears",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Prunes",
      "group O": "+",
      "group A": "+",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Raspberries",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Strawberries",
      "group O": "X",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "fruit": "Coconuts",
      "group O": "X",
      "group A": "X",
      "group B": "X",
      "group AB": "X"
    },
    {
      "fruit": "Persimmons",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "fruit": "Star fruit",
      "group O": "O",
      "group A": "O",
      "group B": "X",
      "group AB": "X"
    },
    {
      "juice": "Cabbage juice",
      "group O": "X",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Cranberry juice",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Grape juice",
      "group O": "O",
      "group A": "O",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Papaya juice",
      "group O": "O",
      "group A": "X",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Pineapple juice",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Apple cider",
      "group O": "X",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "juice": "Apple juice",
      "group O": "X",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "juice": "Apricot juice",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Carrot juice",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Celery juice",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Cucumber juice",
      "group O": "O",
      "group A": "O",
      "group B": "O",
      "group AB": "O"
    },
    {
      "juice": "Grapefruit juice",
      "group O": "O",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Orange juice",
      "group O": "X",
      "group A": "X",
      "group B": "O",
      "group AB": "X"
    },
    {
      "juice": "Prune juice",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Water with lemon juice",
      "group O": "+",
      "group A": "+",
      "group B": "+",
      "group AB": "+"
    },
    {
      "juice": "Tomato juice",
      "group O": "O",
      "group A": "X",
      "group B": "X",
      "group AB": "unknown"
    }
]

export default lists