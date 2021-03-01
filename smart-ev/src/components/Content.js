import React, { useEffect } from 'react'
import Spinner from 'react-spinkit'
// import ErrorPage from './Error'
// import useDebounce from '../hooks/useDebounce'
import { ErrorPage } from '../pages'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCars} from '../store/actions/carAction'

import Grid from '@material-ui/core/Grid';
import Card from './Card'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Content = () => {
    const cars = useSelector(state => state.carReducer.cars)
    const loading = useSelector(state => state.carReducer.loading)
    const error = useSelector(state => state.carReducer.error)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchCars())
    }, [dispatch])

    if(error) return <ErrorPage></ErrorPage>
    return (
        <Container>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" spacing={4} gutterBottom>
                All Electric Vehicle Products
            </Typography>
            {
                (loading && !cars.length) 
                ? <div> <Spinner /> </div>
                        //  : (isSearching)
                        //     ? <div>
                        //         Loading
                        //       </div>
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
