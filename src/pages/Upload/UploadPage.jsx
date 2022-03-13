import axios from "axios";
import React from 'react';
import "./UploadPage.scss";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import publish from '../../Assets/Icons/publish.svg';
import cycle from '../../Assets/Images/Upload-video-preview.jpg';

const Url = "http://localhost:5500/api/v1/videos/";

function Page(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!e.target.title.value || !e.target.description.value){
            return;
        }

        axios
            .post(Url, {
                title: e.target.title.value,
                description: e.target.description.value,
            })
            .catch((error) =>{
                console.log("There has been an error: ", error);
            })

        alert( "Your video has been uploaded!")
        props.history.push('/');
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
                                name='title' 
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
                                name='description' 
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
                                <Button
                                    image={publish}
                                    text='publish'
                                />
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