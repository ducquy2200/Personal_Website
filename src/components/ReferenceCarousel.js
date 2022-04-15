import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar0 from './media/references/courtney-zinn.jpg';
import avatar1 from './media/references/jordan-st-jacques.jpg';
import avatar2 from './media/references/razmin-soltani.jpg';
import avatar3 from './media/references/joy-xu.jpg';
import avatar4 from './media/references/almen-ng.jpg';

const ReferenceCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >
            <>
                <img src={avatar0} alt="Courtney Zinn" />
                <div className="myCarousel">
                    <h3>Courtney Zinn</h3>
                    <p>Director of Digital Kitchener Innovation Lab<br/>City of Kitchener</p>
                    <a href="https://www.linkedin.com/in/courtneyzinn/" target="_blank" rel="noopener noreferrer" className="reference-link">LinkedIn Profile</a>
                </div>
            </>
            <>
                <img src={avatar1} alt="Jordan St Jacques"/>
                <div className="myCarousel">
                    <h3>Jordan St Jacques</h3>
                    <p>President and Lead Digital Marketer<br/>Digitera Interactive</p>
                    <a href="https://www.linkedin.com/in/jordanstjacques/" target="_blank" rel="noopener noreferrer" className="reference-link">LinkedIn Profile</a>
                </div>
            </>
            <>
                <img src={avatar2} alt="Razmin Soltani" />
                <div className="myCarousel">
                    <h3>Razmin Soltani</h3>
                    <p>Senior Software Engineer<br/>Walletifai</p>
                    <a href="https://www.linkedin.com/in/razmin/" target="_blank" rel="noopener noreferrer" className="reference-link">LinkedIn Profile</a>
                </div>
            </>
            <>
                <img src={avatar3} alt="Joy Xu" />
                <div className="myCarousel">
                    <h3>Joy Xu</h3>
                    <p>Founder and Chief Executive Officer<br/>Felicity</p>
                    <a href="https://www.linkedin.com/in/joyxuprofile/" target="_blank" rel="noopener noreferrer" className="reference-link">LinkedIn Profile</a>
                </div>
            </>
            <>
                <img src={avatar4} alt="Almen Ng" />
                <div className="myCarousel">
                    <h3>Almen Ng</h3>
                    <p>Tech Lead and Software Engineer<br/>Felicity</p>
                    <a href="https://www.linkedin.com/in/almen-ng/" target="_blank" rel="noopener noreferrer" className="reference-link">LinkedIn Profile</a>
                </div>
            </>
        </Carousel>
    )
}

export default ReferenceCarousel
