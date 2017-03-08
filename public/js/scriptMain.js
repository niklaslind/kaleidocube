
var activityList = {
    0:'',1:'sprang',2:'cyklade',3:'gick',4:'åt',5:'sov'
};

var timeList = {
    0:'Just nu',1:'7 a.m.',2:'9 a.m.',3:'11 a.m.',4:'1 p.m.',5:'3 p.m.',6:'5 p.m.',7:'7 p.m.',8:'9 p.m.',9:'9 p.m.'
};


$(document).ready(function(){
  
  // ToDo: Merge functions
  
  	function clearForm() {
        $( "#selectActivity").val('0');
        $( "#inputValue").val("");       
        $( "#timePoint").val('0');
	}
  
  $( "#clearForm" ).click(function() {
    clearForm();
  });
  
  
  $( "#sendPost" ).click(function() {
    
    if ($( "#selectActivity").val() == '0' || $( "#inputValue").val() == '') {
        alert("Var snäll och fyll i alla värden");
        return
    }
    
    var now = new Date();
    
    var sendPostObject = {
        'activityCode': $( "#selectActivity").val(),
        'activityDescription': activityList[$( "#selectActivity").val()],
       
        'dataValue': $( "#inputValue").val(),
        
        'timepointCode': $( "#timePoint").val(),
        'timepointDescription': timeList[$( "#timePoint").val()],
        'timestamp' : now
        
    }
    console.log(sendPostObject);
    
    
    sendPost(sendPostObject,
             function() {
              
                clearForm();
                
             })
    
    
    //console.log(
    //   "activity: ",  $( "#selectActivity").val(), '#:',  activityList[$( "#selectActivity").val()],
    //    "Value: ", $( "#inputValue").val(),     
    //    "Time: ", $( "#timePoint").val()
    //)
    
    //var dataPost = {activity:, model:"500", color:"white"};
    
    
    
    
  
  });
  
  
  
    
  	function sendPost(arg1, callback) {
		$.post('/addDataAws',
		{
            'data':arg1
		},
		function(curUserInfo,status){
			callback(curUserInfo);
		});	

	}
  
  
  
  
  
      // Update form unit
    $( ".selectActivity" ).change(function() {

      var selVal = $(".selectActivity").val();
      var output = "";

        switch (selVal) {
      case "0":
          output  = "";
          break;
      case "1":
          output  = "km";
          break;
      case "2":
          output  = "mil";
          break; 
      case "3":
          output  = "km";
          break; 
      case "4":
          output  = "portioner";
          break; 
      case "5":
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




