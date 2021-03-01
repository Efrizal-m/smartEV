import React from 'react';
import { useHistory } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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

const sample = [
  {
    "name": "Volkswagen ID.4 Pure Performance",
    "image": "https://i.imgur.com/Fhg5GDs.jpg",
    "year": 2020
  },
  {
    "name": "Tesla 2 Pure Performance",
    "image": "https://i.imgur.com/CESnnyJ.jpg",
    "year": 2021
  },
  {
    "name": "Android ID.4 Pure Performance",
    "image": "https://i.imgur.com/Fhg5GDs.jpg",
    "year": 2018
  }
]

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Main = () => {
    const classes = useStyles();
    const history = useHistory()

    const handleLogin = () => {
      history.push('/login')
    }

    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              SmartEV
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                  Smart Electric Vehicle Inc.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Place You can find your drean car easily.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                      Grab Your Dream Car Now
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h1" variant="h4" align="center" color="textPrimary" spacing={4} gutterBottom>
              Sample Product
          </Typography>
            <Grid container spacing={4}>
              {sample.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        { card.name }
                      </Typography>
                      <Typography>
                        { card.year }
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Best Of The Year
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
}

export default Main
