import { useState } from 'react';
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Section from './components/Section/Section.js';
import Notification from './components/Notification/Notification.js';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(() => good + 1);
        break;

      case 'neutral':
        setNeutral(() => neutral + 1);
        break;

      case 'bad':
        setBad(() => bad + 1);
        break;

      default:
        console.log('error');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!(good / countTotalFeedback())) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={updateState}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
}

// class AppOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     return Object.values(state).reduce((a, b) => a + b, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     if (!(state.good / countTotalFeedback())) {
//       return 0;
//     }
//     return Math.round((state.good * 100) / countTotalFeedback());
//   }

//   render() {
//     const { good, neutral, bad } = state;
//     return (
//       <div>
// <Section title="Please leave feedback">
//   <FeedbackOptions
//     options={state}
//     onLeaveFeedback={updateState}
//   ></FeedbackOptions>
// </Section>

// <Section title="Statistics">
//   {countTotalFeedback() === 0 ? (
//     <Notification message="No feedback given"></Notification>
//   ) : (
//     <Statistics
//       good={good}
//       neutral={neutral}
//       bad={bad}
//       total={countTotalFeedback()}
//       positivePercentage={countPositiveFeedbackPercentage()}
//     ></Statistics>
//   )}
// </Section>
//       </div>
//     );
//   }
// }
