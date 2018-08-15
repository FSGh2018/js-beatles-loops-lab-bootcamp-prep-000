// add solution here

var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo'
  ]

var instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
  ]

var musicianLoveinstrument = {
  // initially empty
}

function theBeatlesPlay(musicians, instruments) {
  var newArray = {}
  
  for (var index = 0; index > musicians.arrayLength - 1; index++) {
    newArray[index] = `${musicians[index]} plays ${instruments[index]}`
    return newArray
  }
}
/*
The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar". This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.
 */