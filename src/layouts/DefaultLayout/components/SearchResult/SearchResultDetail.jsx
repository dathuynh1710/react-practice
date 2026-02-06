import { Link } from "react-router-dom";
import styles from "./SearchResult.module.scss";
import { searchData } from "./searchData";

function SearchResultDetail() {
    return (
        <div>
            {searchData.map((section, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{section.heading}</h3>
                        <Link to={section.linkMore} className={styles.cardViewMore}>
                            Xem thêm
                        </Link>
                    </div>
                    <div>
                        {section.items.map((item) => (
                            <Link to="#!" key={item.id} className={styles.cardBodyItem}>
                                <img src={item.thumbnail} alt={item.title} className={styles.cardBodyIcon} />
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchResultDetail;
