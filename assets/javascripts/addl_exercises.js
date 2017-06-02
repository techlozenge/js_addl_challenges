(function(){

  // NOTE: The Number.isNaN() method returns true if the value is of type Number otherwise it returns false

  function sum(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      return a + b;
    } else {
      console.log("One of your values, " + a + " or " + b + "is invalid");
      return false;
    }
  }

  function avg(a, b, c) {
    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number') {
      return (a + b + c) / 3;
    } else {
      console.log("One of your values, " + a + ", " + b + ", or " + c + " is invalid");
      return false;
    }
  }

  function greaterThan(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      if (a > b) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("One of your values, " + a + " or " + b + "is invalid");
      return false;
    }
  }

  function secondHighest(nmbrArray) {
    let highest = Math.max.apply(null, nmbrArray);   // first find the highest value of the array
    // NOTE: The first parameter, you pass to apply of any function, will be the this inside that function.
    // But, max doesn't depend on the current context so we can use null.
    nmbrArray.splice(nmbrArray.indexOf(highest), 1);  // delete the highest value from our array
    return Math.max.apply(null, nmbrArray); // now return the next or second highest number
  }

  function containsVowel(str) {
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowel.length; i++) {
      for (let x = 0; x < str.length; x++) {
        if (str[x] == vowel[i]) {
          console.log("The vowel " + vowel[i] + " was found at position " + x);
          return true
        } // end if
      } // end inner for
    } // end outter for
    return false;
  }

  // this function does work (as does longestWord) but it has a small bug where 'undefined' pops up and i don't know why!
    //   Come now good day
    // [ 'Come', 'now', 'good', 'day' ]
    // omeCay ownay oodgay ayday
    // undefined   <=== I don't see where the hell this is coming from!
  function pigLatin(str) {
    console.log(str);
    let wordArray = str.split(" ");    // split my string into an array of words
    console.log(wordArray);
    for (let i = 0; i < wordArray.length; i++) {
        let plSuffix = wordArray[i].charAt(0) + "ay";
        wordArray[i] = wordArray[i].slice(1, wordArray[i].lrngth) + plSuffix;
    }
    let newStr = wordArray.toString();
    for (let z = 0; z < newStr.length; z++) {
      newStr = newStr.replace(",", " ");
    }
    console.log(newStr);
  }

  function longestWord(str) {
    console.log(str);
    let wordArray = str.split(" ");    // split my string into an array of words
    console.log(wordArray);
    let lastVal = 0;
    let lastWord = " ";
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > lastVal) {
        lastVal = wordArray[i].length;
        lastWord = wordArray[i];
      }
    }
    console.log("Longest Word is '" + lastWord + "' at " + lastVal + " characters");
  }

  let a = 10;
  let b = 11;
  let c = 12;

  let nmbrArray = [8, 3, 5, 1, 9, 10];

  //         012345678901234567890123456
  let str1 = "Ds ths strng cntan ny vwls?";
  let str2 = "Ds ths strng cntn ny vwls?";
  let str3 = "Come now good day";
  let str4 = "Evil prospers while good men do nothing.";

  console.log("Sum of " + a + " and " + b + " is " + " " + sum(a, b));
  console.log(" ");
  console.log("The average of " + a + ", " + b + ", and " + c + " is " + avg(a, b, c));
  console.log(" ");
  console.log("Is " + a + " greater than " + b + "? " + greaterThan(a, c));
  console.log(" ");
  console.log("The second highest number of [8, 3, 5, 1, 9, 10] is " + secondHighest(nmbrArray));
  console.log(" ");
  console.log (str1 + " " + containsVowel(str1));
  console.log (str2 + " " + containsVowel(str2));
  console.log(" ");
  console.log(pigLatin(str3));
  console.log(" ");
  console.log(longestWord(str4));
  console.log(" ");

})()
