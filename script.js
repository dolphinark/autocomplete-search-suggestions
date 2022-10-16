let userInput = document.querySelector("#user-input");
let searchIcon = document.querySelector("#search-icon");
let suggestionList = document.querySelector(".suggestion-box");

userInput.onkeyup = (e) => {
  let userTyped = e.target.value.toLowerCase();
  let matchedItem;

  if (userTyped) {
    matchedItem = suggestions.filter((item) => {
      return item.toLowerCase().startsWith(userTyped);
    });

    if (matchedItem.length > 0) {
      let matchedList = matchedItem.map((element) => {
        return "<li>" + element + "</li>";
      });
      let limitResult = matchedList.slice(0, 5);
      suggestionList.innerHTML = limitResult.join("");
      suggestionList.style.display = "block";
    }
  } else {
    suggestionList.innerHTML = "";
    suggestionList.style.display = "none";
  }
};
