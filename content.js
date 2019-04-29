const url = chrome.runtime.getURL('data/data.json');
const imgPop = chrome.runtime.getURL('img/pop.png');

fetch(url)
.then((response) => response.json())
.then((json) => readJSON(json))

function readJSON(json){

        setTimeout( function(){

        //Append IDs for each Tweet
        
        var keys = [];
        for (property in json["all_tweets"]) {
            keys.push(property);
        }
        var i = 0
        $("article").each(function(){
            $(this).addClass(keys[i]);
            i = i+1;
        });

        //Fetch relevant from different sources for a single tweet

        for (property in json["all_tweets"]) {

            for (var j=0;j<keys.length;j++)
            {
              if(property === keys[j]){
                 for (var i =0; i< json["all_tweets"][property].length; i++){

                    var elm = '<div class="tweet testing item"><div class="row"> ' + 
                    '<div class="column"><img class="imgPop" text-align="right" src="' + json["all_tweets"][property][i]["photo"] + '" /></div>' +
                    '<div class="double-column">' +
                    '<strong>' + json["all_tweets"][property][i]["user"] +  ' </strong> <a href="' + json["all_tweets"][property][i]["link"] + 
                    '">View</a>'+ 
                    json["all_tweets"][property][i]["tweet"] + 
                    '</div>'  + 
                    '</div></div>';
                    console.log(keys[j]);
                    $(elm).insertAfter('.' + keys[j]);
                    $(".testing").hide();
                }


            }
        }
    }

        $(".r-1g40b8q h2").text("Pop Feed");

    
    	//Pop Link

        var popLink = '<div><a class="pop width-150px" href="#" align="center">Pop</a></div>';
        $("article").append(popLink);

        $(".pop").click(function(e) {
           e.preventDefault();
           $(".testing").toggle();
       });
    }, 2000);


    }
