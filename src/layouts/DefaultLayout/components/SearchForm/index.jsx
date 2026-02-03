import { useState } from "react";
import styles from "./SearchForm.module.scss";
import iconSearch from "/icons/search.svg";
import DropdownStyles from "@/components/DropdownStyles";
import SearchResult from "../SearchResult";
function SearchForm() {
    const [showResult, setShowResult] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <img src={iconSearch} alt="search-form" className={styles.searchIcon} />
                <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="Tìm kiếm khoá học, bài viết, video,..."
                    onFocus={() => setShowResult(true)}
                    onBlur={() => setShowResult(false)}
                />
            </div>
            {showResult && (
                <DropdownStyles>
                    <SearchResult />
                </DropdownStyles>
            )}
        </div>
    );
}

export default SearchForm;
