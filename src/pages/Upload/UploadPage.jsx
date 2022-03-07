import "./UploadPage.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import cycle from '../../Assets/Images/Upload-video-preview.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import upLoad from '../../Assets/Icons/upload.svg';

function Page(){
    return(
        <main className='main'>
            <section className="main__wrap">
                <Navbar />
                <h1 className="upload-pageHeader">Upload Video</h1>
                <span className='upload-form__label'>Video Thumbnail</span>
                <div className="upload-pageform">
                    <img className="upload-page-hero" src={cycle} alt="uploaded-hero" />
                    <form 
                    className='upload-form'
                    action="/">
                        <div className="upload-form__head">
                            <label
                            className="upload-form__label">
                                title your video
                            </label>
                            <input 
                            className='upload-form__input' 
                            type="text" 
                            name='form__input--title' 
                            placeholder='Add a title to your video' 
                            />
                        </div>
                        <div className="upload-form__body">
                            <label className='upload-form__label'>
                                add a video description
                            </label>
                            <textarea 
                            className='upload-form__textarea' 
                            name='text-description' 
                            type="text" 
                            placeholder='Add a description to your video' 
                            />
                        </div>
                    </form>
                </div>
                <div className="upload-form__button">
                        <p className="cancel__wrap--tablet">
                            <Link className="cancel__button" to="/">CANCEL</Link>
                        </p>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button
                                image={upLoad}
                                text='publish'
                                onClick={() => {
                                    alert("Your video has been uploaded!");
                                }} 
                            />
                        </Link>
                        <p className="cancel__wrap--mobile">
                            <Link className="cancel__button" to="/">CANCEL</Link>
                        </p>
                    </div>
            </section>
        </main>
    )
}

export default Page