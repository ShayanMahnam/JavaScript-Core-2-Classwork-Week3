/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
  const pElements = document.querySelectorAll("p")
  console.log(pElements)
  const findSiteHeader = document.querySelector(".site-header")
  console.log(findSiteHeader)
  const findJumbo = document.querySelector("#jumbotronText")
  console.log(findJumbo)
  const findPInside = document.querySelector(".primary-content").querySelector("p")
  console.log(findPInside)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const addAlert = document.querySelector("#alertBtn");

addAlert.addEventListener("click", () =>
  alert("Thanks for visiting Bikes for Refugees!")
);

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const ColorBtn = document.querySelector("#bgrChangeBtn");
const Body = document.querySelector("body");
ColorBtn.addEventListener(
  "click",
  () =>
    //Body.style.backgroundColor = "red")
    (Body.classList = "chngColor")
);

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const allLinks = document.querySelectorAll("a")
const largerBtn = document.querySelector("#largerLinksBtn");


largerBtn.addEventListener("click", () => {for(let i = 0; i < allLinks.length; i++){
  allLinks[i].style.fontSize = "25px"}});

  // const largerLinksElement = document.querySelector("#largerLinksBtn");
  // largerLinksElement.addEventListener("click", () => {
  //   const aTagList = document.querySelectorAll("a");
  //   aTagList.forEach((tag) => {
  //     let val = Number(tag.style.fontSize.replace("em", ""));
  //     val += 0.5;

  //     tag.style.fontSize = `${val}em`;
  //   });
  // });
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addSomeTextBtn = document.querySelector("#addArticleBtn");




addSomeTextBtn.addEventListener("click", () =>{
  let userText = document.querySelector("#addArticleInput");
  let newParagraph = document.createElement("p"); 
  let myParagraph = document.querySelector("#addArticle");
  myParagraph.appendChild(newParagraph);
  newParagraph.innerText = userText.value
  userText.value = ""
}
);
