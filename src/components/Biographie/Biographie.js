import BlocTitle from "../BlocTitle/BlocTitle";
import {  Link } from "react-router-dom";
import profilImg from '../../assets/images/profil2.jpg';
import "./biographie.css";

function Biographie () {
    return (
            <>
                <div className="biographie">
                    <BlocTitle smallTitle={'BIOGRAPHIE'} bigTitle={'QUI SUIS-JE ?'} />
                    <div className="bloc_content">
                        <div className="img_profil">
                            <img src={profilImg} alt="profil" />
                        </div>
                        <div className="detail_profil">
                            <div className="bloc_head">
                                <div className="about_title">A propos de moi</div>
                                <div className="about_details">Jean Thierry Lalong Détails</div>
                                <div className="about_description">
                                    <p>Monotonectally orchestrate professionals supply chains whereas are metrics. Globally procrastinate backward-compatible application the action items. Collaboratively enhance extensibl collaboration and it's through interdependent opportunities.</p>
                                </div>
                            </div>
                            <div className="bloc_detail_profil">
                                <div className="info_item">
                                    <div className="info_content">
                                        <h2 className="label">Nom</h2>
                                        <p className="description_info">Jean Thierry Lalong</p>
                                    </div>
                                </div>
                                <div className="info_item">
                                    <div className="info_content">
                                        <h2 className="label">Email</h2>
                                        <p className="description_info">larrylalong20@gmail.com</p>
                                    </div>
                                </div>
                                <div className="info_item">
                                    <div className="info_content">
                                        <h2 className="label">Addresse</h2>
                                        <p className="description_info">Tradex simbock, Yaoundé</p>
                                    </div>
                                </div>
                                <div className="info_item">
                                    <div className="info_content">
                                        <h2 className="label">Telephone</h2>
                                        <p className="description_info">+237 694032929</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dowload">
                                <div className="btn_dowload">
                                    <Link to="/"><i className="fa fa-download"></i> Download CV</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Biographie;