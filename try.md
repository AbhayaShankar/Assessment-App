if (
            Assessment.questions[index] === index &&
            Assessment.questions[index].answer === selectedAnswer.answer
          ) {
            setScore((prevScore) => prevScore + 1);
          }




 <div>
        {assessment?.selectedAnswers?.forEach((selectedAnswer, index) => {
          if (
            Assessment.questions[index] === index &&
            Assessment.questions[index].answer === selectedAnswer.answer
          ) {
            setScore((prevScore) => prevScore + 1);
          }
          {
            index;
          }
        })}
      </div>