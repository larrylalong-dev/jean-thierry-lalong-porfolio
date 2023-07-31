import {  Link } from "react-router-dom";
import './competenceBlock.css';

const CompetenceBlock = () => {
    return (
        <>
            <div className="competence_item">
                <div className="competence_content">
                    <div className="compt_icon"><i class="fa-solid fa-laptop-code"></i></div>
                    <div className="compt_detail">
                        <h2 className="compt_title">Developpeur web</h2>
                        <p className="compt_description">Developpement de site web avec responsive et seo</p>
                    </div>
                </div>
                <div className="competence_read_more">
                    <Link to="/">En savoir plus</Link>
                </div>
            </div>
        </>
    )
}

export default CompetenceBlock;