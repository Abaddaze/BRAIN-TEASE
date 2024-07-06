// creating an array and passing the number, questions, options, and answers
let animalsQuestions = [
  {
    numb: 1,
    question: "What is the largest land animal?",
    answer: "African Elephant",
    options: [
      "Blue Whale",
      "African Elephant",
      "Giraffe",
      "White Rhinoceros"
    ]
  },
  {
    numb: 2,
    question: "Which bird is known for its impressive mimicry skills?",
    answer: "Lyrebird",
    options: [
      "Parrot",
      "Crow",
      "Lyrebird",
      "Mockingbird"
    ]
  },
  {
    numb: 3,
    question: "What is the fastest land animal?",
    answer: "Cheetah",
    options: [
      "Lion",
      "Cheetah",
      "Gazelle",
      "Horse"
    ]
  },
  {
    numb: 4,
    question: "Which mammal is known to have the most powerful bite?",
    answer: "Hippopotamus",
    options: [
      "Lion",
      "Tiger",
      "Hippopotamus",
      "Grizzly Bear"
    ]
  },
  {
    numb: 5,
    question: "What is the largest species of shark?",
    answer: "Whale Shark",
    options: [
      "Great White Shark",
      "Hammerhead Shark",
      "Whale Shark",
      "Tiger Shark"
    ]
  },
  {
    numb: 6,
    question: "Which animal is known as the king of the jungle?",
    answer: "Lion",
    options: [
      "Lion",
      "Tiger",
      "Elephant",
      "Leopard"
    ]
  },
  {
    numb: 7,
    question: "What is the only mammal capable of true flight?",
    answer: "Bat",
    options: [
      "Flying Squirrel",
      "Bat",
      "Bird",
      "Sugar Glider"
    ]
  },
  {
    numb: 8,
    question: "Which animal has the longest lifespan?",
    answer: "Bowhead Whale",
    options: [
      "Galapagos Tortoise",
      "African Elephant",
      "Bowhead Whale",
      "Macaw"
    ]
  },
  {
    numb: 9,
    question: "What is the smallest bird in the world?",
    answer: "Bee Hummingbird",
    options: [
      "Sparrow",
      "Bee Hummingbird",
      "Canary",
      "Goldfinch"
    ]
  },
  {
    numb: 10,
    question: "Which animal is known for having a third eyelid to protect its eyes underwater?",
    answer: "Crocodile",
    options: [
      "Frog",
      "Turtle",
      "Crocodile",
      "Duck"
    ]
  },
  {
    numb: 11,
    question: "Which animal is known for its black and white stripes?",
    answer: "Zebra",
    options: [
      "Tiger",
      "Zebra",
      "Skunk",
      "Panda"
    ]
  },
  {
    numb: 12,
    question: "Which fish is known for its ability to inflate itself?",
    answer: "Pufferfish",
    options: [
      "Goldfish",
      "Pufferfish",
      "Betta Fish",
      "Catfish"
    ]
  },
  {
    numb: 13,
    question: "What is the largest species of penguin?",
    answer: "Emperor Penguin",
    options: [
      "King Penguin",
      "Adelie Penguin",
      "Emperor Penguin",
      "Chinstrap Penguin"
    ]
  },
  {
    numb: 14,
    question: "Which animal is known for building dams?",
    answer: "Beaver",
    options: [
      "Otter",
      "Beaver",
      "Muskrat",
      "Capybara"
    ]
  },
  {
    numb: 15,
    question: "Which animal is the primary source of mohair?",
    answer: "Angora Goat",
    options: [
      "Sheep",
      "Alpaca",
      "Angora Rabbit",
      "Angora Goat"
    ]
  },
  {
    numb: 16,
    question: "Which animal is known for its long neck?",
    answer: "Giraffe",
    options: [
      "Giraffe",
      "Ostrich",
      "Flamingo",
      "Alpaca"
    ]
  },
  {
    numb: 17,
    question: "Which mammal is known to lay eggs?",
    answer: "Platypus",
    options: [
      "Kangaroo",
      "Platypus",
      "Koala",
      "Wombat"
    ]
  },
  {
    numb: 18,
    question: "What is the largest species of ray?",
    answer: "Manta Ray",
    options: [
      "Stingray",
      "Manta Ray",
      "Eagle Ray",
      "Devil Ray"
    ]
  },
  {
    numb: 19,
    question: "Which animal has a blue tongue?",
    answer: "Blue-tongued Skink",
    options: [
      "Giraffe",
      "Blue Jay",
      "Blue-tongued Skink",
      "Komodo Dragon"
    ]
  },
  {
    numb: 20,
    question: "Which animal is known for its ability to change color?",
    answer: "Chameleon",
    options: [
      "Octopus",
      "Chameleon",
      "Squid",
      "Cuttlefish"
    ]
  },
  {
    numb: 21,
    question: "What is the only marsupial native to North America?",
    answer: "Opossum",
    options: [
      "Kangaroo",
      "Koala",
      "Opossum",
      "Wombat"
    ]
  },
  {
    numb: 22,
    question: "Which animal is known for its ability to regrow lost limbs?",
    answer: "Starfish",
    options: [
      "Octopus",
      "Starfish",
      "Lizard",
      "Crab"
    ]
  },
  {
    numb: 23,
    question: "Which mammal has the most extended gestation period?",
    answer: "Elephant",
    options: [
      "Blue Whale",
      "Giraffe",
      "Elephant",
      "Hippopotamus"
    ]
  },
  {
    numb: 24,
    question: "Which animal is known for living in groups called pods?",
    answer: "Dolphin",
    options: [
      "Shark",
      "Dolphin",
      "Seal",
      "Walrus"
    ]
  },
  {
    numb: 25,
    question: "Which animal has the highest blood pressure?",
    answer: "Giraffe",
    options: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Lion"
    ]
  },
  {
    numb: 26,
    question: "Which animal is known for its distinctive black eye patches?",
    answer: "Giant Panda",
    options: [
      "Raccoon",
      "Giant Panda",
      "Skunk",
      "Badger"
    ]
  },
  {
    numb: 27,
    question: "Which reptile is known for its ability to run on water?",
    answer: "Basilisk Lizard",
    options: [
      "Gecko",
      "Chameleon",
      "Komodo Dragon",
      "Basilisk Lizard"
    ]
  },
  {
    numb: 28,
    question: "Which bird is known for its spectacular courtship dance?",
    answer: "Bird of Paradise",
    options: [
      "Peacock",
      "Bird of Paradise",
      "Swan",
      "Flamingo"
    ]
  },
  {
    numb: 29,
    question: "Which animal has the most extended migration of any mammal?",
    answer: "Gray Whale",
    options: [
      "Caribou",
      "Monarch Butterfly",
      "Gray Whale",
      "Arctic Tern"
    ]
  },
  {
    numb: 30,
    question: "Which animal is known for its impressive memory?",
    answer: "Elephant",
    options: [
      "Dolphin",
      "Crow",
      "Elephant",
      "Chimpanzee"
    ]
  },
  {
    numb: 31,
    question: "Which animal is the largest member of the cat family?",
    answer: "Tiger",
    options: [
      "Lion",
      "Leopard",
      "Cheetah",
      "Tiger"
    ]
  },
  {
    numb: 32,
    question: "Which marine animal is known for having the largest brain?",
    answer: "Sperm Whale",
    options: [
      "Blue Whale",
      "Dolphin",
      "Sperm Whale",
      "Orca"
    ]
  },
  {
    numb: 33,
    question: "Which bird is the fastest in the world?",
    answer: "Peregrine Falcon",
    options: [
      "Golden Eagle",
      "Peregrine Falcon",
      "Hawk",
      "Osprey"
    ]
  },
  {
    numb: 34,
    question: "What is the most venomous snake in the world?",
    answer: "Inland Taipan",
    options: [
      "King Cobra",
      "Black Mamba",
      "Inland Taipan",
      "Rattlesnake"
    ]
  },
  {
    numb: 35,
    question: "Which animal is known for its ability to mimic human speech?",
    answer: "Parrot",
    options: [
      "Parrot",
      "Crow",
      "Mockingbird",
      "Mynah"
    ]
  },
  {
    numb: 36,
    question: "Which animal can sleep standing up?",
    answer: "Horse",
    options: [
      "Dog",
      "Cat",
      "Horse",
      "Elephant"
    ]
  },
  {
    numb: 37,
    question: "Which fish is known for its deadly toxin?",
    answer: "Fugu (Pufferfish)",
    options: [
      "Lionfish",
      "Fugu (Pufferfish)",
      "Stonefish",
      "Box Jellyfish"
    ]
  },
  {
    numb: 38,
    question: "Which animal has the longest tail?",
    answer: "Giraffe",
    options: [
      "Kangaroo",
      "Giraffe",
      "Lion",
      "Monkey"
    ]
  },
  {
    numb: 39,
    question: "Which animal is known as the ship of the desert?",
    answer: "Camel",
    options: [
      "Elephant",
      "Horse",
      "Camel",
      "Llama"
    ]
  },
  {
    numb: 40,
    question: "Which animal is the largest in the deer family?",
    answer: "Moose",
    options: [
      "Elk",
      "Caribou",
      "Moose",
      "Red Deer"
    ]
  },
  {
    numb: 41,
    question: "Which animal has a tongue that can be as long as its body?",
    answer: "Chameleon",
    options: [
      "Frog",
      "Anteater",
      "Chameleon",
      "Giraffe"
    ]
  },
  {
    numb: 42,
    question: "Which mammal is known for its unique black and white coloration?",
    answer: "Zebra",
    options: [
      "Panda",
      "Skunk",
      "Zebra",
      "Badger"
    ]
  },
  {
    numb: 43,
    question: "Which animal is known for its ability to play dead?",
    answer: "Opossum",
    options: [
      "Chameleon",
      "Opossum",
      "Fox",
      "Rabbit"
    ]
  },
  {
    numb: 44,
    question: "Which bird is known for its beautiful singing?",
    answer: "Nightingale",
    options: [
      "Canary",
      "Robin",
      "Nightingale",
      "Lark"
    ]
  },
  {
    numb: 45,
    question: "Which animal is the largest carnivore on land?",
    answer: "Polar Bear",
    options: [
      "Grizzly Bear",
      "Polar Bear",
      "Lion",
      "Tiger"
    ]
  },
  {
    numb: 46,
    question: "Which animal is known for its distinctive laughing sound?",
    answer: "Hyena",
    options: [
      "Monkey",
      "Hyena",
      "Parrot",
      "Seal"
    ]
  },
  {
    numb: 47,
    question: "Which animal is known for its incredible speed in water?",
    answer: "Sailfish",
    options: [
      "Dolphin",
      "Shark",
      "Sailfish",
      "Tuna"
    ]
  },
  {
    numb: 48,
    question: "Which animal has the most extended wingspan?",
    answer: "Wandering Albatross",
    options: [
      "Bald Eagle",
      "Wandering Albatross",
      "Condor",
      "Golden Eagle"
    ]
  },
  {
    numb: 49,
    question: "Which animal is known for its burrowing habits?",
    answer: "Mole",
    options: [
      "Rabbit",
      "Mole",
      "Badger",
      "Gopher"
    ]
  },
  {
    numb: 50,
    question: "Which animal has the ability to echolocate?",
    answer: "Bat",
    options: [
      "Dolphin",
      "Bat",
      "Owl",
      "Whale"
    ]
  },
  {
    numb: 51,
    question: "Which animal is known for its impressive tusks?",
    answer: "Elephant",
    options: [
      "Narwhal",
      "Walrus",
      "Elephant",
      "Boar"
    ]
  },
  {
    numb: 52,
    question: "Which animal has the thickest fur?",
    answer: "Sea Otter",
    options: [
      "Polar Bear",
      "Seal",
      "Sea Otter",
      "Beaver"
    ]
  },
  {
    numb: 53,
    question: "Which bird is known for its ability to hover in mid-air?",
    answer: "Hummingbird",
    options: [
      "Eagle",
      "Kestrel",
      "Hummingbird",
      "Hawk"
    ]
  },
  {
    numb: 54,
    question: "Which animal is the largest rodent?",
    answer: "Capybara",
    options: [
      "Beaver",
      "Capybara",
      "Guinea Pig",
      "Porcupine"
    ]
  },
  {
    numb: 55,
    question: "Which animal has the most extended neck?",
    answer: "Giraffe",
    options: [
      "Giraffe",
      "Ostrich",
      "Flamingo",
      "Alpaca"
    ]
  },
  {
    numb: 56,
    question: "Which marine animal is known for its intelligence and problem-solving skills?",
    answer: "Octopus",
    options: [
      "Dolphin",
      "Seal",
      "Octopus",
      "Whale"
    ]
  },
  {
    numb: 57,
    question: "Which animal is known for its powerful build and immense strength?",
    answer: "Grizzly Bear",
    options: [
      "Lion",
      "Gorilla",
      "Grizzly Bear",
      "Elephant"
    ]
  },
  {
    numb: 58,
    question: "Which animal is known as the tallest mammal?",
    answer: "Giraffe",
    options: [
      "Elephant",
      "Giraffe",
      "Camel",
      "Horse"
    ]
  },
  {
    numb: 59,
    question: "Which animal is known for its distinct black and white coloring and is native to China?",
    answer: "Giant Panda",
    options: [
      "Giant Panda",
      "Zebra",
      "Skunk",
      "Orca"
    ]
  },
  {
    numb: 60,
    question: "Which animal is known for being the symbol of wisdom in Greek mythology?",
    answer: "Owl",
    options: [
      "Eagle",
      "Owl",
      "Dove",
      "Raven"
    ]
  },
  {
    numb: 61,
    question: "Which animal is the largest primate?",
    answer: "Gorilla",
    options: [
      "Chimpanzee",
      "Gorilla",
      "Orangutan",
      "Baboon"
    ]
  },
  {
    numb: 62,
    question: "Which animal is known for its incredible jumping ability?",
    answer: "Kangaroo",
    options: [
      "Frog",
      "Rabbit",
      "Kangaroo",
      "Grasshopper"
    ]
  },
  {
    numb: 63,
    question: "Which bird is known for its elaborate nests built in colonies?",
    answer: "Weaver Bird",
    options: [
      "Sparrow",
      "Robin",
      "Weaver Bird",
      "Osprey"
    ]
  },
  {
    numb: 64,
    question: "Which animal is known for its bioluminescence?",
    answer: "Firefly",
    options: [
      "Jellyfish",
      "Firefly",
      "Anglerfish",
      "Glowworm"
    ]
  },
  {
    numb: 65,
    question: "Which animal has a prehensile tail used for grasping?",
    answer: "Monkey",
    options: [
      "Monkey",
      "Raccoon",
      "Opossum",
      "Koala"
    ]
  },
  {
    numb: 66,
    question: "Which animal is known for its distinctive spiral horn?",
    answer: "Narwhal",
    options: [
      "Unicorn",
      "Antelope",
      "Narwhal",
      "Ram"
    ]
  },
  {
    numb: 67,
    question: "Which animal is the primary predator of penguins?",
    answer: "Leopard Seal",
    options: [
      "Orca",
      "Great White Shark",
      "Leopard Seal",
      "Sea Lion"
    ]
  },
  {
    numb: 68,
    question: "Which animal is known for its large, fan-shaped tail used in courtship displays?",
    answer: "Peacock",
    options: [
      "Turkey",
      "Peacock",
      "Lyrebird",
      "Partridge"
    ]
  },
  {
    numb: 69,
    question: "Which marine animal is known for its deadly sting?",
    answer: "Box Jellyfish",
    options: [
      "Stingray",
      "Box Jellyfish",
      "Sea Urchin",
      "Lionfish"
    ]
  },
  {
    numb: 70,
    question: "Which animal is known for its unique black and white striped face?",
    answer: "Badger",
    options: [
      "Raccoon",
      "Badger",
      "Skunk",
      "Panda"
    ]
  },
  {
    numb: 71,
    question: "Which animal is known for its impressive antlers?",
    answer: "Moose",
    options: [
      "Deer",
      "Elk",
      "Moose",
      "Caribou"
    ]
  },
  {
    numb: 72,
    question: "Which animal is known for its distinctive pouch for carrying its young?",
    answer: "Kangaroo",
    options: [
      "Koala",
      "Kangaroo",
      "Opossum",
      "Wombat"
    ]
  },
  {
    numb: 73,
    question: "Which animal is the largest living reptile?",
    answer: "Saltwater Crocodile",
    options: [
      "Komodo Dragon",
      "Saltwater Crocodile",
      "Alligator",
      "Green Anaconda"
    ]
  },
  {
    numb: 74,
    question: "Which bird is known for its ability to imitate sounds, including human speech?",
    answer: "Parrot",
    options: [
      "Crow",
      "Magpie",
      "Parrot",
      "Mynah"
    ]
  },
  {
    numb: 75,
    question: "Which animal is known for its incredibly thick fur to keep warm in Arctic temperatures?",
    answer: "Polar Bear",
    options: [
      "Seal",
      "Penguin",
      "Polar Bear",
      "Arctic Fox"
    ]
  },
  {
    numb: 76,
    question: "Which animal is known for its impressive size and strength, often referred to as the king of beasts?",
    answer: "Lion",
    options: [
      "Elephant",
      "Tiger",
      "Lion",
      "Bear"
    ]
  },
  {
    numb: 77,
    question: "Which marine animal is known for its complex social structures and vocalizations?",
    answer: "Dolphin",
    options: [
      "Whale",
      "Seal",
      "Dolphin",
      "Shark"
    ]
  },
  {
    numb: 78,
    question: "Which animal is known for its distinctive black mask and ringed tail?",
    answer: "Raccoon",
    options: [
      "Badger",
      "Raccoon",
      "Skunk",
      "Lemur"
    ]
  },
  {
    numb: 79,
    question: "Which animal is known for its slow movements and hanging upside down in trees?",
    answer: "Sloth",
    options: [
      "Koala",
      "Sloth",
      "Opossum",
      "Monkey"
    ]
  },
  {
    numb: 80,
    question: "Which bird is known for its large, colorful beak?",
    answer: "Toucan",
    options: [
      "Parrot",
      "Hornbill",
      "Toucan",
      "Pelican"
    ]
  },
  {
    numb: 81,
    question: "Which animal is known for its long, sharp quills used for defense?",
    answer: "Porcupine",
    options: [
      "Hedgehog",
      "Porcupine",
      "Armadillo",
      "Pangolin"
    ]
  },
  {
    numb: 82,
    question: "Which animal is known for its ability to mimic the appearance of other animals or objects?",
    answer: "Mimic Octopus",
    options: [
      "Chameleon",
      "Stick Insect",
      "Mimic Octopus",
      "Leafy Sea Dragon"
    ]
  },
  {
    numb: 83,
    question: "Which animal is known for its unique shell, which it can retreat into for protection?",
    answer: "Turtle",
    options: [
      "Tortoise",
      "Snail",
      "Turtle",
      "Armadillo"
    ]
  },
  {
    numb: 84,
    question: "Which bird is known for its ability to sleep while flying?",
    answer: "Albatross",
    options: [
      "Swift",
      "Eagle",
      "Albatross",
      "Swallow"
    ]
  },
  {
    numb: 85,
    question: "Which animal is known for its distinctive mane and roar?",
    answer: "Lion",
    options: [
      "Tiger",
      "Lion",
      "Leopard",
      "Jaguar"
    ]
  },
  {
    numb: 86,
    question: "Which animal is known for its impressive tusks made of ivory?",
    answer: "Elephant",
    options: [
      "Narwhal",
      "Walrus",
      "Elephant",
      "Boar"
    ]
  },
  {
    numb: 87,
    question: "Which animal is known for its bioluminescent capabilities in the deep ocean?",
    answer: "Anglerfish",
    options: [
      "Jellyfish",
      "Anglerfish",
      "Squid",
      "Firefly"
    ]
  },
  {
    numb: 88,
    question: "Which animal is known for its ability to hibernate during the winter?",
    answer: "Bear",
    options: [
      "Squirrel",
      "Bear",
      "Hedgehog",
      "Bat"
    ]
  },
  {
    numb: 89,
    question: "Which bird is known for its impressive courtship displays, often involving elaborate dances and songs?",
    answer: "Bird of Paradise",
    options: [
      "Peacock",
      "Bird of Paradise",
      "Flamingo",
      "Swan"
    ]
  },
  {
    numb: 90,
    question: "Which animal is known for its distinctive pink color and standing on one leg?",
    answer: "Flamingo",
    options: [
      "Crane",
      "Flamingo",
      "Stork",
      "Pelican"
    ]
  },
  {
    numb: 91,
    question: "Which animal is known for its powerful build and immense strength, often referred to as the king of beasts?",
    answer: "Lion",
    options: [
      "Tiger",
      "Lion",
      "Bear",
      "Elephant"
    ]
  },
  {
    numb: 92,
    question: "Which animal is the largest mammal in the world?",
    answer: "Blue Whale",
    options: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Hippopotamus"
    ]
  },
  {
    numb: 93,
    question: "Which animal is known for its long, curved horn?",
    answer: "Narwhal",
    options: [
      "Unicorn",
      "Narwhal",
      "Antelope",
      "Ram"
    ]
  },
  {
    numb: 94,
    question: "Which bird is known for its ability to hover in mid-air?",
    answer: "Hummingbird",
    options: [
      "Eagle",
      "Kestrel",
      "Hummingbird",
      "Hawk"
    ]
  },
  {
    numb: 95,
    question: "Which animal is known for its impressive antlers?",
    answer: "Moose",
    options: [
      "Deer",
      "Elk",
      "Moose",
      "Caribou"
    ]
  },
  {
    numb: 96,
    question: "Which animal is known for its unique pouch for carrying its young?",
    answer: "Kangaroo",
    options: [
      "Koala",
      "Kangaroo",
      "Opossum",
      "Wombat"
    ]
  },
  {
    numb: 97,
    question: "Which animal is the largest living reptile?",
    answer: "Saltwater Crocodile",
    options: [
      "Komodo Dragon",
      "Saltwater Crocodile",
      "Alligator",
      "Green Anaconda"
    ]
  },
  {
    numb: 98,
    question: "Which bird is known for its ability to imitate sounds, including human speech?",
    answer: "Parrot",
    options: [
      "Crow",
      "Magpie",
      "Parrot",
      "Mynah"
    ]
  },
  {
    numb: 99,
    question: "Which animal is known for its incredibly thick fur to keep warm in Arctic temperatures?",
    answer: "Polar Bear",
    options: [
      "Seal",
      "Penguin",
      "Polar Bear",
      "Arctic Fox"
    ]
  },
  {
    numb: 100,
    question: "Which animal is the tallest mammal?",
    answer: "Giraffe",
    options: [
      "Elephant",
      "Giraffe",
      "Camel",
      "Horse"
    ]
  }

];