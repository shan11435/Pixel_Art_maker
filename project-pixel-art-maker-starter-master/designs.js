// Select color input
var colorEl = document.getElementById("colorPicker");
// Select size input
var heightEl = document.getElementById("inputHeight");
var widthEl = document.getElementById("inputWidth");
// When submit is clicked, the table is created
document.querySelector('#sizePicker').addEventListener('submit', function(evt) {
  evt.preventDefault()
  const height = heightEl.value;
  const width = widthEl.value;

  makeGrid(height, width);

});
//add addEventListener to color eatch cell
function makeGrid(height, width) {
  const mainElement = document.querySelector('#pixelCanvas');
  // Your code goes here!
  const tableElement = document.createElement('table');
  //creates the row depending the number on the height text box
  for (let i = 0; i < height; i++) {

    const trElement = document.createElement('tr');
    //creates the column depending on the number on the width text box
    for (let x = 0; x < width; x++) {
      trElement.appendChild(document.createElement('td'));
    }
    //after both tr and td elements are finished, add it to the table element that was created
    tableElement.appendChild(trElement);
    //this causes each cell of the table to chance color once clicked
    trElement.addEventListener('click', function(evt){
      const target = evt.target;
      //if you click on a cell change the background color based on the color wheel
      if (evt.target.nodeName === 'TD') {
        //this gets the rgb values
        var color = colorEl.value;

        target.style.backgroundColor = color; /*changes background color
                                              to rgb values*/
      }
    });
  }
  //it adds the finished table to the index.html whose id = pixelcanvas
  mainElement.innerHTML = '';
  mainElement.appendChild(tableElement);


}
