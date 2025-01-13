import CollaborationCSS from './CollaborationSection.module.css';

function CollaborationSection() {
    return (
        <div className={CollaborationCSS.container}>
            <h2 className={CollaborationCSS.heading}>
                We collaborate with <span className={CollaborationCSS.highlight}>350+ leading universities and companies</span>
            </h2>
            <div className={CollaborationCSS.logoContainer}>
                <img src="./images/illinois.png" alt="Illinois" />
                <img src="./images/duke.png" alt="Duke" />
                <img src="./images/google.png" alt="Google" />
                <img src="./images/umich.png" alt="University of Michigan" />
                <img src="./images/ibm.png" alt="IBM" />
                <img src="./images/imperial.png" alt="Imperial College London" />
                <img src="./images/stanford.png" alt="Stanford" />
                <img src="./images/penn.png" alt="Penn" />
            </div>
        </div>
    );
}

export default CollaborationSection;