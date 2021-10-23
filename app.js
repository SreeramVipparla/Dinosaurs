function DinosaurInfo(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

const Anklyosaurus = new DinosaurInfo(
  "Anklyosaurus",
  10500,
  55,
  "herbivore",
  "North America",
  "Late Cretaceous",
  [
    "The name Ankylosaurus means 'fused lizard'",
    "Anklyosaurus survived for approximately 135 million years",
    "Ankylosaurus lived at the end of the Cretaceous Period (around 66 million years ago)",
    "Ankylosaurus were herbivores ",
  ],
  "anklyosaurus.png"
);

const Brachiosaurus = new DinosaurInfo(
  "Brachiosaurus",
  70000,
  372,
  "herbivore",
  "North America",
  "Late Jurasic",
  [
    "The meaning of their name is 'arm reptiles'",
    "An asteroid was named 9954 Brachiosaurus in 1991",

    "They weighed about 40 tons (40,000kg)",
    "Their length was around 26 metres (85 feet)",
  ],
  "brachiosaurus.png"
);

const Elasmosaurus = new DinosaurInfo(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "Their length was 14 metres (46 feet)long - bigger than a T. Rex",
    "Elasmosaurus was a marine reptile first discovered in Kansas",
    "The meaning of its name is 'Thin Plated Lizard'",

    "They were slow swimmers",
  ],
  "elasmosaurus.png"
);

const Pigeon = new DinosaurInfo(
  "Pigeon(Descendant of a group of dinosaurs)",
  0.5,
  9,
  "herbivore",
  "World Wide",
  "Holocene",
  [
    "pigeon is a descendant of the group of dinosaurs",
    "Pigeons are highly sociable animals",

    "Pigeons are incredibly complex and intelligent animals",
    "Pigeons can fly at the speed of 50 to 60 miles per hour.",
  ],
  "pigeon.png"
);

const Pteranodon = new DinosaurInfo(
  "Pteranodon",
  44,
  20,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "Actually a flying reptile, the Pteranodon is not a dinosaur",
    "Pteranodon's name means “wings and no teeth”",
    "The name Pteranodon means: “Toothless Wing”",
    "Pteranodons had no teeth, but rather a sharp beak like some modern day birds",
  ],
  "pteranodon.png"
);

const Triceratops = new DinosaurInfo(
  "Triceratops",
  13000,
  114,
  "herbivore",
  "North America",
  "Late Cretaceous",
  [
    "First discovered in 1889 by Othniel Charles Marsh",
    "The meaning of Triceratops is 'three-horned face'",
    "Triceratops had nose horns they used for defence",
    "The name ‘Triceratops’ comes from the Greek language, with ‘tri’ meaning three and ‘keratops’ meaning horned face",
  ],
  "triceratops.png"
);

const Trex = new DinosaurInfo(
  "Tyrannosaurus Rex(T-Rex)",
  11905,
  144,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "The largest known skull measures in at 5 feet long",
    "Tyrannosaurus Rex means 'Tyrant Lizard'",
    "These fearsome prehistoric creatures were carnivores, feasting on the flesh of the unfortunate animals they caught",
    " The T. Rex was super smart too, boasting a brain twice as big as those of the other giant carnivores",
  ],
  "tyrannosaurus rex.png"
);

const Stegosaurus = new DinosaurInfo(
  "Stegosaurus",
  13000,
  114,
  "herbivore",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  [
    "Stegosaurus Was Closely Related to Ankylosaurus",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines",
    "The meaning of Stegosaurus is 'roofed lizard'",
    "Stegosaurus Had a Brain the Size of a Walnut",
  ],
  "stegosaurus.png"
);

DinosaurInfo.prototype.compareWeight = function (Weight_Human) {
  if (this.weight / Weight_Human === Infinity) {
    this.fact[1] = "Error!Please Enter a Valid Weight ";
  } else if (this.weight / Weight_Human < 0) {
    this.fact[1] =
      "Error!Please Enter a positive integer as your Weight to avail the correct comaprision ";
  } else {
    this.fact[1] = `The dinosaur is ${
      this.weight / Weight_Human
    } x times your weight`;
  }
};
DinosaurInfo.prototype.compareHeight = function (Height_Human) {
  if (this.height / Height_Human === Infinity) {
    this.fact[2] = "Error!Please Enter a Valid Height ";
  } else if (this.height / Height_Human < 0) {
    this.fact[2] =
      "Error!Please Enter a positive integer as your Height to avail the correct comaprision ";
  } else {
    this.fact[2] = `The dinosaur is ${
      this.height / Height_Human
    } x times taller than you`;
  }
};

DinosaurInfo.prototype.compareDiet = function (Diet_Human) {
  if (Diet_Human.toLowerCase() !== this.diet.toLowerCase()) {
    this.fact[3] = `This dinosaur unlike you was a  ${this.diet}`;
  } else {
    this.fact[3] = `Yay!Both you and this dinosaur are   ${this.diet}s`;
  }
};

const DinosaurInfoArray = [];
const Human = HumanInformation();

DinosaurInfoArray.push(
  Anklyosaurus,
  Brachiosaurus,
  Elasmosaurus,
  Pigeon,
  Human,
  Pteranodon,
  Stegosaurus,
  Trex,
  Triceratops
);

function HumanInformation() {
  const HumanInfo = (function () {
    let Name = document.getElementById("name").value;
    function HumanName() {
      return Name;
    }
    let Diet = document.getElementById("diet").value;
    function HumanDiet() {
      return Diet;
    }
    let Weight = document.getElementById("weight").value;
    function HumanWeight() {
      return Weight;
    }

    let Feet = document.getElementById("feet").value;
    let Inches = document.getElementById("inches").value;
    function HumanHeight() {
      return Feet * 12 + Inches;
    }

    let Image = "human.png";

    function HumanImage() {
      return Image;
    }
    return {
      name: HumanName(),
      height: HumanHeight(),
      weight: HumanWeight(),
      diet: HumanDiet(),
      image: HumanImage(),
    };
  })();
  return HumanInfo;
}
function DOMTiles(Name_Human) {
  const GridTile = document.getElementById("grid");
  DinosaurInfoArray.map((Dinosaur_Data) => {
    const DinosaurFacts = Dinosaur_Data.fact;
    let VarFact = "";

    const tile = document.createElement("div");
    tile.className = "grid-item";
    GridTile.appendChild(tile);
    const title = document.createElement("h2");
    title.className = "h2";
    tile.appendChild(title);

    const fact = document.createElement("p");
    fact.className = "p";

    if (Dinosaur_Data.species) {
      title.innerHTML = Dinosaur_Data.species;
    } else {
      title.innerHTML = Name_Human;
    }
    if (DinosaurFacts) {
      VarFact = DinosaurFacts[Math.floor(DinosaurFacts.length * Math.random())];
      fact.innerHTML = VarFact;
      tile.appendChild(fact);
    }

    const image = document.createElement("img");
    image.src = `./images/${Dinosaur_Data.image}`;
    image.className = "img";
    tile.appendChild(image);
  });
}

function FormRemoval() {
  const SubmisionForm = document.getElementById("dino-compare");
  SubmisionForm.innerHTML = "";
}

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const HumanProperties = HumanInformation();
  DinosaurInfoArray.map((Dinosaur_Data) => {
    if (Dinosaur_Data.species) {
      Dinosaur_Data.compareDiet(HumanProperties.diet);

      Dinosaur_Data.compareHeight(HumanProperties.height);

      Dinosaur_Data.compareWeight(HumanProperties.weight);
    }
  });
  FormRemoval();
  DOMTiles(HumanProperties.name);
});
