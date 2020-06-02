import React from 'react';
import Loading from './HOC';
//The Async_Function is Imported..
import { fetchData } from './API';
import { Cards, Chart, Picker } from './components/index';
import styles from './App.module.css';

class App extends React.Component {//Components...
  state = {//Application State..
    data: {},
    country: ''
  }

  async componentDidMount() {//LifeCycle_Method...
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log('Application State Data : ',this.state.data)
  }

  handleChange = async (country) => {
    //Fetched Data to API finding data..
    const dataFetch = await fetchData(country);
    //Data set to state..
    this.setState({ data: dataFetch, country: country });
  }

 //Rendering Method... 
  render() {
    const { data, country } = this.state;

    // console.log('Changed Values ', data)
    // console.log('Change Country ', country)

    return (//Returning this statement..
      <Loading>
        <div className={styles.container}>

          <Cards data={data} />
          <Picker changeHandler={this.handleChange} />
          <Chart dataChart={data} countryChart={country} />
        </div>
      </Loading>
    )
  }
}

export default App;