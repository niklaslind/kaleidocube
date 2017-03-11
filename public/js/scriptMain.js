
var activityList = { 0:'',1:'cyklade',2:'sprang',3:'gick',4:'åt',5:'sov'};
var timeList = {0:'Just nu',1:'7 a.m.',2:'9 a.m.',3:'11 a.m.',4:'1 p.m.',5:'3 p.m.',6:'5 p.m.',7:'7 p.m.',8:'9 p.m.',9:'9 p.m.'};
var eNumbers ={};
var dataSet;

$(document).ready(function(){

    
    getData(function(dataSet){
        calculateEnumberMain(dataSet);
        updateEventList();
            });

                        
     function calculateEnumberMain(dataSet){
                
        for (var key in activityList) {
            var tempValueArray = extractValues(dataSet, key);
            var curEnum = calcEnum(tempValueArray);
            eNumbers[key] = curEnum;
            updateEnumber();
        }
        return;    
    } 


    function calcEnum(curArray){
        
        var maxLen = curArray.length;
        for (var m = curArray.length; m > 0; m--){
            if (curArray[maxLen - m] >= m){
                return m;                
            }
        //return '?';
        }
        return '?';
    
    }
    


    function extractValues(dataSet, i)
    {
        var valueArray = [];
        dataSet.forEach(function(item) {
            item = JSON.parse(item);
            if (item.activityCode == i){
                valueArray.push(item.dataValue);    
            }
        });
        return valueArray;
    }
    
  
  	function clearForm() {
        $( "#selectActivity").val('0');
        $( "#inputValue").val("");       
        $( "#timePoint").val('0');
	}
  
    function getData(callback) {
  		$.post('/getDataAws',
		{
            'data':'test'
		},
		function(resp){
            dataSet = resp.data;
            callback(resp.data);
		});	
    }
  
  
    
  $( "#clearForm" ).click(function() {      	    
    clearForm();
  });
  
  
  
  $( "#sendPost" ).click(function() {
    
    if ($( "#selectActivity").val() === '0' || $( "#inputValue").val() === '') {
        alert("Var snäll och fyll i alla värden");
        return;
    }
    
    var now = new Date();
    
    var sendPostObject = {
        'activityCode': $( "#selectActivity").val(),
        'activityDescription': activityList[$( "#selectActivity").val()],
       
        'dataValue': $( "#inputValue").val(),
        'dataUnit': $( "#inputUnit").text(),        
        
        'timepointCode': $( "#timePoint").val(),
        'timepointDescription': timeList[$( "#timePoint").val()],
        'timestamp' : now
        
    };
    console.log("sendPostObject: ", sendPostObject)
    sendPost(sendPostObject,
             function() {
                getData(
                        function(output){
                            //console.log("==========\n Data fetched: ", output)
                            //updateEnumber();
                            updateEventList();
                            calculateEnumberMain(dataSet);

                        });
                clearForm();
             });
  });
  
  
    
  	function sendPost(arg1, callback) {
		$.post('/addDataAws',
		{
            'data':arg1
		},
		function(curUserInfo){
			callback(curUserInfo);
		});	

	}
  
  
    function updateEventList(){
        var tmpString = "";
        dataSet.forEach(function(item) {
            item = JSON.parse(item);            
            tmpString += "<p> Jag " + item.activityDescription + " " + item.dataValue + " " + item.dataUnit + " klockan " + item.timepointDescription + ", lagrat " + item.timestamp + "</p>";
            //console.log(tmpString);
                    
        });
        $( "#dataCollection").html(tmpString);            
        
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
          output  = "mil";
          break;
      case "2":
          output  = "km";
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
    
  function updateEnumber() {
    
    var selVal = $(".selectNumber").val();
      var output = "";
  
      switch (selVal) {
      case "0":
          output  = eNumbers[0];
          break;
      case "1":
          output  = eNumbers[1];
          break; 
      case "2":
          output  = eNumbers[2];
          break; 
      case "3":
          output  = eNumbers[3];
          break; 
      case "4":
          output  = eNumbers[4];
          break; 
      default: 
          output = eNumbers[5];
      }
    
    $( "#eNumberPresentation").html(output);
            
  }
  
  
  
    // Update E number
    $( ".selectNumber" ).change(function() {
        updateEnumber();
    });
    
  });




