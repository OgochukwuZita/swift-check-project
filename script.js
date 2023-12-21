'use strict';
// 
document.addEventListener('DOMContentLoaded', function(){
    const dailyQuoteElement = document.getElementById('dailyQuote');
    function fadeOut (){
        dailyQuoteElement.classList.add('daily-Quote');
        setTimeout(updateQuote,60000);
    
    }
    function fadeIn (){
        dailyQuoteElement.classList.remove('daily-Quote');
    }
    function updateQuote (){
        const dailyQuotes = [
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. - Steve Jobs",
            "Strive not to be a success, but rather to be of value. - Albert Einstein",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "It always seems impossible until it's done. - Nelson Mandela",
            "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
        ];
        const randomIndex = Math.floor(Math.random()*dailyQuotes.length);
        const randomQuote = dailyQuotes[randomIndex];
        fadeOut();
        setTimeout(function(){
            dailyQuoteElement.textContent = randomQuote;
            fadeIn();
        }, 60000)
    }
    updateQuote();
})