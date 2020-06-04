import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
          data: []
        }
      }
    
      componentDidMount() {
         axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
          .then((response) => {
            console.log(response.data);
            this.setState({
              data: response.data
            });
          });
      }
    
      render() {
          return (
              <div>
              {
                  this.state.data.map((item,index) => {
                        return (
                            <div key={index}>
                                <ul>
                                    <li>
                                        <img 
                                            key={index}
                                            src={item.urls.regular}
                                            style={{margin:'10px'}}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )
                  })
              }
              </div>
          )
      }
      
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
