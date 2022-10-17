let searchWrapper = document.querySelector(".wrapper");
let userInput = searchWrapper.querySelector("#user-input");
let searchIcon = searchWrapper.querySelector("#search-icon");
let suggestionList = searchWrapper.querySelector(".suggestion-box");
let linkTag = searchWrapper.querySelector("a");
let webLink;

userInput.onkeyup = (e) => {
  let userTyped = e.target.value;
  let matchedItem;

  searchIcon.onclick = () => {
    webLink = `https://www.google.com/search?q=${userTyped}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
    suggestionList.style.display = "none";
    userInput.value = "";
  };

  if (userTyped) {
    matchedItem = suggestions.filter((item) => {
      return item.toLowerCase().startsWith(userTyped.toLowerCase());
    });

    if (matchedItem.length) {
      let matchedList = matchedItem.map((element) => {
        return "<li>" + element + "</li>";
      });
      let limitResult = matchedList.slice(0, 5);
      suggestionList.innerHTML = limitResult.join("");
      suggestionList.style.display = "block";

      let listItems = suggestionList.querySelectorAll("li");
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener(
          "click",
          function () {
            select(this);
          },
          true
        );
        // listItems[i].addEventListener("click", () => {
        //   let selectedItem = listItems[i].textContent;
        //   userInput.value = selectedItem;
        //   suggestionList.style.display = "none";
        //   webLink = `https://www.google.com/search?q=${selectedItem}`;
        //   const a = document.createElement("a");
        //   a.target = "_blank";
        //   a.href = webLink;
        //   a.click();
        // });
      }
    }
  } else {
    suggestionList.innerHTML = "";
    suggestionList.style.display = "none";
  }
};

function select(option) {
  let selectedItem = option.textContent;
  userInput.value = selectedItem;
  suggestionList.style.display = "none";
  option.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectedItem}`;
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = webLink;
    a.click();
    suggestionList.style.display = "none";
  };
  userInput.value = "";
}
