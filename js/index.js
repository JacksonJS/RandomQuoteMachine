var quote = document.getElementById('quote');
var click = document.getElementById('click');
var quoteList = ['“There are two kinds of pain. Good pain – the sort of pain that motivates, that makes you strong. Then there’s bad pain – useless pain, the sort of pain that’s only suffering. I welcome the former. I have no patience for the latter.”',

'“I’ll tell you this though, Pop. When they bury me, it won’t be in my backyard. And when they pay their respects, they’ll have to wait in line.”',
 
'“You have to respect your own mortality.”',

'“I love that woman. I love her more than sharks love blood.”',

 '”I will not be a placeholder president, Claire. I will win and I will leave a legacy.”',
 
'“One heartbeat away from the Presidency and not a single vote cast in my name. Democracy is so overrated.”',

'“The president is like a lone tree in an empty field: he leans whichever way the wind is blowing."',

'“Nobody’s a Boy Scout. Not even Boy Scouts.”',

'“What a martyr craves more than anything is a sword to fall on. So you sharpen the blade, hold it at just the right angle, and then 3, 2, 1 …”',

'“How quickly poor grades are forgotten in the shadow of power and wealth.”',

'“There can be no false steps now. The higher up the mountain the more treacherous the path.”',

'“Even though I am an adult man, I enjoy video games.”',

'“For those climbing to the top of the food chain there can be no mercy.”',

'“There is but one rule: Hunt or be hunted."',

'“There are two types of Vice Presidents – doormats and matadors. Which do you think I intend to be?” ',

'“Everything is about sex, except sex. Sex is about power.”',

'“It only takes ten seconds to crush a man’s ambitions”',

'“There is no solace above or below. Only us – small, solitary, striving, battling one another. I pray to myself, for myself. “',

'“Shake with your right hand but hold a rock in the left.”',

'“I don’t know whether to be proud or terrified or perhaps both.”',

'“I always loathed the necessity of sleep. It puts the most powerful of men on their backs.”',

'“He’s in the darkness now. I am his only beacon of light. Now we guide him gently toward the rocks.”',

'“I’d push him down the stairs and light his broken body on fire just to watch it burn if it wouldn’t start a world war.”',

'“Sometimes I think the Presidency is the illusion of choice” ',

'“She can go after me all she wants but if she goes after Claire I’ll slit her fucking throat in broad daylight.”',

'“I feel exposed. Like the skin where my ring used to be. Even Achilles was only as strong as his heel.”',

'“That’s how you devour a whale … one bite at a time.”',

'“Every Tuesday I sit down with the speaker and the majority leader to discuss the week’s agenda. Well, ‘discuss’ is probably the wrong word… they talk while I imagine their lightly-salted faces frying in a skillet.”',

'“If you don’t like how the table is set, turn over the table.”',

'“The road to power is paved with hypocrisy and casualties. Never regret.”',

  
 ];


// random quote function that generates the random quotes
var randomQuote = function(){
  var twitter = document.getElementById('twitter');
  var index = Math.floor(Math.random()*quoteList.length);
  // for the twitter link for that particular quote
  // for the link, to encode the url, use encodeURI
  twitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI(quoteList[index]);
  
  //for every click, add that generated quote into the html
  quote.innerHTML = quoteList[index];
};

randomQuote(); // when page loads, run the function so the page is not blank

click.addEventListener('click', randomQuote, false);