import axios from "axios";
import React from 'react';
import "./UploadPage.scss";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import publish from '../../Assets/Icons/publish.svg';
import cycle from '../../Assets/Images/Upload-video-preview.jpg';
import VideoList from "../../components/VideoList/VideoList";

const Url = "http://localhost:5500/api/v1/videos/";

function Page(){
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(Url, {
                title: e.target.title.value,
                channel: 'Tom Brady',
                image: '',
                description: e.target.description.value,
            })
            .then((response) => {
                console.log("Submitted!");
            })
            .catch((error) =>{
                console.log("There has been an error: ", error);
            })

        alert( "Your video has been uploaded!")
        VideoList.push('/');
    }
    return(
        <main className='upload'>
            <section className="upload__wrap">
                <Navbar />
                <h1 className="upload__pageHeader">
                    Upload Video
                </h1>
                <div className="upload__container">
                    <div className="uploadHeaderImage">    
                        <h2 className='uploadForm__label'>
                            Video Thumbnail
                        </h2>
                        <img className="upload__thumbnail" src={cycle} alt="uploaded-hero" />
                    </div>
                    <div className="upload__form">
                        <form 
                        className='uploadForm'
                        onSubmit={handleSubmit}
                        >
                            <div className="uploadForm__head">
                                <label
                                className="uploadForm__label">
                                    title your video
                                </label>
                                <input 
                                className='uploadForm__input' 
                                type="text" 
                                name='input' 
                                placeholder='Add a title to your video'
                                required 
                                />
                            </div>
                            <div className="uploadForm__body">
                                <label className='uploadForm__label'>
                                    add a video description
                                </label>
                                <textarea 
                                className='uploadForm__textarea' 
                                name='text-description' 
                                type="text" 
                                placeholder='Add a description to your video' 
                                />
                            </div>
                            <div className="uploadForm__button">
                                <p className="cancel__wrap--tablet">
                                    <Link className="button--link" to="/">
                                        CANCEL
                                    </Link>
                                </p>
                                <Link to="/" className="button--link">
                                    <Button
                                        image={publish}
                                        type='submit'
                                        text='publish'
                                    />
                                </Link>
                                <p className="cancel__wrap--mobile">
                                    <Link className="cancel__button" to="/">CANCEL</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page