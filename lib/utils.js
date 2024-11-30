export default function invertCategory(category) {
  const invertedCategory = [
    "S1",
    "S2",
    "N1",
    "N2",
    "N3",
    "1S",
    "2S",
    "1N",
    "2N",
    "3N",
  ];
  if (invertedCategory.includes(category)) {
    return reverseString(category);
  } else {
    return category;
  }
}

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
