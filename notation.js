const purson = {
      name: 'Motu Vai',
      profession: 'traffic police',
      age: 45,
      height: 5.8,
      25: 'summer',
      'son-name': 'sunny',
      address: 'Rajshahi'
}

// 1. Dot notation
const prof1 = purson.profession;

// 2. Bracket notation
const prof2 = purson['profession'];
const pName = 'profession';
const prof3 = purson[pName];
console.log(prof1, prof3);

const season = purson[25];
console.log(season)

const son = purson['son-name'];
console.log(son)