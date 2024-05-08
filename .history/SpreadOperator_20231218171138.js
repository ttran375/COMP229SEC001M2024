const peaks = ["Tallac",  "Ralston",  "Rose"];
const canyons = ["Ward",  "Blackwood"];
const tahoe = [...peaks,  ...canyons];
console.log(tahoe.join(", "));  // Tallac, Ralston, Rose, Ward, Blackwood
 
 

//All of the items from peaks and canyons are pushed into a new array called tahoe.

//Let’s take a look at how the spread operator can help us deal with a problem. Using the peaks array from the previous sample, let’s imagine that we wanted to grab the last item from the array rather than the first. We could use the Array.reverse method to reverse the array in combination with array destructuring:
