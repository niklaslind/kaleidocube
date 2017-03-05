

$(document).ready(function(){
  
  // ToDo: Merge functions
  
      // Update form unit
    $( ".selectActivity" ).change(function() {

      var selVal = $(".selectActivity").val();
      var output = "";

        switch (selVal) {
      case "0":
          output  = "km";
          break;
      case "1":
          output  = "mil";
          break; 
      case "2":
          output  = "km";
          break; 
      case "3":
          output  = "portioner";
          break; 
      case "4":
          output  = "timmar";
          break; 
      default: 
          output = "";
      }

      $( "#inputUnit").html(output);
    
    });
    
    


    // Update E number
    $( ".selectNumber" ).change(function() {
      var selVal = $(".selectNumber").val();
      var output = "";
  
      switch (selVal) {
      case "0":
          output  = "22";
          break;
      case "1":
          output  = "12";
          break; 
      case "2":
          output  = "4";
          break; 
      case "3":
          output  = "5";
          break; 
      case "4":
          output  = "8";
          break; 
      default: 
          output = "0";
      }
    
    //$( "#eNumberPresentation").attr('innerHTML', output);        
    $( "#eNumberPresentation").html(output);        
          
  
    });
  
  
  
  });




