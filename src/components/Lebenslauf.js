import "./Lebenslauf.css";
import { useState } from 'react';

//videos
import videoIdesis from '../media/videos/program.mp4';
import videoRobot from '../media/videos/robot.mp4';
import videoRobotCool from '../media/videos/robot-cool.mp4';
import videoPhy from '../media/videos/phy.mp4';
import videoSchool from '../media/videos/school.mp4';
import videoProgramming from '../media/videos/programming.mp4';


const Lebenslauf = () => {
    const [bg, setBg] = useState('');

    const setBGimage = (url) => {
        setBg(url)
    }



    return (
        <>
            <div className="backgroundVideo" >
                <video autoPlay muted loop id="myVideo" type="video/mp4" src={bg}>
                </video>
            </div>
            <h2 className="heading">Mein Lebenslauf</h2>
            <div className="main-container">

                <div className="timeline" id="timeline">

                    <div className="container left"
                        onMouseOver={() => {
                            setBGimage(videoIdesis)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2022</div>
                        <div className="content">
                            <h2>Praktikum idesis</h2>
                            <p>
                                Praktikum für die Umschulung zum Fachinformatiker für Anwendungsentwicklung -> Zeugnis wird noch eingebunden
                            </p>
                        </div>
                    </div>
                    <div className="container right"
                        onMouseOver={() => {
                            setBGimage(videoProgramming)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2020-2023</div>
                        <div className="content">
                            <h2>Umschulung Fachinformatiker</h2>
                            <p>
                                Umschulung zum Fachinformatiker für Anwendungsentwicklung -> <a href="./media/pdf/ihk.pdf">hier zum Zeugnis</a>
                            </p>
                        </div>
                    </div>
                    <div className="container left"
                        onMouseOver={() => {
                            setBGimage(videoRobotCool)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2018-2019</div>
                        <div className="content">
                            <h2>fsk engineering</h2>
                            <p>
            Programmierung von Robotersystemen in der Automobilindustrie -> <a
                                    href="./media/pdf/Zeugnis_Eiteneuer.docx.pdf">hier zum
                                    Zeugnis</a>
                            </p>
                        </div>
                    </div>
                    <div className="container right"
                        onMouseOver={() => {
                            setBGimage(videoRobot)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2016-2018</div>
                        <div className="content">
                            <h2>Oruc Industriemontage</h2>
                            <p>
                                Elektrische und pneumatische Montage von Robotergreifsystemen in der Automobilindustrie
                            </p>
                        </div>
                    </div>
                    <div className="container left"
                        onMouseOver={() => {
                            setBGimage(videoPhy)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2012-2015</div>
                        <div className="content">
                            <h2>Ausbildung Physikalisch-technischer Assistent</h2>
                            <p>
            Ausbildung zum Physikalisch-technischen Assistenten -> <a
                                    href="./media/pdf/Berufsabschluss.pdf">hier zum Zeugnis</a>
                            </p>
                        </div>
                    </div>
                    <div className="container right"
                        onMouseOver={() => {
                            setBGimage(videoSchool)
                        }}
                        onMouseLeave={() => {
                            setBGimage('')
                        }}
                    >
                        <div className="date">2012-2015</div>
                        <div className="content">
                            <h2>Fachabitur</h2>
                            <p>
                                Fachabitur im Bereich Physik
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Lebenslauf;