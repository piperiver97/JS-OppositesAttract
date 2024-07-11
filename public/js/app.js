const timmyPetals = 1;
const sarahPetals = 4;

function isLove(petalsFlower1, petalsFlower2) {
    const oneIsEven = petalsFlower1 % 2 === 0;
    const otherIsOdd = petalsFlower2 % 2 !== 0;
    const oneIsOdd = petalsFlower1 % 2 !== 0;
    const otherIsEven = petalsFlower2 % 2 === 0;
  
    return (oneIsEven && otherIsOdd) || (oneIsOdd && otherIsEven);
  }
  
  export { isLove };
  
 
  
  console.log(`¿Timmy (${timmyPetals} pétalos) y Sarah (${sarahPetals} pétalos) están enamorados?`);
  console.log(isLove(timmyPetals, sarahPetals)); 
  