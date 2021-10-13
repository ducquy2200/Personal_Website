import React from 'react';
import author from './media/profile-pic.png';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        I am a dedicated and hardworking 2nd Year Software Engineering student who has an inspiring desire to learn and improve in developing modern technology. I possess a continuous improving mindset and creativity which allows me to acquire success and productive results at both school and work. Here is a summary of my skills:
                    </p>
                    <p>
                        <ul>
                            <li>Resourceful work and volunteering experiences with great social and technological involvements</li>
                            <li>Excellent problem solving and interpersonal skills</li>
                            <li>A dedicated individual with a inspired desire to learn and improve in developing modern technology</li>
                            <li>Exemplary teamwork coordination skills capable of working in both small and large-scale organizations</li>
                            <li>Diligent and responsible with the ability to work in fast-paced workplaces while ensuring sufficient progress</li>
                        </ul>
                    </p>
                    <p>
                        Here are some of my technical skills:
                    </p>
                    <p>
                        <ul>
                            <li>Programming Languages: JavaScript, PHP, Java, Dart, Python, C/C++, C#, Git, HTML/CSS, SQL, Elixir, Bash</li>
                            <li>Framework/Database: React.js, Vue.js, Node.js, Laravel, Selenium, Heroku, Django, Flutter, MySQL, JQuery</li>
                            <li>Software/Other: Windows, Linux, VS Code, IntelliJ, Eclipse, Vim, Atom, Android Studio, cPanel, Postman, AWS</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
