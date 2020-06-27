import React from 'react';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(confirmed)
    if (!confirmed || !recovered || !deaths || !lastUpdate) {
        return 'Loading....';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card ,styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>

                        <Typography variant='h4'>
                            <CountUp start={0} end={confirmed.value} duration={3} separator=',' />
                        </Typography>

                        <Typography>
                            <span>CONDITION: </span>
                            <br />
                            <span className={styles.conditionInfected}>
                                {confirmed.value <= 5000 ? 'Handfully Ok':
                                 confirmed.value <= 10000 ? 'Going Upper!':
                                 confirmed.value <= 50000 ? 'Increasing Badness!':
                                 confirmed.value <= 100000 || confirmed.value <= 1000000 ?
                                  'Dangerously Infecting!': 
                                  confirmed.value <= 5000000 ? 'Worlds Danger Highly!!!':
                                 'Worlds Alert Danger!!!!'
                                }
                            </span>
                        </Typography>

                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>

                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0} end={deaths.value} duration={3} separator=',' />
                        </Typography>

                        <Typography>
                            <span>CONDITION: </span>
                            <br />
                            <span className={styles.conditionDeaths} >
                                {deaths.value <= 50 ? 'Normally Ok':
                                 deaths.value <= 100 ? 'Going Upper!':
                                 deaths.value <= 500 ? 'Increasing Badness!':
                                 deaths.value <= 1000 || deaths.value <= 10000 ?
                                  'Dieing More!': 
                                  deaths.value <= 50000 ? 'Critically Dieing!!!':
                                 'Dangerously Dieing!!!!'
                                }
                            </span>
                        </Typography>

                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovers</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0} end={recovered.value} duration={3} separator=',' />
                        </Typography>

                        <Typography>
                            <span>CONDITION: </span>
                            <br />
                            <span className={styles.conditionRecovered} >
                                {recovered.value <= 500 ? 'Critical Recover':
                                 recovered.value <= 1000 ? 'Going Recovers!':
                                 recovered.value <= 5000 ? 'Good Recovers!':
                                 recovered.value <= 10000 || recovered.value <= 100000 ?
                                  'Better Recovers!': 
                                  recovered.value <= 500000 ? 'Going Best Covers':
                                 'Not Bad!'
                                }
                            </span>
                        </Typography>

                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recovers of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;