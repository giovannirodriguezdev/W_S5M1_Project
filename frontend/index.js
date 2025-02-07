// const { verbs, nouns, adverbs } = require("./data");

// const { people } = require("./data");

// const { people } = require("./data");

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach((widget, idx) => {
    widget.classList.add('widget');
    widget.setAttribute('tabindex', idx + 1)
  })


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random()* quotes.length);
  const randomQuote = quotes[randomIdx];
  const quote = document.createElement('div');
  const quoteText = randomQuote.quote;
  quote.textContent = quoteText;
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote);

  const autherDate = document.createElement('div');
  const {author, date} = randomQuote;
  autherDate.textContent = `${author} in ${date || "an unknown date"}`;
  widget1.appendChild(autherDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];

  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];

  const sentence = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
  const paragraph = document.createElement('p');
  paragraph.textContent = sentence;
  document.querySelector('.corporatespeak').appendChild(paragraph);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdown = document.querySelector('.countdown');
  let count = 5;
  const countText = document.createElement('p');
  countText.textContent = `T-minus ${count}...`;
  countdown.appendChild(countText);

  const id = setInterval(() => {
    if (count === 1) {
      countText.textContent = 'Liftoff! 🚀';
      clearInterval(id);
    } else {
    countText.textContent = `T-minus ${--count}...`;
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement('p');
  document.querySelector('.friends').appendChild(personParagraph);
  const year = randomPerson.dateOfBirth.split('-')[0];
  let sentenceFriend = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `;

  if (!randomPerson.friends.length) {
    sentenceFriend += 'has no friends.';
  } else {
    sentenceFriend += 'is friends with '
    for (let index = 0; index < randomPerson.friends.length; index++) {
      const friendId = randomPerson.friends[index];
      const friend = people.find(p => p.id === friendId);
      const friendFullName = `${friend.fname} ${friend.lname}`;
      let isLastIdx = index === randomPerson.friends.length - 1;
      let isNextToLastIdx = index === randomPerson.friends.length - 2;
      if (isLastIdx) {
        sentenceFriend += `${friendFullName}.`
      } else if (isNextToLastIdx) {
        sentenceFriend += `${friendFullName} and `
      } else {
        sentenceFriend += `${friendFullName}, `;
      }
    }
  }
  personParagraph.textContent = sentenceFriend;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
