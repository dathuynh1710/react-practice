import { Link } from "react-router-dom";
import styles from "./CardCourse.module.scss";
import clsx from "clsx";

// Icons
import iconStudent from "/icons/student.svg";
import iconViews from "/icons/views.svg";
import iconTime from "/icons/clock.svg";

function CourseItem({ data }) {
    return (
        <div className={styles.wrapper}>
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
                    <div className={styles.cardMoreInfo}>
                        <img src={iconStudent} alt="" className={styles.cardMoreInfoIcon} />
                        <span className={styles.cardMoreInfoText}>{data.students}</span>
                    </div>

                    <div className={clsx(styles.cardMoreInfo, styles.cardMoreInfoViews)}>
                        <img src={iconViews} alt="" className={styles.cardMoreInfoIcon} />
                        <span className={styles.cardMoreInfoText}>{data.views}</span>
                    </div>

                    <div className={styles.cardMoreInfo}>
                        <img src={iconTime} alt="" className={styles.cardMoreInfoIcon} />
                        <span className={styles.cardMoreInfoText}>{data.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
