var index=0;
var catalogue=[];
var longueur=0;
function executerRequete(){  
    if(catalogue.length===0){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function()
        {
            if (xhr.readyState===4 &&(xhr.status===200|| xhr.status===0 ))
            {
               
                catalogue=JSON.parse(xhr.responseText);
                document.getElementById("country").innerHTML=catalogue.countries_capitals[0].country;
                document.getElementById("capital").innerHTML=catalogue.countries_capitals[0].capital;


            }
        }
        xhr.open("GET","capitals.json",true)
        xhr.send();
    }
}
function readNext(){
    longueur=catalogue.countries_capitals.length;
    if(index<longueur-1){
        index++;
    }
    else index=0;
    document.getElementById("country").innerHTML=catalogue.countries_capitals[index].country;
    document.getElementById("capital").innerHTML=catalogue.countries_capitals[index].capital;
}
function readPrevious(){
    longueur=catalogue.countries_capitals.length;
    if(index>0){ 
        index--;
    }
    else index=longueur-1;
    document.getElementById("country").innerHTML=catalogue.countries_capitals[index].country;
    document.getElementById("capital").innerHTML=catalogue.countries_capitals[index].capital;
}