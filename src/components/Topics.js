import Chip from "../components/Chip";
import {useState} from "react";
import "../index.css"
import TextButton from "../components/TextButton";

const Topics = ({topics}) => {
    const [showAll, setShowAll] = useState(false)
    const topicsList = showAll ? topics : topics.slice(0, 3)

    const getButtonText = () => {
        return showAll ? 'Show less' : 'Show more'
    }

    return <ul className={"topics"}>
        {topicsList.map(t => <Chip key={t} text={t}/>)}
        <TextButton text={getButtonText()} onClick={() => setShowAll(!showAll)}/>
    </ul>

}

export default Topics