import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/actions/userAction'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublishIcon from '@material-ui/icons/Publish';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleHome = () => {
    history.push('/cars')
  }

  const handleWhistlist = () => {
    history.push('/whistlists')
  }

  const handleUpload = () => {
    history.push('/upload')
  }
  
  const handleLogout = () => {
    dispatch(logoutUser())
    history.push('/')
  }

  return (
    <div>
        <List>
            <ListItem button onClick={handleHome}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={handleWhistlist}>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText>Whistlists</ListItemText>
            </ListItem>
            <ListItem button onClick={handleUpload}>
              <ListItemIcon><PublishIcon/></ListItemIcon>
              <ListItemText>Upload</ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
    </div>
  );
}

export default Navbar
