import { Link } from "react-router-dom";
import styles from "./CardCourse.module.scss";

function CourseItem({ data }) {
    return (
        <div className={styles.wrapper}>
            {/* Logic hiển thị 1 item giữ nguyên như cũ */}
            <Link to={data.path || "/"} className={styles.cardImgWrap}>
                <img src={data.thumbnail} alt={data.title} className={styles.cardImg} />
            </Link>

            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>
                    <Link to={data.path || "/"} className={styles.cardTitleLink}>
                        {data.title}
                    </Link>
                </h3>

                <div className={styles.cardPrice}>
                    <span className={styles.cardPriceText}>{data.price}</span>
                </div>

                <div className={styles.cardRow}>
                    {data.stats.map((stat, index) => (
                        <div className={styles.cardMoreInfo} key={index}>
                            <img src={stat.icon} alt="" className={styles.cardMoreInfoIcon} />
                            <span className={styles.cardMoreInfoText}>{stat.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
