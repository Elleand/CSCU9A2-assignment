var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
var ThisrtColour = "blue";
var count =0 ;

var individualCount = 0;

var TShirtPrice = 4;
var tricka = [];


//draw T-shirt on initial load of the page
redraw();

function printCart() {
        alert(
        printDetails()
        )
}




function printDetails() {
    text = "";
    for (var i = 0; i < tricka.length; i++) {
        text += "Cart item:" + (i+1) + ", text on T-shirt:" + tricka[i].text + "and colour is: " +tricka[i].color + " count: "+ tricka[i].count +"\n";
    }
    text += "\n  total price is: " + count;

    return  text;
}

function addToCart() {

    addMoney(TShirtPrice);
    tricka.push({color:ThisrtColour, text:document.getElementById("textButton").value, count:document.getElementById("individualCount").value  });

}

function addMoney( price) {

    count +=price * document.getElementById("individualCount").value;
    document.getElementById("count").textContent = count;

}
//set colour of the T-shirt
function changeColor(colour) {
    ThisrtColour = colour;
    redraw();
}


//call every time something is happening to draw new things
function redraw() {

    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    drawShirt(ThisrtColour);
    setText();


}


/**
 * set text, get the content from the input field
 */
function setText() {
    var text = document.getElementById("textButton").value;
    console.log(text);
    context.beginPath();
    context.fillStyle = "black";
    context.font = "30px Times";
    context.fillText(text, 50, 100)
}

/**
 * @param colour colour of the t-shirt
 */
function drawShirt(colour) {

    context.globalCompositeOperation = 'source-over';
    context.beginPath();
    context.fillStyle = colour;
    context.fillRect(20, 20, 150, 150);
    context.stroke();
}