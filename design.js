// Select color input
// Select size input

$(document).ready(function(){
	$('#submit').click(function(evt) {
		let height, width;
		width = $('#input_width').val();
		height = $('#input_height').val();
		evt.preventDefault();
		makeGrid(width, height);
	});

	// Clear grid 
  let clear = $('button');
  clear.click(function(){
    makeGrid().empty();
  });
});

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
	let pixel, grid;
	pixel = $('#pixel_canvas');
	if (pixel.children().length) {
		pixel.empty();
	}
	for(let i = 0; i < height; i++) {
		grid += "<tr>";
		for (let j = 0; j < width; j++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	pixel.html(grid);
	pixel.css("background-color", "000000");
  
// Add color to the grid
  $("td").click(function() {
		let color = $('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style');
    } else {
      $(this).attr('style','background-color:'+ color);
    }
		
	});
};






