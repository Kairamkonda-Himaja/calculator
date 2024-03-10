function ac()
{
    document.getElementById("res").value="";
}
function show(input){
    document.getElementById("res").value+=input;

}
function action()
{
var output=eval(document.getElementById("res").value);
document.getElementById("res").value=output;

}   
var output= document.getElementById("res");

function del(){
    output.value=output.value.slice(0,-1);
  
 
}
