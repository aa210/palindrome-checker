const checker = () => {
  let inputValue = document.getElementById("text-input").value;

let results = document.getElementById("result");
  
  
 let str = inputValue.toLowerCase().replace(/[^a-zA-Z0-9+]/ig,"");  /*replace all NOT alphaNum or non-spaces */
  
  
  let reverse = str.split('').reverse().join('');
  

  if(str == "") {
    return results.innerHTML = "Please input a value";
  }
  
  if(str == reverse) {
    results.innerHTML = inputValue + " is a palindrome!";
  } else {
    return results.innerHTML = inputValue + " is not a palindrome.";
  }
}



