// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into cllback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
    //if (!error) return data; WRONG BECAUSE ITS NOT ASYNC
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 1: Moved the console.log into a new function
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => will print out details correctly, we will NOT see undefined!
};


// CHANGE 2: we're now passing two arguements into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);