let number = 4;
let name = 'texte';

liElements = document.querySelectorAll('li');

liElements.forEach((element) => {
  element.innerText += 1;
  console.log(element);
});
