import './App.css';
import './Photo.css';
import './Photos.css'
import './MyAlbum.css';
import React from 'react';
import MyAlbums from './MyAlbums';
import Photos from './Photos'
import Photo from './Photo'
import {BrowserRouter, Route} from 'react-router-dom'


const PhotoAlbum= React.createClass({
  render: function(){
    return(

     
    <BrowserRouter>
      <div className="albums">


        <Route exact={true} path="/" component={MyAlbums} />
        <Route path="/album/:albumId" component={Photos} />
        <Route path="/photo/:albumId/:photoId" component={Photo} />
      </div>
    </BrowserRouter>
    )
  },
})

export default PhotoAlbum
