import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail } from '../store/actions/carAction'
import Header from '../components/Header'
import { ErrorPage } from '../pages'

import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SmartEV
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardRoot: {
    width: '95%'
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 1,
  },
}));



const Detail = () => {
    const {id} = useParams()
    const car = useSelector(state => state.carReducer.car)
    // const loading = useSelector(state => state.carReducer.loading)
    const error = useSelector(state => state.carReducer.error)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        dispatch(fetchDetail(id, token))
    }, [dispatch, id])

    if(error) return <ErrorPage></ErrorPage>
    return (
        <div>
            <Header page="Car Detail" />
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7}>
                <Paper variant="outlined" >
                    <img src={car.image} alignItems='center' width='100%' alt={car.name}/>
                </Paper>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                    { car.name }
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    { car.overview }
                </Typography>
          </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                    <Card className={classes.cardRoot}>

                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Battery Electric Vehicle
                        </Typography>
                        <Typography variant="h6" component="h4">
                            {car.battery} kWh
                        </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Acceleration ( 0 - 100 )
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.acceleration} sec
                    </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Top Speed
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.topSpeed} km/h
                    </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Range*
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.range} km
                    </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Efficiency*
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.efficiency} Wh/km
                    </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Fast Charge
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.fastCharge} km/h
                    </Typography>
                    </CardContent>

                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Price
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {car.price} Euro
                    </Typography>
                    </CardContent>
                   </Card>    
              </div>
              <Box mt={5}>
                  <Copyright />
              </Box>
            </Grid>
          </Grid>
        </div>
    )
}

export default Detail
