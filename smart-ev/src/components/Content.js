import React, { useState, useEffect } from 'react'
import Spinner from 'react-spinkit'
// import ErrorPage from './Error'
// import useDebounce from '../hooks/useDebounce'
// import SearchBar from './SearchBar'
import {useSelector, useDispatch} from 'react-redux'
import useDebounce from '../hooks/useDebounce'
import { Container, Typography, Grid } from '@material-ui/core';
import {fetchCars} from '../store/actions/carAction'
import Card from './Card'
import { ErrorPage } from '../pages'

const Content = () => {
    const cars = useSelector(state => state.carReducer.cars)
    const loading = useSelector(state => state.carReducer.loading)
    const error = useSelector(state => state.carReducer.error)
    const search = useSelector(state => state.carReducer.inputFilteredCar)

    const [isSearching, setIsSearching] = useState(false)
    const [carData, setCarData] = useState([])
    const debouncedSearch = useDebounce(search)
    const dispatch = useDispatch()
  
    console.log(debouncedSearch,'<<<');

    useEffect(() => {
        dispatch(fetchCars())
        if(debouncedSearch) {
            console.log(debouncedSearch,'<<<');
            setIsSearching(true)
            setTimeout(() => {
              const filteredData = cars.filter(e => (
                (e.name.toLowerCase().includes(search.toLowerCase()))
              ))
              setCarData(filteredData)
              setIsSearching(false)
            }, 2000)
          }else {
            setIsSearching(false)
            setCarData(cars)
        }
        console.log(carData,'<<<1');
        // dispatch(fetchCars())
    }, [fetchCars, debouncedSearch])
    // console.log(carData,'<<<1');


    if(error) return <ErrorPage></ErrorPage>
    return (
        <Container>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" spacing={4} gutterBottom>
                All Electric Vehicle Products
            </Typography>
            {
                (loading && !cars.length) 
                ? <div> <Spinner /> </div>
                :
                (isSearching)
                ? <div> <Spinner /> </div>
                : <Grid container spacing={2} align="center">
                    {
                        carData.map(car => {
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
