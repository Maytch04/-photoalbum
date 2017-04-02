import React from 'react';
import {Link} from 'react-router-dom'
import albumData from './database/Albums.json';
console.log('data',albumData)


export default React.createClass({
  getInitialState() {
    return {
      album: albumData.albums.filter(function(album){
        console.log('prop',this.props.match.params.albumId)
        return Number(album.id) === Number(this.props.match.params.albumId)
      }.bind(this))[0]


    }
  },
  render: function(){
  	
    
    return(
        <div className="myPhotos">
        	<div className="photoTitle">
          
        		<p>Album #</p>
                <h1>{this.props.match.params.albumId}</h1>

        	</div>

            <ul className="sidebarButton">
            {this.state.album.photos.map((photo) => {

                  return(
                  <div key={photo.id} className="sideButton">
                    <Link to ={`/photo/${this.props.match.params.albumId}/${photo.id}`}>
                      
                        <button>Button #</button>  
                     
                    </Link> 
                  </div>    
                  )
                })
              }
            </ul>
            
        	<ul className="photos1List">
	        	{this.state.album.photos.map((photo) =>{
	        		return (
                <Link to ={`/photo/${this.props.match.params.albumId}/${photo.id}`}>
	        		<div className="singPic">
	        		<li key={'album' + photo.id}><img src={photo.url}
	        	 alt=""/>
	        		</li>
	        		<div className="photoImgTitle"><p>Photo #</p></div>
	        		</div>
                </Link>
	        		)

	        		
	        	})}
        	</ul>

        </div>
     
    )
  },
})