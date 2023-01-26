import "../index.css"
import TextButton from "../components/TextButton";
import {useState} from "react";

const FilterBar = ({facets}) => {
    const [showMenu, setShowMenu] = useState(false);

    const sortFilter = (a, b) => {
        const countA = a.doc_count;
        const countB = b.doc_count;
        let comparison = 0;

        if (countA > countB) {
            comparison = -1;
        } else if (countA < countB) {
            comparison = 1;
        }
        return comparison;
    }

    const sortedAuthors = facets.authors.sort(sortFilter).slice(0, 5)
    const sortedTopics = facets.topics.sort(sortFilter).slice(0, 5)
    const sortedYears = facets.published_year.sort(sortFilter).slice(0, 5)


    const filterList = (items, title) => {
        return <div className={"filter-list-container"}>
            <h3>{title}</h3>
            <ul className={"filter-list"}>{items.map(i => <li className={"filter-item"} key={i.key}>{i.key}</li>)}</ul>
        </div>
    }

    const filterMenu = () => {
        return <div style={showMenu ? {display: "flex"} : {display: "none"}} className={"filter-menu"}>
            {filterList(sortedAuthors,"Author")}
            {filterList(sortedYears, "Published Year")}
            {filterList(sortedTopics, "Topics")}
        </div>
    }

    return <div className={"filter-bar"}>
        <TextButton text={"Filter"} onClick={() => setShowMenu(!showMenu)}/>
        {filterMenu()}
    </div>

}

export default FilterBar