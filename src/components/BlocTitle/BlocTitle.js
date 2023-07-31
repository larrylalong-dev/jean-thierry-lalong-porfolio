import "./blocTitle.css";

function BlocTitle (props)  {
    const {smallTitle, bigTitle} = props;
    return (
        <>
            <div className="BlocTitle container">
                <div className="bloc_title">
                    <h4 className="small_title">{smallTitle}</h4>
                    <h3 className="big_title">{bigTitle}</h3>
                </div>
            </div>
        </>
    )
}

export default BlocTitle;