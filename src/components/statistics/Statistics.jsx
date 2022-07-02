import '../../sass/modules/_statistics.scss'
import { connect } from 'react-redux'



const Statistics = ({ valueGood, valueNeutral, valueBad}) => {
    const total = valueGood + valueNeutral + valueBad;
    const positiveFeedback = Math.trunc(valueGood / total * 100)

    return (
        <div>
            <h2>Statistics</h2>

            <ul className='stat-list'>
                <li className='stat-item'>
                    <p>Good: {valueGood}</p>
                </li>
                <li className='stat-item'>
                    <p>Neutral: {valueNeutral}</p>
                </li>
                <li className='stat-item'>
                    <p>Bad: {valueBad}</p>
                </li>
                <li className='stat-item'>  
                    <p>Total: {total}</p>
                </li>
                <li className='stat-item'>
                    <p>Postive feedback: {positiveFeedback}%</p>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
        valueGood: state.good,
        valueNeutral: state.neutral,
        valueBad: state.bad,
})


export default connect(mapStateToProps)(Statistics)