
  var lastCharIsSymbol = false;
  var firstNumb = true;
  var onlyOneSymbol = false;


function addNum( num )
{
    if( lastCharIsSymbol )
    document.getElementById("screen").innerHTML += " " + num;

else
    document.getElementById("screen").innerHTML += num;


    lastCharIsSymbol = false;

}

function reset()
{
  document.getElementById("screen").innerHTML = ""
  onlyOneSymbol = false;
  lastCharIsSymbol = false;
}

function deleteLastChar()
{
  var text = document.getElementById("screen").innerHTML;

  text = text.slice(0, text.length - 1)

  text = text.replace(/\s/g, "");


  document.getElementById("screen").innerHTML = text
}

function plus()
{
  if( !onlyOneSymbol )
  {
  if( !lastCharIsSymbol && document.getElementById("screen").innerHTML != "" )
  document.getElementById("screen").innerHTML += " " + "+";


  onlyOneSymbol = true;
  lastCharIsSymbol = true;
}
else
  checkAnswer( '+' );


}

function QawsYasar()
{
document.getElementById("screen").innerHTML += " " + "(";
}

function QawsYamen()
{
document.getElementById("screen").innerHTML += " " + ")";

}

function minus()
{
    if( !onlyOneSymbol )
    {
  if( !lastCharIsSymbol && document.getElementById("screen").innerHTML != "" )
  {
  document.getElementById("screen").innerHTML += " " + "-";

}
  onlyOneSymbol = true;
  lastCharIsSymbol = true;
}
else
  checkAnswer( '-' );
}

function darb()
{
    if( !onlyOneSymbol )
    {
  if( !lastCharIsSymbol && document.getElementById("screen").innerHTML != "" )
  {
  document.getElementById("screen").innerHTML += " " + "*";

}
  onlyOneSymbol = true;
  lastCharIsSymbol = true;
}
else
  checkAnswer( '*' );
}

  function qsme()
  {
    if( !onlyOneSymbol )
{
    if( !lastCharIsSymbol && document.getElementById("screen").innerHTML != "" )
    {
    document.getElementById("screen").innerHTML += " " + "/";

  }

  onlyOneSymbol = true;
    lastCharIsSymbol = true;
  }
  else
    checkAnswer( '/' );
}

  function tarbe3()
  {
    if( !onlyOneSymbol )
    {
    if( !lastCharIsSymbol && document.getElementById("screen").innerHTML != "" )
    {
      document.getElementById("screen").innerHTML += " " + "^";

  }

    onlyOneSymbol = true;
    lastCharIsSymbol = true;
  }
  else
    checkAnswer( '^' );


}

function checkAnswer( index ) {


  if( document.getElementById("screen").innerHTML.indexOf('^') == -1 )

  if( !document.getElementById("screen").innerHTML.match(/[a-z]/i) )
  var result = eval( document.getElementById("screen").innerHTML );
  else
  {
    var arr = document.getElementById("screen").innerHTML.split('^');

    if( !isNaN(arr[0]) )
    var result = Math.pow(arr[0],arr[1]);




  }
if( !isNaN(result) )
{
  if( index != null)
  document.getElementById("screen").innerHTML = result + " " + index + " ";

  else
  {
  document.getElementById("screen").innerHTML = result;
  onlyOneSymbol = false;
}


  lastCharIsSymbol = false;
}

}
