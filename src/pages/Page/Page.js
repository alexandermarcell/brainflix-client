import './Page.scss';
import React from 'react';
import cycle from '../../Assets/Images/Upload-video-preview.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import upLoad from '../../Assets/Icons/upload.svg';

function Page(){
    return(
        <main className='main'>
            <section className="main-wrap">
                <Navbar />
                <h1 className="page-header">upload video</h1>
                <img className="video-hero" src={cycle} alt="uploaded-hero" />
                <div className="page-form">
                    <label htmlFor="" className="page-form__label">
                        title your video
                    </label>
                    <input className='page-form__input' type="text" name='video-title' placeholder='Add a title to your video' />
                    <label className='page-form__label'>
                        add a video description
                    </label>
                    <textarea className='page-form__textarea' name='text-description' type="text" placeholder='Add a description to your video' />
                    <Button
                        image={upLoad}
                        text='publish' 
                        />
                </div>
            </section>
        </main>
    )
}

export default Page