import AppLogo from "../AppLogo";
import { Row, Col } from "@/components/GridSystem";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Row>
                {/* Row1: Liên hệ */}
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

                {/* Row2: Về F8 */}
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>VỀ F8</h3>
                    <ul className={styles.footerList}>
                        <li>
                            <Link to="#!">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to="#!">Liên hệ</Link>
                        </li>
                        <li>
                            <Link to="#!">Điều khoản</Link>
                        </li>
                        <li>
                            <Link to="#!">Bảo mật</Link>
                        </li>
                    </ul>
                </Col>

                {/* Row3: Hỗ trợ */}
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>HỖ TRỢ</h3>
                    <ul className={styles.footerList}>
                        <li>
                            <Link to="#!">Chính sách thanh toán</Link>
                        </li>
                        <li>
                            <Link to="#!">Chính sách vận chuyển</Link>
                        </li>
                        <li>
                            <Link to="#!">Chính sách kiểm hàng</Link>
                        </li>
                        <li>
                            <Link to="#!">Quy định về giá</Link>
                        </li>
                    </ul>
                </Col>

                {/* Row4: Công cụ */}
                <Col span={12} sm={6} lg={3}>
                    <h3 className={styles.footerTitle}>CÔNG CỤ</h3>
                    <ul className={styles.footerList}>
                        <li>
                            <Link to="#!">Tạo CV xin việc</Link>
                        </li>
                        <li>
                            <Link to="#!">Rút gọn liên kết</Link>
                        </li>
                        <li>
                            <Link to="#!">Clip-path maker</Link>
                        </li>
                        <li>
                            <Link to="#!">Snippet generator</Link>
                        </li>
                        <li>
                            <Link to="#!">CSS Grid generator</Link>
                        </li>
                    </ul>
                </Col>
            </Row>

            <p className={styles.footerCopyright}>© 2018 - 2026 F8. Nền tảng học lập trình hàng đầu Việt Nam.</p>
        </footer>
    );
}
export default Footer;
