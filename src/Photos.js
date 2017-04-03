import React from 'react';
import {Link} from 'react-router-dom'
import albumData from './database/Albums.json';
// console.log('data',albumData)


export default React.createClass({
  getInitialState() {
    return {
      album: albumData.albums.filter(function(album){
        return Number(album.id) === Number(this.props.match.params.albumId)
      }.bind(this))[0]


    }
  },

  photoLink(e){
    window.location.reload()

  },
  render: function(){
  	
    
    return(
        <div className="myPhotos">
        	<div className="photoTitle">
          
        		<p>{this.state.album.sport}</p>
            

        	</div>

            <ul className="sidebarButton">
            {albumData.albums.map((photo)=>{
                console.log(photo.id)

                  return(
                  <div key={photo.id} className="sideButton">
                    <Link key={'album' + photo.id} to={'/album/' + photo.id}>
                      
                        <button onClick={this.photoLink}>{photo.name}</button>  
                     
                    </Link> 
                  </div>    
                  )
                })
              }
            </ul>
            
        	<ul className="photos1List">
	        	{this.state.album.photos.map((photo) =>{
              console.log('phot', photo)
	        		return (
                <Link key={'album' + photo.id} to={`/photo/${this.props.match.params.albumId}/${photo.id}`}>
	        		<div className="singPic">
	        		<li><img src={photo.url}
	        	 alt=""/>
	        		</li>
	        		<div className="photoImgTitle"><p>Team {photo.id}</p></div>
	        		</div>
                </Link>
	        		)

	        		
	        	})}
        	</ul>

        </div>
     
    )
  },
})