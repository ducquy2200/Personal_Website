import React from 'react';
import author from './media/profile-pic.png';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12 my-auto">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        I am a dedicated and hardworking 2nd Year Software Engineering student at University of Waterloo who has an inspiring desire to learn and improve in developing modern technology. I possess a continuous improving mindset and creativity which allows me to acquire success and productive results at both school and work. Here is a summary of my skills:
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
                            <li><b>Programming Languages:</b> JavaScript, PHP, Java, Dart, Python, C/C++, C#, Git, HTML/CSS, SQL, Elixir, Bash</li>
                            <li><b>Frontend:</b> React.js, Vue.js, Flutter, Boostrap, JQuery</li>
                            <li><b>Backend/Database:</b> Node.js, Laravel, Selenium, Heroku, Django, Flutter, MySQL</li>
                            <li><b>Unit/Feature Testing:</b> PHPUnit, JUnit, Cypress</li>
                            <li><b>Hosting platform:</b> AWS, cPanel, Heroku, GitHub (Page)</li>
                            <li><b>Tools/Software:</b> Slack, Trello, Jira, Docker, cPanel, Postman, AWS, Azure, Git</li>
                            <li><b>Text Editors:</b> VS Code, IntelliJ, Eclipse, Vim, Atom, Android Studio</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
