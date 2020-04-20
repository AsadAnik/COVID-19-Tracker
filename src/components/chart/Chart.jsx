import React, {useState, useEffect} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { chartDataFetch } from '../../API';
import styles from './Chart.module.css';

const Chart = ({dataChart: {confirmed, recovered, deaths} ,countryChart}) => {

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const fetchedChartData = async () => {
            // const dailyData = await chartDataFetch()
            setChartData(await chartDataFetch());
        }
        fetchedChartData()
    }, []);

    // console.log('StateHook',chartData)

 ///The Conditional Variable Here..   
    const LineChart = (
        chartData.length !== 0 
        ? (
            <Line
                data= {{
                    labels: chartData.map(({date}) => date),
                    datasets: [{
                        data: chartData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: 'royalblue',
                        fill: true
                    }, {
                        data: chartData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'maroon',
                        fill: true
                    }]
                }}
            />)
        : null
    )

    const BarChart = (
        confirmed 
        ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgb(65, 105, 225)', 'rgb(0, 128, 0)', 'rgb(233, 2, 2)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State In ${countryChart}` },
                }}
            />
        ): null
    )

    return (
        <div className={styles.container}>
            {countryChart ? BarChart : LineChart}
        </div>
    )
}

export default Chart;