import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { destroyCar } from '../store/actions/carAction'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import DetailsIcon from '@material-ui/icons/Details';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

const Cards = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  let car;
  if (!props.car) { return <Typography/> }
  else { car = props.car }

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };


  const handleFavorite = (id) => {
  }

  const handleDestroy = (id) => {
    const token = localStorage.getItem('access_token')
    dispatch(destroyCar(id, token))
  }

  const handleDetail = (id) => {
    history.push(`/cars/${id}`)
  }

  const handleEdit = (id) => {
    history.push(`/update/cars/${id}`)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { 
              car.name.split('')[0].toUpperCase()
            }
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleFavorite(car._id)}>
            <FavoriteIcon />
          </IconButton>
        }
        title={car.name.split(' ')[0]}
        subheader={car.name}
        />
      <CardMedia
        className={classes.media}
        image={car.image}
      />
      <CardActions disableSpacing>
      <IconButton onClick={() => handleDetail(car._id)}>
        <DetailsIcon/>
      </IconButton>
        <IconButton onClick={() => handleEdit(car._id)}>
        <EditAttributesIcon/>
        </IconButton>
        <IconButton onClick={() => handleDestroy(car._id)}>
          <DeleteSweepIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Overview:</Typography>
          <Typography>
            {
              car.overview
            }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Cards