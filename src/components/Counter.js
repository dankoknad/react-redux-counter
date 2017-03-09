import React, { Component, PropTypes } from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onChangeIncrement: PropTypes.func.isRequired,
    onResetCounter: PropTypes.func.isRequired,
    onResetIncrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement, onChangeIncrement, onResetCounter, onResetIncrement } = this.props
    return (
      <div className="row text-center">
        <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 panel panel-default">
          <div className="">
            <h2>React/Redux counter</h2>
            <h3>Result:</h3>
            <span className="result">{value.result}</span>
            <p>
              <button className="btn btn-primary" onClick={onIncrement}>
                + {value.increment}
              </button>
              {' '}
              <button className="btn btn-primary" onClick={onDecrement}>
                - {value.increment}
              </button>
              {' '}
              <button title="reset result" className="btn btn-danger" onClick={onResetCounter}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
              </button>
            </p>
            <p>
            </p>  
            <p>You can change increment/decrement value:</p>
            <p>
              <input className="form-control text-center" type="number" value={value.increment} onChange={e => {
                onChangeIncrement(Number(e.target.value))
              }} />
              {' '}
              <button className="btn btn-danger" onClick={onResetIncrement}>
                <span title="reset increment" className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
              </button>
            </p>  
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
