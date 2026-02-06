import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./DefaultLayout.module.scss";

import iconNotification from "/icons/notifi.svg";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
function DefaultLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainContent}>
                <Navbar />
                <div className={styles.content}>
                    <Outlet />
                </div>
                <div className={styles.modalNotification}>
                    <Modal
                        closeTimeoutMS={300}
                        trigger={
                            <Button className={styles.modalNotificationBtn}>
                                <img src={iconNotification} alt="" className={styles.iconSvg} />
                            </Button>
                        }
                    >
                        <div className={styles.modalHeading}>
                            <h2 className={styles.modalTitle}>Bảng tin</h2>
                        </div>
                        <div className={styles.modalContent}>
                            <h3>
                                <span className={styles.note}>#</span>TRẢI NGHIỆM HỌC THỬ REACT NATIVE, DEVOPS, C++ VÔ
                                CÙNG CHẤT LƯỢNG CÙNG F8
                            </h3>
                            <p>
                                Trình làng khóa học mới. Để học viên mới cảm nhận rõ chất lượng giảng dạy, F8 đã xây
                                dựng 3 lớp học thử với lộ trình rõ ràng và chỉn chu
                            </p>
                            <p>🎯 Lợi ích khi tham gia lớp học thử</p>

                            <p>✅ Học và hỏi đáp trực tiếp với giảng viên</p>
                            <p>✅ Trợ giảng hỗ trợ xuyên suốt, fix bug ngay tại lớp</p>
                            <p>✅ Được chấm & chữa bài tập về nhà</p>

                            <p>
                                👉 Nếu bạn đang tìm một môi trường học lập trình nghiêm túc, thực tế và giàu cảm hứng,
                                hãy thử ngay một buổi học tại F8. Biết đâu, đó chính là bước khởi đầu cho hành trình IT
                                của bạn! Menu khóa học bao gồm:
                            </p>

                            <h3>C++ (Miễn phí) – Nền tảng vững chắc cho người mới</h3>

                            <p>
                                Phù hợp với sinh viên IT hoặc những ai bắt đầu học lập trình. Nội dung buổi học thử gồm:
                            </p>

                            <p>
                                <img
                                    alt="image.png"
                                    src="https://files.fullstack.edu.vn/f8-prod/public-images/68ac346074589.png"
                                ></img>
                            </p>
                            <p>
                                Giảng viên đứng lớp là thầy{" "}
                                <em>
                                    <strong>Phan Đức Hải</strong>
                                </em>
                                .
                            </p>
                            <p>
                                <em>Một số thành tích nổi bật của thầy Hải:</em>
                            </p>
                            <ul>
                                <li>
                                    Giải Nhất Học sinh giỏi Tin học tỉnh Hà Tĩnh 2018 (Thủ khoa, 20/20 điểm tuyệt đối)
                                </li>
                                <li>Giải Nhì Học sinh giỏi Tin học tỉnh Hà Tĩnh 2015</li>
                                <li>Giải Ba Tin học trẻ tỉnh Hà Tĩnh 2016</li>
                                <li>Giải Ba Olympic Tin học Sinh viên Việt Nam 2021 (Khối chuyên Tin)</li>
                                <li>Giải Khuyến khích ICPC Châu Á – Thái Bình Dương (vòng loại)</li>
                                <li>Các giải thưởng khác: Tin học trẻ, HSG Tin học tỉnh (2015, 2016)</li>
                            </ul>
                            <p>
                                <em>
                                    <strong>
                                        Link đăng ký:{" "}
                                        <a
                                            href="https://forms.gle/1ee37tp3AGAh49Bp7"
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            https://forms.gle/1ee37tp3AGAh49Bp7
                                        </a>
                                    </strong>
                                </em>
                            </p>
                        </div>
                    </Modal>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
