import React from 'react';
import {Link} from 'react-router-dom'
import albumData from './database/Albums.json'



export default React.createClass({
  getInitialState() {
    return {
      album: albumData.albums.filter(function(album){
        return Number(album.id) === Number(this.props.match.params.albumId)
      }.bind(this))[0]
    }
  },
  render: function(){
    return(
        <div className="myAlbums">
        	<div className="albumTitle">
        		<p>My Albums</p>

        	</div>
        	<ul className="albums1List">
	        	{albumData.albums.map(function(photo){
	        		return (
            <div key={'album' + photo.id}>
	        	<Link key={'album' + photo.id} to={'/album/' + photo.id}>
	        		<div className="pic">
              <li key={'album' + photo.id}><img src={photo.main_image.url}
             alt=""/>
              </li>
        
	        		<div className="imgTitle"><p>Album #</p></div>
	        		</div>
	        	</Link>
            </div>
	        		)

	        		
	        	})}
        	</ul>

        </div>
     
    )
  },
})

