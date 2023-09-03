function loadText()
{
/*     Methode 1
    $("#btnText").click(function(){
      $("div.test").load('myText.txt');
    });
*/
//Methode 2
    $(document).ready(function(){
      
          $.ajax({url:"mytext.txt", success:function(result){
            $("#divText").html(result);
          }});
        ;});
}


function executerRequete() { 
         
                $.getJSON("person.json", function(result){
                  $.each(result, function(i, field){                   
                    $("#divresult").append(field + " ");

                  });
                
                });              
          
} 

function readXMLFile() {
    $(document).ready(function(){
        $.ajax({
         type: "GET" ,
         url: "person.xml" ,
         dataType: "xml" ,
         success: function(xml) {
     
         //var xmlDoc = $.parseXML( xml );   <------------------this line
         //if single item
         var person = $(xml).find('person').text();  
     
         //but if it's multible items then loop
         $(xml).find('person').each(function(){
          $("#divXML").append('<li>' + $(this).text() + '</li>');  
         }); 
         }       
     });
     });
}

function addClassCp() {
    var pss = document.getElementsByTagName("p");
    for (var i = 0; i < pss.length; i++) {
     var ps = pss[ i];
     ps.setAttribute("class", "cp");
    }
    }

    function addClassCpV2() {
 $("p"). addClass("cp");
}
