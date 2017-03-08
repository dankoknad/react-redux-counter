import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import logoReact from '../logo-react.svg'
import logoRedux from '../logo-redux.png'
import logoBootstrap from '../logo-bootstrap.png'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement, onChange, onResetCounter, onResetIncrement } = this.props
    return (
      <div className="row text-center">
        <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 panel panel-default">
          <div className="">
            <h1>React/Redux counter</h1>
            <h2>Result:</h2>
            <p className="well">{value.result}</p>
            <p>
              <button className="btn btn-primary" onClick={onIncrement}>
                + {value.increment}
              </button>
              {' '}
              <button className="btn btn-primary" onClick={onDecrement}>
                - {value.increment}
              </button>
            </p>
            <p>
              <button className="btn btn-danger" onClick={onResetCounter}>
                Reset result
              </button>
            </p>  
            <p>You can change increment/decrement value:</p>
            <p>
              <input className="form-control text-center" type="number" value={value.increment} onChange={e => {
                onChange(Number(e.target.value))
              }} />
            </p>  
            <p>  
              <button className="btn btn-danger" onClick={onResetIncrement}>
                Reset increment
              </button>
            </p>  
            <p>Powered by:</p>
            <p>
              <img width="50" src={logoReact} alt="..." title="React" /> + 
              <img width="50" src={logoRedux} alt="..." title="Redux" />+ &nbsp;
              <img width="40" src={logoBootstrap} alt="..." title="Bootstrap" />
            </p>
            <p>Made with <span style={{fontSize: 18}} className="text-danger">♥</span> by <a href="http://dankoknad.github.io/" target="_blank">Danko</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
