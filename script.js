/*JS EXERCISES
21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete the email property from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string from the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
DOM EXERCISES
31) Get the element with an id of "container" from the page
32) Get every <td> element from the page
33) Use a loop for printing the text inside of every <td> element in the page
34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add a class of "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a unordered list
40) Write a function to empty a list
EXTRA EXERCISES
41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
42) Create a button that will hide every image on the page when clicked
43) Create a button that will hide or show the table on the page when clicked
44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
45) Delete the last letter from the heading each time the user clicks on it
46) Change the background color of a <td> if the user clicks on it
47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
48) Add automatically a pink border to a cell when the mouse hovers it
49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
50) Write a function to remove the last table from the page
*/

//21
let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

//22
let myDetails = {
  name: "Martin",
  surname: "Kotas",
  email: "kotasmartin1997@gmail.com",
};

//23
delete myDetails.email;
console.log(myDetails);

//24
strArray = [
  "string1",
  "string2",
  "string3",
  "string4",
  "string5",
  "string6",
  "string7",
  "string8",
  "string9",
  "string10",
];

//25
for (let i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

//26
let numbersArr = [];
let maxNum = 100;
for (let i = 0; i < maxNum; i++) {
  let randomNumbers = Math.floor(Math.random() * maxNum);
  numbersArr.push(randomNumbers);
}
console.log(numbersArr);

//27
function getMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}
console.log(getMaxAndMin(numbersArr));

//28
let arrayOfArrays = [];

for (let i = 0; i < 10; i++) {
  let innerArray = [];
  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.floor(Math.random() * 10));
  }
  arrayOfArrays.push(innerArray);
}
console.log(arrayOfArrays);

//29
function longestArr(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else return arr2;
}
console.log(longestArr([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]));

//30
function higherSum(arr3, arr4) {
  let sum1 = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum1 = sum1 + arr3[i];
  }
  let sum2 = 0;
  for (let i = 0; i < arr4.length; i++) {
    sum2 = sum2 + arr4[i];
  }

  if (sum1 > sum2) {
    console.log("First array = higher sum", sum1);
  } else console.log("Second array = higher sum", sum2);
}

higherSum([1, 2, 3], [4, 5, 6, 7]);

//31 F this one
let containerNode = document.getElementById("container");

//32 TODO remove all <td>

//33
function tdElements() {
  let tdNode = document.getElementsByTagName("td");
  for (let i = 0; i < tdNode.length; i++) {
    tdNode[i].innerText = "EX33";
  }
}

//34
function changeHeading() {
  let headingNode = document.querySelector("h1");
  headingNode.innerText = "New heading for EX34";
}

//35
let addRow = function () {
  let table = document.querySelector("table");
  let row = document.createElement("tr");
  table.appendChild(row);
};

//36
function addClass() {
  let rowNode = document.getElementsByTagName("tr");
  for (let i = 0; i < rowNode.length; i++) {
    rowNode[i].classList.add("test");
  }
}

//37 Write a function to add a red background to every link in the page

//38
window.onload = function () {
  console.log("Page should be loaded");
};

//39
function addNewItems() {
  let ulListNode = document.getElementsByTagName("ul");
  let newul = document.createElement("li");
  newul.innerText = "New item EX39";
  for (let i = 0; i < ulListNode.length; i++) {
    ulListNode[i].appendChild(newul);
  }
}

//40
function emptyList() {
  let ulListNode = document.getElementsByTagName("ul");
  for (let i = 0; i < ulListNode.length; i++) {
    ulListNode[i].classList.add("visibility");
  }
}

//41 Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

//42
function hideImages() {
  let imagesNode = document.getElementsByTagName("img");
  for (let i = 0; i < imagesNode.length; i++) {
    imagesNode[i].classList.add("visibility");
  }
}

//43
function showOrHideTable() {
  let tableNode = document.getElementById("table");
  tableNode.classList.toggle("visibility");
}

//44 Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)

//45 Delete the last letter from the heading each time the user clicks on it

//46 Change the background color of a <td> if the user clicks on it

//47
function deleteRandomTd() {
  let tdNode = document.getElementsByTagName("td");
  let currentIndex = tdNode.length;
  let randomIndex = Math.floor(Math.random() * currentIndex);
  tdNode[randomIndex].remove();
}

//48 Add automatically a pink border to a cell when the mouse hovers it

//49 Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page

//50
function removeLastTable() {
  let tableNode = document.getElementsByClassName("table");
  let lastTable = tableNode[tableNode.length - 1];
  lastTable.remove();
}
