import React from "react";
import Main from '../../components/Main/Main';
import videoDetails from '../../Assets/Data/video-details.json';

class HomePage extends React.Component{
    state = {
        videoDetails: videoDetails,
        currentVideo: videoDetails[0]
      }
    
      handleVideoChange = (id) => {
        const newVideoId = this.state.videoDetails.findIndex(videoDetails => id === videoDetails.id)
        this.setState({
          currentVideo: this.state.videoDetails[newVideoId]
        })
      }

    render() {
        return(
            <div>
                <Main
                videoDetails={this.state.videoDetails}
                currentVideo={this.state.currentVideo}
                handleVideoChange={this.handleVideoChange}
                />
            </div>
        )
    }
}

export default HomePage