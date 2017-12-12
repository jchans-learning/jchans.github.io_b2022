clear();

/* -- Define elements for 1st and 2nd row. -- */

var board_width = prompt("Board width is?> ", " ");

var board_elements = "";

while (board_elements.length < board_width){
  board_elements = board_elements + "_#";
}

var board_elements_2nd = "#" + board_elements

console.log(board_elements);
console.log(board_elements_2nd + "\n\n\n");

/* -- We make the chessboard. -- */

var line_count = 0;

while (line_count < board_width) {
  if (line_count % 2 == 0) {
    console.log(board_elements.slice(0, board_width));
  }
  else {
    console.log(board_elements_2nd.slice(0, board_width));
  }

  line_count += 1;
}
