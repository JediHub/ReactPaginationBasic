//Input = "Hi, Please reverse this string!"
//" NonAphabets will not get reverse with string and remain at its place for the string
//Expected Output  = "gnirts! siht reverse esaelP iH,"
const statement = "Hi, Please reverse this string!";

function reverseStatement(statement) {
  let i = 0,
    statementArr = statement.split(" "),
    j = statementArr.length - 1;
  while (i < j) {
    const temp = reverseStr(statementArr[i]);
    statementArr[i] = reverseStr(statementArr[j]);
    statementArr[j] = temp;
    i++;
    j--;
  }
  if (i === j) statementArr[i] = reverseStr(statementArr[i]);
  return statementArr.join(" ");
}

function reverseStr(str) {
  let strArr = str.split(""),
    i = 0,
    j = str.length - 1,
    noCharRegEx = /^[^a-zA-Z]+$/;
  while (i < j) {
    if (noCharRegEx.test(strArr[i])) {
      i++;
      continue;
    } else if (noCharRegEx.test(strArr[j])) {
      j--;
      continue;
    }
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join("");
}
console.log(reverseStatement(statement));
