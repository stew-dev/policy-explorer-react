import './index.css';
import {useEffect, useState} from "react";
import Result from "./components/Result";
import FilterBar from "./components/FilterBar";

const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const URL = "https://app.overton.io/documents.php?query=title%3A%22air+quality%22+or+%22pollution%22&source=govuk&sort=citations&format=json&api_key=2e73d1-689eadef86e9ce113bc904eb09d4d52c"
        fetch(URL).then(r => r.json()).then(r => setData(r))

    }, [])


    if (!data ) {
        return
    }

    return (
        <>
            <div id="introduction">
                <header className="header">
                    <h1>Air Quality Policy Explorer</h1>
                </header>
                <p className={"intro"}>This app shows policy documents from UK government departments and agencies that have the phrases <i>air
                    quality</i> or <i>pollution</i> in their titles.</p>
            </div>
            <FilterBar facets={data.facets}/>
            <section className={"results"} id="search-results">
                {data.results.map(d => <Result key={d} result={d}/>)}
            </section>
        </>
    );
}

export default App;
