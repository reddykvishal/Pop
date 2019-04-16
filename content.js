const url = chrome.runtime.getURL('data/data.json');

fetch(url)
    .then((response) => response.json())
    .then((json) => readJSON(json))

    function readJSON(json){

    	//Toggle function


    	for (property in json["all_tweets"]) {
    		//This is static for now, needs to be changed to a keyword or hashtag that we search for each tweet
    		if(property === "Mueller Report"){
    			for (var i =0; i< json["all_tweets"][property].length; i++){

    				var elm = '<li class="js-stream-item stream-item stream-item"> <div class="tweet testing">' +
    				json["all_tweets"][property][i]["tweet"] + 
    				'<br /><a href="' + json["all_tweets"][property][i]["link"] + 
    				'">Click to View</a> | ' + json["all_tweets"][property][i]["user"] +
    				'</div></li>';
    				$(elm).prependTo(".stream-items");

    				$( "#stream-item-tweet-1113458635378704385 .content .stream-item-header").clone().appendTo( ".testing" );
    				$( "#stream-item-tweet-1113458635378704385 .content .js-tweet-text-container").clone().appendTo( ".testing" );
    				$(elm).hide();

    			}
    		}
    	}

    	//Pop Link
    	var popLink = '<a class="pop" href="#">Pop It!</a>';
    	$(popLink).prependTo(".stream-items");
    	$(".pop").click(function(e) {
	    e.preventDefault();
	    $(".testing").toggle(); 
		});

    }
