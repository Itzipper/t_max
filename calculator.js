function tut1(screenDisplay){

    disPlay.value=disPlay.value+screenDisplay;


}

function calculator(){

    if(form.disPlay.value ==" ") {alert ("Please Type the Number");}
    else{ form.disPlay.value = eval(form.disPlay.value);}

}

function clearButton(){

    document.getElementById("disPlay").value=" ";
}