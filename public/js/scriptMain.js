
// ********************
// data from database

var imagePath = "../img/profiles/";

var cvdata = {
    titleField:
    {        
        mainTitle: "Some sort of presentation page",
        paragraphs: [
            {text:"Who am I and what are my interests?"},
            {text:"What is this page about?"}
        ]    
    },
    
    infoFields:
    [
     {id:"dataVisualization",
     title:"Data Visualization",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     },
     {id:"dataSimulations",
     title:"Data Simulations",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     },     
     {id:"lifeScience",
     title:"Lifescience",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     },     
     {id:"workingExperience",
     title:"Working experience",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     },      
     {id:"education",
     title:"Education",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     },
     {id:"blogg",
     title:"Blogg",
     shortDescription:
     [
        {text: "Something"},
        {text: "Something else"}
      ],
     imageLarge: imagePath+"test02.jpeg",
     imageSmall: imagePath+"test01.jpeg"
     
     }     
]        
 
};
  
  



var infoboxTemplate =`<div class="card hovercard">
                <div class="cardheader"></div>
                <div class="avatar"></div>
                <div class="info">
                    <div class="title"></div>                
                </div>
                <div class="bottom">
                    <a class="btn btn-primary btn-twitter btn-sm" href=""><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-danger btn-sm" rel="publisher"<i class="fa fa-google-plus"></i></a>
                    <a class="btn btn-primary btn-sm" rel="publisher"<i class="fa fa-facebook"></i></a>
                    <a class="btn btn-warning btn-sm" rel="publisher"><i class="fa fa-behance"></i></a>
                </div>
            </div>`;

        
//var infoboxTemplate =`<div class="col-lg-3 col-sm-6 w30p">
//            <div class="card hovercard">
//                <div class="cardheader"></div>
//                <div class="avatar"></div>
//                <div class="info">
//                    <div class="title"></div>                
//                </div>
//                <div class="bottom">
//                    <a class="btn btn-primary btn-twitter btn-sm" href=""><i class="fa fa-twitter"></i></a>
//                    <a class="btn btn-danger btn-sm" rel="publisher"<i class="fa fa-google-plus"></i></a>
//                    <a class="btn btn-primary btn-sm" rel="publisher"<i class="fa fa-facebook"></i></a>
//                    <a class="btn btn-warning btn-sm" rel="publisher"><i class="fa fa-behance"></i></a>
//                </div>
//            </div>
//        </div>`;

$(document).ready(function(){
    
    function updateInfoDiv(e, infoObj){
        $("#" + infoObj.id).find( ".avatar" ).append('<img alt="" src="'+infoObj.imageSmall+'">');
        $("#" + infoObj.id).find( ".cardheader" ).css('background-image', 'url(' + infoObj.imageLarge + ')');
        
        $("#" + infoObj.id).find( ".title" ).append(infoObj.title);
        for (var infoObjIndex = 0; infoObjIndex < infoObj.shortDescription.length; infoObjIndex++) {
            var curText = '<div class="desc">'+infoObj.shortDescription[infoObjIndex].text+'</div>';
            $("#" + infoObj.id).find( ".info" ).append(curText);            
        }                
        return;        
        }
  

    function addInfoDiv(curDiv, infoObj){

        //<div class="col-lg-3 col-sm-6 w30p">
        

        var e0 = $('<div class="col-lg-3 col-sm-6 w30p"><a id="modalLink_'+infoObj.id+'" href="#openModal_'+infoObj.id+'"></a></div>');
        $("#" + curDiv ).append(e0); 
        var e1 = $(infoboxTemplate);
        //$("#" + curDiv ).append('<a href="#openModal"></a>').append(e);    
        $("#modalLink_"+infoObj.id).append(e1);    
        e0.attr('id', infoObj.id);
        updateInfoDiv(e0, infoObj);        

        return;        
        } 




    function addLevel(infoObj, parent){
        for (var objIndex = 0; objIndex < infoObj.length; objIndex++) {
            console.log("infoObj[objIndex].id: ", infoObj[objIndex].id);
            addInfoDiv(parent, infoObj[objIndex]);            
        }
        return;
        }       
        

    function updateInfoBoxes(cvdata) {        
        var mainParent = "infoContainer";
        var infoObj = cvdata.infoFields;
        addLevel(infoObj, mainParent);
                        
        }

    
    function updateJumbo(titleData){    
        $( "#jumbotron").append('<h1>'+titleData.mainTitle+'</h1>');
        for (var objIndex = 0; objIndex < titleData.paragraphs.length; objIndex++) {
            $( "#jumbotron").append('<p>'+titleData.paragraphs[objIndex].text+'</p>');        
        }
    return;
    }  

    
    
    updateJumbo(cvdata.titleField);
    updateInfoBoxes(cvdata);
    
 
 

    
    
  });




