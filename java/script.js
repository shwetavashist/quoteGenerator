var quotes={ 
    'Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind.',
    'This too,shall pass.',
    'Keep your eyes on the stars and your feet on the ground.',
    'The only person you should try to be better than is the person you were yesterday.',
    'Never be bullied into silence. Never allow yourself to be made a victim. Accept no one\'s definition of your life; define yourself.',
    'Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.',
    'A man who flies from his fear may find that he has only taken a shortcut to meet it.',
    'Life\'s too mysterious to take too serious.',
    'No one can make you feel inferior without your consent.',
    'The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.',
    'You can\'t go around building a better world for people. Only people can build a better world for people. Otherwise it\'s just a cage.',
    'There isn\'t a way things should be. There\'s just what happens, and what we do.',
    'It\'s not about how hard you can hit; it\'s about how hard you can get hit and keep moving forward.',
    'More fuck yeah, less fuck that.',
    'If you want to go fast, go alone. If you want to go far, go together.',
    'It\'s OK to not be OK, as long as you don\'t stay that way.',
    'I can be changed by what happens to me but I refuse to be reduced by it.',
    'Believe you can and you\'re halfway there.',
}

function newQuote(){
    var randomNumber=math.floor(math.random()*(quote.length));
    document.getElementById('quoteDisplay').innerHTML=quote[randomNumber];
}