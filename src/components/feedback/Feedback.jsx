import '../../sass/modules/_feedback.scss'
import { connect } from 'react-redux'
import * as actions from '../../redux/feedback-actions'

const Feedback = ({ onIncrGood, onIncrNeutral ,onIncrBad }) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul className='fb-list'>
                <li className='fb-item'>
                    <button type="button" onClick={onIncrGood}>
                        Good
                    </button>
                </li>
                <li className='fb-item'>
                    <button type="button" onClick={onIncrNeutral}>
                        Neutral
                    </button>
                </li>
                <li className='fb-item'>
                    <button type="button" onClick={onIncrBad}>
                        Bad
                    </button>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        valueGood: state.good,
        valueNeutral: state.neutral,
        valueBad: state.bad,
    }
}

const mapDispatchToProps = dispatch => ({
        onIncrGood: () => dispatch(actions.IncrGood(1)),
        onIncrNeutral: () => dispatch(actions.IncrNeutral(1)),
        onIncrBad: () => dispatch(actions.IncrBad(1)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feedback) 