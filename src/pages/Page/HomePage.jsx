import React from "react";
import axios from 'axios';
import Main from '../../components/Main/Main';

const Url = "https://project-2-api.herokuapp.com/videos/";
const apiKey="?api_key=d20466a8-1fbd-4c61-b79d-eb89c69fcc10";

class HomePage extends React.Component{
    state = {
        videoDetails: [],
        currentVideo: {},
        comments: []
      }

    componentDidMount() {
      axios
        .get(Url+apiKey)
        .then(response =>{ 
          console.log(response.data);
          this.setState({ videoDetails: response.data })
          const videoId = this.props.match.params.id || response.data[0].id;
          this.getVideoById(videoId);
        })
        .catch((error) => {
          console.log("There is an error: ", error)
        })
    }

    getVideoById = (id) => {
      axios
        .get(Url + id+ apiKey )
        .then((response)=>{
          console.log(response.data)
          this.setState({
            currentVideo: response.data,
            comments: response.data.comments
          });
        })
        .catch((error) => {
          console.log("There is an error: ", error)
        });
    }

    componentDidUpdate(prevProps, prevState){
      const videoId = this.props.match.params.id || this.state.videoDetails[0].id
      if (prevState.currentVideo && prevState.currentVideo.id !== videoId){
        this.getVideoById(videoId)
      }
    }
    

    render() {
      if (this.state.currentVideo === null) return <h2>Video Loading ...</h2>
        return(
            <div>
                <Main
                videoDetails={this.state.videoDetails}
                comments={this.state.comments}
                currentVideo={this.state.currentVideo}
                />
            </div>
        )
    }
}

export default HomePage