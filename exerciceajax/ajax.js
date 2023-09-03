var xhr= new XMLHttpRequest();
xhr.onreadystatechange=function() {
    if(xhr.readyState===4){ //readstate si en change letat et 4 pour si on a terminer
        if(xhr.status===200){
            document.getElementById("txt").innerHTML=xhr.responseText;

        }else {
            console.log('errorCode:'+xhr.statut);
            console.log('errorMessage:'+xhr.statusText);
        }
    } 
} 
xhr.open('GET','ajax.txt');
xhr.send();
 