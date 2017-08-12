

// ********************
// data from database



var titleData = {
    mainTitle: "Presentation page",
    paragraphs: [
        {text:"Who am I?"},
        {text:"What is this page about?"},
        {text:"Project background"}
    ]
}





var cvdata = {
    titleField:
    {
    mainTitle:{
        header:[
                {
            title:"Who is Giuseppe ?",
            description: "PhD etc"
            }
            
        ]
        }
    },
    
    infoFields:
    [
     {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     },

     {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     },
     
      {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     },
     
      {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     },
      {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     },
      {id:"education",
     description: "Education",
     content:[
        {
            id:"university",
            description: "University level",
            content:[
                {id: "KTH",
                description: "Master of Science in Chemical Engineering, Royal Inst. of Sthlm",
                period: "1996-2003"
                },
                {id: "phd",
                description: "PhD in Biophysics, Stockholm University",
                period: "2005-2009"
                }                                
            ]
            
        }
    ]
     }
     
     
     
     
     
     
]        
 
};




var infoboxTemplate =`<div class="col-lg-3 col-sm-6">
            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src="../img/profiles/test01.jpeg">
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="http://scripteden.com/">Script Eden</a>
                    </div>
                    <div class="desc">Passionate designer</div>
                    <div class="desc">Curious developer</div>
                    <div class="desc">Tech geek</div>
                </div>
                <div class="bottom">
                    <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="btn btn-danger btn-sm" rel="publisher"
                       href="https://plus.google.com/+ahmshahnuralam">
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a class="btn btn-primary btn-sm" rel="publisher"
                       href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-behance"></i>
                    </a>
                </div>
            </div>

        </div>`








$(document).ready(function(){


    //$( "#eNumberPresentation").html(output);

    
    //function addInfoDiv(curDiv, curId, title){
    //    $( "#" + curDiv )
    //    .prepend('<div id="' + curId + '" class="col-xs-6 col-lg-4"></div>')
    //    
    //    $( "#" + curId )
    //    .prepend('<h2>' + title +'</h2>')
    //    .prepend('<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>');        
    //    return;        
    //    }    
    
    
    function updateInfoDiv(curDiv, curId, title, description){
        $( "#" + curDiv )
        .prepend('<div id="' + curId + '" class="subInfoDiv"></div>')
        
        $( "#" + curId )
        .prepend('<h2>' + title +'</h2>')
        .prepend('<p>'+description+'</p>');        
        return;        
        }
        
    //function addLevel(infoObj, parent){
    //    for (var objIndex = 0; objIndex < infoObj.length; objIndex++) {
    //        console.log("infoObj[objIndex].id: ", infoObj[objIndex].id)
    //        addInfoDiv(parent, infoObj[objIndex].id, infoObj[objIndex].description);            
    //    }
    //    return infoObj[objIndex].id;
    //    }       



    function addInfoDiv(curDiv, curId, title){
        $( "#" + curDiv )
        .prepend(infoboxTemplate)
            
            
            
        //$( "#" + curDiv )
        //.prepend('<div id="' + curId + '" class="col-xs-6 col-lg-4"></div>')        
        //$( "#" + curId )
        //.prepend('<h2>' + title +'</h2>')
        //.prepend('<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>');        



        return;        
        } 



    function addLevel(infoObj, parent){
        for (var objIndex = 0; objIndex < infoObj.length; objIndex++) {
            console.log("infoObj[objIndex].id: ", infoObj[objIndex].id);
            addInfoDiv(parent, infoObj[objIndex].id, infoObj[objIndex].description);            
        }
        return infoObj[objIndex].id;
        }       

        

    function updateInfoBoxes(cvdata) {
        
        var mainParent = "infoContainer";
        var infoObj = cvdata.infoFields;
        
        
        
        var child = addLevel(infoObj, mainParent);
            




            
  
        
        
        //var infoObj = cvdata.infoFields;
        //
        //for (var objIndex = 0; objIndex < infoObj.length; objIndex++) {
        //    console.log("Cur Object: ", infoObj[objIndex].id);            
        //    addInfoDiv("infoContainer", infoObj[objIndex].id, infoObj[objIndex].description);
        //                
        //    
        //    var subInfoObj = infoObj[objIndex].content;
        //    for (var subObjIndex = 0; subObjIndex < subInfoObj.length; subObjIndex++) {
        //        updateInfoDiv(infoObj[objIndex].id, subInfoObj[subObjIndex].id, subInfoObj.id, subInfoObj[subObjIndex].description);
        //        
        //        
        //    }
            
            

            
        }


    
    //function updateInfoBoxes() {
    //    
    //    var infoObj = cvdata.infoFields;
    //    
    //    for (var objIndex = 0; objIndex < infoObj.length; objIndex++) {
    //        console.log("Cur Object: ", infoObj[objIndex].id);            
    //        addInfoDiv("infoContainer", infoObj[objIndex].id, infoObj[objIndex].description);
    //                    
    //        
    //        var subInfoObj = infoObj[objIndex].content;
    //        for (var subObjIndex = 0; subObjIndex < subInfoObj.length; subObjIndex++) {
    //            updateInfoDiv(infoObj[objIndex].id, subInfoObj[subObjIndex].id, subInfoObj.id, subInfoObj[subObjIndex].description);
    //            
    //            
    //        }
    //        
    //        
    //
    //        
    //    }
        
        
        
         //for (var key in infoObj){
         //   console.log("Key: ", key);
         //   addDiv("infoContainer", key, key)
         //   for (var key2 in infoObj[key]){
         //       console.log("Key2: ", key2);
         //       for (var item in infoObj[key][key2]){
         //           console.log("Item: ", cvdata.infoFields[key][key2][item]);
         //       }
         //       
         //   
         //   }
         //   
         //}
        
        
        //$.each(curList, function(seq, obj) {
        //    var selFlag = false;
        //    if (obj.id === selectedId) {selFlag = true};        
        //    $(curElement).append(new Option(obj.description, obj.id, selFlag, selFlag));                
        //});
	
    //}
    
    
    function updateJumbo(titleData){
    
    $( "#jumbotron").append('<h1>'+titleData.mainTitle+'</h1>');

    for (var objIndex = 0; objIndex < titleData.paragraphs.length; objIndex++) {
        $( "#jumbotron").append('<p>'+titleData.paragraphs[objIndex].text+'</p>');        
    }

    return;
    }  

    
    
    updateJumbo(titleData);
    updateInfoBoxes(cvdata);
  });




