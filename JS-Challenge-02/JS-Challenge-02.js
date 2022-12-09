//Exercise 01
//Write a JS program to the smallest number in the array.
//Sample: let arr1 = [12, 6, 10, 2, 45, 100]
//Output: 2

function minOfNumArray(numArray) {
  return numArray.reduce(
    (storedValue, currentValue) => Math.min(storedValue, currentValue),
    Infinity
  );
}

let arr1 = [12, 6, 10, 2, 45, 100];
console.log(minOfNumArray(arr1));

//Excersise 02
//Write a JS program to find the least frequent item of an array.
//Sample: let arr1=[3, 'c', 'c', 'a', 2, 3, 'c', 3,'c', 2, 4, 9, 9];
//Output: 4

function lessFrequent(array) {
  const count = array.reduce((counter, arrayElement) => {
    if (!counter[arrayElement]) {
      counter[arrayElement] = 1;
    } else {
      counter[arrayElement]++;
    }
    return counter;
  }, {});
  const countKeys = Object.keys(count);
  const countValues = Object.values(count);

  const minIndex = countValues.findIndex((element) => element == Math.min(...countValues));

  return countKeys[minIndex];
}

let arr2 = [3, "c", "c", "a", 2, 3, "c", 3, "c", 2, 4, 9, 9];
console.log(lessFrequent(arr2));

//Excersise 03
//Write a JS program to remove duplicates in an array.
//Sample: let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4,2, 'd', 'd']
//Output: [7, 1, ‘f’, 4, 2]
function removeDuplicates(array) {
  return array.reduce((newArray, arrayElement) => {
    if (!newArray.includes(arrayElement)) return [...newArray, arrayElement];
    return newArray;
  }, []);
}

let arr3 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];
console.log(removeDuplicates(arr3));

//Excersise 04
//Write a JS program to concat arrays.
//Sample: let data = [["The", "little", "horse"],
//["Plane", "over", "the", "ocean"],
//["Chocolate", "ice", "cream", "is", "awesome"],
//["this", "is", "a", "long", "sentence"]]
//Output: ['The little horse',
//'Plane over the ocean',
//‘Chocolate ice cream is awesome',
//'this is a long sentence']

function concatArrays(array) {
  return array.map((array) => array.join(" "));
}

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

console.log(concatArrays(data));
