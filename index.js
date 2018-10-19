document.addEventListener("DOMContentLoaded", function(event) {
  let questions =["If you didn’t have to sleep, what would you do with the extra time?","What’s your favorite piece of clothing you own / owned?","What hobby would you get into if time and money weren’t an issue?","What would your perfect room look like?", "How often do you play sports?","What fictional place would you most like to go?","What job would you be terrible at?","When was the last time you climbed a tree?","If you could turn any activity into an Olympic sport, what would you have a good chance at winning medal for?","What is the most annoying habit that other people have?","What job do you think you’d be really good at?","What skill would you like to master?","What would be the most amazing adventure to go on?","If you had unlimited funds to build a house that you would live in for the rest of your life, what would the finished house be like?","What’s your favorite drink?","What state or country do you never want to go back to?","What songs have you completely memorized?"]

  document.querySelector("button").addEventListener("click", function(event){
      for(let i=Math.floor(Math.random()*questions.length);i<questions.length;i++){
        return document.querySelector("p").innerHTML = `Your Question is: ${questions[i]}`
      }

    })
  })
