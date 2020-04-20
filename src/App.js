import React from 'react';
//The Async_Function is Imported..
import { fetchData } from './API';

import { Cards, Chart, Picker } from './components/index';
import styles from './App.module.css';
// import covid19CoverImage from './COVID-19.png';


class App extends React.Component{//Components...
  state = {//Application State..
    data: {},
    country: ''
  }

  async componentDidMount(){//LifeCycle_Method...
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log('Application State Data : ',this.state.data)
  }

  handleChange = async(country) => {
    //Fetched Data to API finding data..
      const dataFetch = await fetchData(country);
    //Data set to state..
      this.setState({data: dataFetch, country: country});
  }

  render(){
    const { data, country } = this.state;

    // console.log('Changed Values ', data)
    // console.log('Change Country ', country)

    return(//Returning this statement..
      <div className={styles.container}>
          {/* <div>
            <img src={covid19CoverImage} alt='COVID-19' height={80} width={600}/>
          </div> */}

        <Cards data={data} />
        <Picker changeHandler={this.handleChange} />
        <Chart dataChart={data} countryChart={country} />
      </div>
    )
  }
}

export default App;