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

    const required = ["authors", "published_year", "topics"];

    const newFacets = Object.entries(facets)
        .filter(([key]) => required.some(r => key === r))


    const FilterList = ({items, title}) => {
        return <div className={"filter-list-container"}>
            <h3>{title}</h3>
            <ul className={"filter-list"}>{items.map(i => <li className={"filter-item"} key={i.key}>{i.key}</li>)}</ul>
        </div>
    }

    const FilterMenu = () => {
        return <div style={showMenu ? {display: "flex"} : {display: "none"}} className={"filter-menu"}>
            {newFacets.map(([key, value]) =>
                <FilterList items={value.sort(sortFilter).slice(0,5)} title={key}/>
            )}
        </div>
    }

    return <div className={"filter-bar"}>
        <TextButton text={"Filter"} onClick={() => setShowMenu(!showMenu)}/>
        <FilterMenu/>
    </div>

}

export default FilterBar