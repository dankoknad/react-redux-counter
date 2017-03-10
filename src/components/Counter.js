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
            <h3>React / Redux counter</h3>
            <span className="result">{value.result}</span>
            <div className="buttons-row">
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
            </div>
            <h4>You can change increment&nbsp;/&nbsp;decrement value:</h4>
            <div>
              <input className="form-control text-center" type="number" value={value.increment} onChange={e => {
                onChangeIncrement(Number(e.target.value))
              }} />
              {' '}
              <button className="btn btn-danger" onClick={onResetIncrement}>
                <span title="reset increment" className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
              </button>
              <div className="text-muted"><small>(default = 5)</small></div>
            </div>  
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
