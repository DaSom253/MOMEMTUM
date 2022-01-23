const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"},
    {quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"},
    {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Dr. Seuss"},
    {quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: "Barbara Bush"},
    {quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé"},
    {quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant"},
    {quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee"},
    {quote: "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard"},
    {quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"}
];
//Math.random()는 0이상 1미만
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = `오늘의 명언 : ${todaysQuote.quote}`;
author.innerText = ` _${todaysQuote.author}`;