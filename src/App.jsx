import "./App.css";
import Feedback from './components/feedback/Feedback'
import Statistics from './components/statistics/Statistics'
import { connect } from 'react-redux'


function App({ valueGood, valueNeutral, valueBad} ) {
  const total = valueGood+valueNeutral+valueBad
  return (
    <div className="App">
      <div className="App-header">
        <Feedback />
        {total !== 0 ? <Statistics /> : <h3>No feedback given</h3>}
       
      </div>
    </div>
  );
}

// No feedback given


const mapStateToProps = (state) => ({
        valueGood: state.good,
        valueNeutral: state.neutral,
        valueBad: state.bad,
})


export default connect(mapStateToProps)(App)
