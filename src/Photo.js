import React from 'react';
import albumData from './database/Albums.json'




export default React.createClass({
    componentWillMount: function() {
        var album = albumData.albums.filter((item)=> {
            return Number(item.id) === Number(this.props.match.params.albumId)
        })[0];
        var photo = album['photos'].filter((photo)=> {
            return Number(this.props.match.params.photoId) === Number(photo.id); 
        });


        this.setState({
            photo: photo[0]
        });
        
    },

    handleBack(e){
        e.preventDefault()
        this.props.history.goBack()
    },

    render: function(){
    
    return(

        <div className="myPhoto">
        <div className="singlePhotoTitle">

            <div>
                <ul className="backButton">
                    <li>
                        <button onClick={this.handleBack}>Back To Albums</button>
                    </li>  
                </ul>
            </div>

                <div className="largeImage">
                    <p>Photo {this.state.photo.id}</p>
                    <img src={this.state.photo.url} alt="" />
                </div>
            </div>

        </div>
     
    )
  },
})