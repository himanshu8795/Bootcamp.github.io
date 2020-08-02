const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  console.log( player.address.city );
  
  const { name, club } = player;
  
  console.log(`${name} plays for ${club}`);


  const student = {
    name1: "Kyle",
    age1: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name1, age1 } = student;

console.log(name1);
console.log(age1);