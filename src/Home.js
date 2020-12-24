import React, { useState } from 'react'
import List from './List';
import Question from './Question';

function Home(props) {
    const [questions,setQuestions] = useState(["Hello","now",3,6]);


    return (
      <div>
        filter
        <List items={questions} renderComponent={Question} />
      </div>
    );
}

export default Home
