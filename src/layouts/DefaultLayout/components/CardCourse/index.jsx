import { Row, Col } from "@/components/GridSystem";
import styles from "./CardCourse.module.scss";
import CourseItem from "./CourseItem";
import { courseList } from "./coursesData";

function CardCourse() {
    return (
        <>
            <h2 className={styles.courseTitle}>Khoá học miễn phí</h2>
            <Row>
                {courseList.map((course) => (
                    <Col span={6} md={4} xl={3} key={course.id}>
                        <CourseItem data={course} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CardCourse;
