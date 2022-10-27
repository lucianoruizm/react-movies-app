import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({search: searchText})
        // navigate("/?search=" + searchText)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                    <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..."/>
                    <button className={styles.searchButton} type="submit">
                        <FaSearch size={20} />
                    </button>
            </div>
        </form>
    )
}
