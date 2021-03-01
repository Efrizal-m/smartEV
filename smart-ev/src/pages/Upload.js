import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addCar } from '../store/actions/carAction'

import Header from '../components/Header'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));



const Upload = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit } = useForm()

    const [ inputForm, setInputForm ] = useState({
        name: '',
        overview: '',
        battery: '',
        acceleration: '',
        topSpeed: '',
        range: '',
        efficiency: '',
        fastCharge: '',
        price: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInputForm({ ...inputForm, [name]: value })
    }
    
    const onSubmit = (data) => {
        const { name, overview, battery, acceleration, topSpeed, range, efficiency, fastCharge, price } = inputForm
        const formData = new FormData()
        formData.append('name', name)
        formData.append('overview', overview)
        formData.append('battery', battery)
        formData.append('acceleration', acceleration)
        formData.append('topSpeed', topSpeed)
        formData.append('range', range)
        formData.append('efficiency', efficiency)
        formData.append('fastCharge', fastCharge)
        formData.append('price', price)
        formData.append('image', data.image[0])

        const token = localStorage.getItem('access_token')
        dispatch(addCar(formData, token))
        history.push('/cars')
    }
    
    return (
        <React.Fragment>
        <Header page='Upload'/>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Add New Data
            </Typography>
            <React.Fragment>
            </React.Fragment>
          </Paper>
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Fill the form correctly
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                </Grid>
                
                <Grid item xs={12}>
                <TextField
                    required
                    name="overview"
                    label="Overview"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="name"
                    label="Name"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="battery"
                    label="Battery (kWh)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="acceleration"
                    label="Acceleration 0 - 100 (sec)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="topSpeed"
                    label="Top Speed (km/h)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="range"
                    label="Range (km)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="efficiency"
                    label="Efficiency (Wh/km)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="fastCharge"
                    label="Fast Charge (km/h)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="price"
                    label="Price (Euro)"
                    fullWidth
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12}>
                <Typography color='secondary'>Upload Car Image</Typography>
                <input ref={register} type='file' name="image" />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              spacing={5}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            </form>
            </React.Fragment> 
            </main>
            <Copyright className={classes.button}/>
      </React.Fragment>     
    )
}

export default Upload
