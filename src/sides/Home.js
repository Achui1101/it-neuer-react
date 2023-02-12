import Header from "../components/Header";

import profileImage from "../media/images/kuka (1).jpg";

const Home = () => {
    return (
        <div className="side">
            <Header
                image={profileImage}
                title="Hallo, ich bin Christian Eiteneuer"
                text={<p>
                    Entdecken Sie die Leidenschaft und das Fachwissen eines erfahrenen Frontend-Entwicklers!
                    <br /><br />Ich bin Fachinformatiker für Anwendungsentwicklung mit fundierten Kenntnissen in HTML, CSS und JavaScript.
                    <br /><br />Ich suche eine neue Herausforderung und die Möglichkeit, meine Talente in Ihrem Unternehmen unter Beweis zu stellen. Lassen Sie mich Teil Ihres Entwicklerteams werden und gemeinsam erfolgreiche Projekte realisieren.
                </p>
                }
            />
        </div>
    );
};
export default Home;