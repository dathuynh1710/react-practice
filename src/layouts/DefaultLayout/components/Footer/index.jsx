import AppLogo from "../AppLogo";
import { Row, Col } from "@/components/GridSystem";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Row>
                <Col span={12} sm={6} lg={3}>
                    <AppLogo white />
                    <ul className={styles.contactList}>
                        <li>
                            <strong>Điện thoại:</strong> 08 1919 8989
                        </li>
                        <li>
                            <strong>Email:</strong> contact@f8.edu.vn
                        </li>
                        <li>
                            <strong>Địa chỉ liên hệ:</strong> Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội
                        </li>
                    </ul>
                </Col>
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>VỀ F8</h3>
                </Col>
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>HỖ TRỢ</h3>
                </Col>
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>CÔNG CỤ</h3>
                </Col>
            </Row>

            <p className={styles.footerCopyright}>© 2018 - 2026 F8. Nền tảng học lập trình hàng đầu Việt Nam.</p>
        </footer>
    );
}
export default Footer;
