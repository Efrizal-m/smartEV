import React, { useEffect } from 'react'
import Spinner from 'react-spinkit'
// import ErrorPage from './Error'
// import useDebounce from '../hooks/useDebounce'
import { ErrorPage } from '../pages'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCars, fetchFilteredCar, inputFiltered} from '../store/actions/carAction'

import Grid from '@material-ui/core/Grid';
import Card from './Card'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Content = () => {
    const cars = useSelector(state => state.carReducer.cars)
    const inputFilteredCar = useSelector(state => state.carReducer.inputFilteredCar)
    const filteredCar = useSelector(state => state.carReducer.filteredCar)
    const loading = useSelector(state => state.carReducer.loading)
    const error = useSelector(state => state.carReducer.error)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchCars())
      dispatch(fetchFilteredCar(inputFilteredCar))
    }, [dispatch, inputFilteredCar])


    if(error) return <ErrorPage></ErrorPage>
    return (
        <Container>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" spacing={4} gutterBottom>
                All Electric Vehicle Products
            </Typography>
            {
                (loading && !cars.length) 
                ? <div> <Spinner /> </div>
                // : (filteredCar.length !== 0)
                // ? <Grid container spacing={2} align="center">
                //     {
                //         filteredCar.map(car => {
                //             return (
                //                 <Grid item key={car._id} xs={12} md={6}>
                //                     <Card car={car}/>
                //                 </Grid>
                //             )
                //         })
                //     }
                //  </Grid>
                :
                 <Grid container spacing={2} align="center">
                    {
                        cars.map(car => {
                            return (
                                <Grid item key={car._id} xs={12} md={6}>
                                    <Card car={car}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>                            
            }
        </Container>
    )
}

export default Content
