import BlocTitle from "../BlocTitle/BlocTitle";
import './competence.css';
import CompetenceBlock from "../miniComponents/CompetenceBlock/CompetenceBlock";

const Competence = () => {
    return (
        <>
            <div className="competence">
                <BlocTitle smallTitle={'COMPETENCE'} bigTitle={'Mes Compétences'} />
                <div className="compentence_list">
                    <CompetenceBlock/>
                    <CompetenceBlock/>
                    <CompetenceBlock/>
                    <CompetenceBlock/>
                    <CompetenceBlock/>
                    <CompetenceBlock/>
                </div>
            </div>
        </>
    )
}

export default Competence;