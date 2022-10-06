import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import SubjectCard100 from "../components/SubjectCard100";
import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to get started:</Header>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Geography"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="102"
                    id="1"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="2"
                    subject="101"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
        </div>
    );
}

export default Home;
