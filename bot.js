// JavaScript source code
console.log("Filha da puta");

var Twit = require("twit");

var T = new Twit({
  consumer_key:         'vctumEJi9sR2xrcq0vXSRF7bN',
  consumer_secret:      'DRQBTB95breNo0iSylLjTyGaRY9lrPwpWfbQMTkZ4CkDOzuX5f',
  access_token:         '1048829318976212992-qaJPRNrj2JYsipXnACdZByK2gXvDG9',
  access_token_secret:  'wLNCrIAjyARxtnRIFJElz9wi6plO0EUhGcoyZ1OEgHQVv',     
});

tweetIt();
setInterval(tweetIt, 600000) 

function tweetIt() {

	var number = Math.floor(Math.random()*1000);
	
	var silabas = ["bol","so","na","ro"]
	var tweet = {
		status: "sai " + silabas[Math.floor((Math.random()* 3) + 0)] + silabas[Math.floor((Math.random()* 4) + 0)] + silabas[Math.floor((Math.random()* 3) + 0)] + silabas[Math.floor((Math.random()* 3) + 0)]
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err,data,response){
		if(err){
			console.log("deu erro");
		}
		else {
			console.log("funciono");
		}
	} 
	}
