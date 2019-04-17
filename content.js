const url = chrome.runtime.getURL('data/data.json');

fetch(url)
    .then((response) => response.json())
    .then((json) => readJSON(json))

    function readJSON(json){

    	//Toggle function
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

    	for (property in json["all_tweets"]) {
    		//This is static for now, needs to be changed to a keyword or hashtag that we search for each tweet

            for (var j=0;j<keys.length;j++)
            {
    		if(property === keys[j]){
    			for (var i =0; i< json["all_tweets"][property].length; i++){

    				var elm = '<div class="tweet testing item">' +
    				json["all_tweets"][property][i]["tweet"] + 
    				'<br /><a href="' + json["all_tweets"][property][i]["link"] + 
    				'">Click to View</a> | ' + json["all_tweets"][property][i]["user"] +
    				'</div>';
                    console.log(keys[j]);
    				$(elm).insertAfter('.' + keys[j]);
                    $(".testing").hide();
    			}
    		}
            }
    	}

        $(".r-1g40b8q h2").text("Pop Feed");
    	//Pop Link
 
            var popLink = '<a class="pop" href="#">Pop It!</a>';
            $("article").css( "border", "1px solid gray" );
            $("article").append(popLink);

    	$(".pop").click(function(e) {
	    e.preventDefault();
	    $(".testing").toggle();
		});
        }, 1000);


    }
