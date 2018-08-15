// add solution here

const musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo"
  ]

const instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
  ]

var musicianPlaysInstrument = {
  
}

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  
  for (var counter = 0; counter > musicians.arrayLength - 1; counter++) {
    newArray.push(`${musicians[counter]} plays ${instruments[counter]}`)
    // newArray[counter] =`${musicians[counter]} plays ${instruments[counter]}`
  }
  
  return newArray
}
/*
The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar". This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.
 */