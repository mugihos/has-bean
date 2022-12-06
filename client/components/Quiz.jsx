import React from 'react'

export default function Quiz() {
  const quiz = [
    {
      Question: 'Which country grows the most coffee in the world?',
      Answer: 'Brazil',
    },
    {
      Question:
        'What is the third essential ingredient to make an Espresso Martini? Espresso, Kahlua and…?',
      Answer: 'Vodka',
    },
    { Question: 'What colour is a coffee cherry when ripe?', Answer: 'Red' },
    {
      Question: 'Which two countries claim to have invented the flat white?',
      Answer: 'Australia and New Zealand',
    },
    {
      Question: 'How long does it take for the coffee cherry to ripen?',
      Answer: '6 to 14 months',
    },
    {
      Question: 'In which country was Frappé coffee invented?',
      Answer: 'Greece',
    },
    {
      Question: 'How many coffee beans are there in one coffee cherry?',
      Answer: 'Two',
    },
    { Question: 'What alcohol is in  Irish coffee?', Answer: 'Whiskey' },
    {
      Question: 'How many espresso beans are in one shot?',
      Answer:
        'The industry standard for a single shot of espresso coffee is about 56 roasted coffee beans in a shot of coffee.',
    },
    {
      Question:
        'According to an Ethiopian origin story, coffee beans were discovered after what animal became energetic after eating them?',
      Answer: 'Goats',
    },
    {
      Question:
        'How long does it take for newly planted coffee trees to bear fruit?',
      Answer: '3 to 4 years',
    },
  ]
  function showAnswer(e) {
    var all = document.getElementsByClassName('showMe')
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none'
    }

    var div = e.nextSibling.nextElementSibling
    div.style.display = 'inline-block'
  }

  return (
    <>
      <div>
        <h1>Coffee Quiz</h1>
        {quiz.map((quiz) => {
          return (
            <div key={quiz.Question}>
              <h3>{quiz.Question}</h3>
              <button onClick={showAnswer}>Answer</button>
              <div className="showMe" style={{ display: 'none' }}>
                {quiz.Answer}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
