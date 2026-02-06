import { RowCols } from "@/components/GridSystem";
import styles from "./CardCourse.module.scss";
import CourseItem from "./CourseItem";
import { courseList } from "./coursesData";
function CardCourse() {
    return (
        <>
            <h2 className={styles.courseTitle}>Khoá học miễn phí</h2>
            <RowCols cols={{ base: 4, xl: 3, md: 2 }} className={styles.passRowCols}>
                {courseList.map((course) => (
                    <CourseItem key={course.title} data={course} />
                ))}
            </RowCols>
        </>
    );
}

export default CardCourse;
