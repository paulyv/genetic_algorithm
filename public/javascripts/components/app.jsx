import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
              goal:       "",
              current:    "",
              generation: "0",
              fitness:    "0",
    };
  }

  initAlgorithm(g) {
    console.log("Init algorithm with goal " + g);
    return g;
  }

handleGoalChange(e) {
  this.setState({goal: e.target.value});
  this.setState({current: ""});
  this.setState({generation: "0"});
  this.setState({fitness: "0"});

}

handleSubmit(e) {
  e.preventDefault();
  initAlgorithm(this.state.goal);
}

  render() {

    return (
    <div>
        <div className="col-xs-10 col-sm-offset-1">
          <table className="table">
            <thead>
              <tr>
                <th>Generation #</th>
                <th>Fitness</th>
                <th>Current</th>
                <th>Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.generation}</td>
                <td>{this.state.fitness}</td>
                <td>{this.state.current}</td>
                <td>{this.state.goal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row col-xs-12">
          <div id="input_div" className="col-xs-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="input-group">
                <input onChange={this.handleGoalChange.bind(this)} type="text" id="string" className="form-control" placeholder="Type a word" />
                <span className="input-group-btn">
                <input className="btn btn-default" type="submit" id="button" value="Go!" />
                </span>
              </div>
            </form>
          </div>
        </div>
    </div>
    )
  }
}
export default App;
