import React from 'react'
import styles from './Quiz.module.scss'
export default function Quiz() {
  const quiz = [
    {
      Question: 'Which country grows the most coffee in the world?',
      Option: 'Colombia',
      Option2: 'Kenya',
      Option3: 'Brazil',
      Option4: 'Ivory Coast',
      Answer:
        'Brazil is a true powerhouse of coffee production. The country single-highhandedly produces nearly 40% of the world’s coffee supply',
    },
    {
      Question:
        'What is the third essential ingredient to make an Espresso Martini? Espresso, Kahlua and…?',
      Option: 'Tequila',
      Option2: 'Vodka',
      Option3: 'Rum ',
      Option4: 'Whiskey',
      Answer:
        'The espresso martini is a cold caffeinated alcoholic drink made with espresso, coffee liqueur, and vodka.',
    },
    {
      Question: 'What colour is a coffee cherry when ripe?',
      Option: 'Green',
      Option2: 'Black',
      Option3: 'Brown',
      Option4: 'Red',
      Answer:
        'The chloroplasts give the coffee cherry their green color. However, it will turn red as it ripens, with some variations turning yellow. ',
    },
    {
      Question: 'Which two countries claim to have invented the flat white?',
      Option: ' UK and USA',
      Option2: 'Finland and Norway',
      Option3: 'Australia and New Zealand',
      Option4: 'Italy and France',
      Answer: 'Australia and New Zealand',
    },
    {
      Question: 'How long does it take for the coffee cherry to ripen?',
      Option: '2 to 6 weeks',
      Option2: '6 to 14 weeks',
      Option3: '2 to 6 months',
      Option4: '6 to 14 months',
      Answer: '6 to 14 months',
    },
    {
      Question: 'In which country was Frappé coffee invented?',
      Option: 'Greece',
      Option2: 'Italy',
      Option3: 'Brazil',
      Option4: 'USA',
      Answer: 'Greece',
    },
    {
      Question: 'How many coffee beans are there in one coffee cherry?',
      Option: 'One',
      Option2: 'Two',
      Option3: 'Three',
      Option4: 'Four',
      Answer:
        ' Each coffee cherry will contain two coffee beans. If a coffee cherry only produces one coffee bean, it is called a peaberry coffee.',
    },
    {
      Question: 'What alcohol is in  Irish coffee?',
      Option: 'Tequila',
      Option2: 'Vodka',
      Option3: 'Rum',
      Option4: 'Whiskey',
      Answer:
        'Classic Irish coffees are made with just four ingredients: hot coffee, Irish whiskey, sugar and whipped cream.',
    },
    {
      Question: 'How many espresso beans are in one shot?',
      Option: '35',
      Option2: '45',
      Option3: '56',
      Option4: '65',
      Answer:
        'The industry standard for a single shot of espresso coffee is about 56 roasted coffee beans in a shot of coffee.',
    },
    {
      Question:
        'According to an Ethiopian origin story, coffee beans were discovered after what animal became energetic after eating them?',
      Option: 'Elephants',
      Option2: 'Birds',
      Option3: 'Goats',
      Option4: 'Monkeys',
      Answer:
        ' The story goes that that Kaldi discovered coffee after he noticed that after eating the berries from a certain tree, his goats became so energetic that they did not want to sleep at night.',
    },
    {
      Question:
        'How long does it take for newly planted coffee trees to bear fruit?',
      Option: '3 to 4 months',
      Option2: '12 to 18 months',
      Option3: '3 to 4 years',
      Option4: '6 to 7 years',
      Answer:
        'Depending on the variety, it will take approximately 3 to 4 years for the newly planted coffee trees to bear fruit.',
    },
  ]

  return (
    <>
      <div>
        <h1>Coffee Quiz</h1>
        <ol className={styles.container}>
          {quiz.map((quiz) => {
            return (
              <div className={styles.item} key={quiz.Question}>
                <h3 className={styles.heading}>{quiz.Question}</h3>
                <li className={styles.choice}>- {quiz.Option}</li>
                <li className={styles.choice}>- {quiz.Option2}</li>
                <li className={styles.choice}>- {quiz.Option3}</li>
                <li className={styles.choice}>- {quiz.Option4}</li>

                <button
                  className={styles.answer}
                  onClick={() => alert(quiz.Answer)}
                >
                  Answer
                </button>
              </div>
            )
          })}
        </ol>
      </div>
    </>
  )
}
