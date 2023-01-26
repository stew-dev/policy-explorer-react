import Topics from "../components/Topics";
import "../index.css"

const Result = ({result}) => {
    return <li className={"result"}>
        <div className={"text-info"}>
            <h1 className={"title"}>{result.title}</h1>
            <p className={"snippet"}>{result.snippet}</p>
            <p>{result.published_on}</p>
            {result.topics && <Topics topics={result.topics}/>}
            {result.authors && <ul className={"authors"}>
                {result.authors.map(a => <li key={a} className={"author"}>{a}</li>)}
            </ul>}
        </div>
        <img src={result.thumbnail} className={"thumbnail"} alt={'policy document'}/>
    </li>
}

export default Result