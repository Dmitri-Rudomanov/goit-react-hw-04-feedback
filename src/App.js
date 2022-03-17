import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;
    if (name === 'good') {
      setGood(good => good + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral => neutral + 1);
    }
    if (name === 'bad') {
      setBad(bad => bad + 1);
    }
    // switch (option) {
    //   case 'good':
    //     return setGood(prevGood => prevGood + 1);
    //   case 'neutral':
    //     return setNeutral(prevNeutral => prevNeutral + 1);
    //   case 'bad':
    //     return setBad(prevBad => prevBad + 1);
    // }
  };

  const countTotalFeedback = () => {
    const totalCount = good + neutral + bad;
    console.log(totalCount);
    return totalCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const count = Math.round((good / countTotalFeedback()) * 100);
    const countCheck = isNaN(count) ? '0' : count;
    return countCheck;
  };

  const options = ['good', 'bad', 'neutral'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePrecentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
