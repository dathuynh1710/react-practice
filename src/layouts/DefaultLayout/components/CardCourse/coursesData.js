// Images
import imgCourseStart from "/images/course-start.png";
import imgCourseHtmlBase from "/images/course-html-base.png";
import imgCourseResponsive from "/images/course-responsive.png";
import imgCourseJsBase from "/images/course-js-base.png";
import imgCourseHtmlPro from "/images/course-html-css-pro.png";
import imgCourseSass from "/images/course-sass.png";
import imgCourseJsAdvance from "/images/course-js-advance.png";
import imgCourseUbuntu from "/images/course-ubuntu.png";
import imgCourseReact from "/images/course-react-base.png";
import imgCourseNode from "/images/course-node-js.png";

// Icons
import iconStudent from "/icons/student.svg";
import iconViews from "/icons/views.svg";
import iconTime from "/icons/clock.svg";

export const icons = { iconStudent, iconViews, iconTime };

export const courseList = [
    {
        id: 1,
        thumbnail: imgCourseStart,
        title: "Kiến thức nhập môn IT",
        price: "Miễn phí",
        path: "/courses/nhap-mon",
        stats: [
            { icon: iconStudent, text: "136.257" },
            { icon: iconViews, text: "9" },
            { icon: iconTime, text: "3h12p" },
        ],
    },
    {
        id: 2,
        thumbnail: imgCourseHtmlBase,
        title: "Responsive Với Grid System",
        price: "Miễn phí",
        path: "/courses/responsive",
        stats: [
            { icon: iconStudent, text: "47.821" },
            { icon: iconViews, text: "34" },
            { icon: iconTime, text: "6h31p" },
        ],
    },
    {
        id: 3,
        thumbnail: imgCourseResponsive,
        title: "HTML CSS từ Zero đến Hero",
        price: "Miễn phí",
        path: "/courses/html-css",
        stats: [
            { icon: iconStudent, text: "200.298" },
            { icon: iconViews, text: "117" },
            { icon: iconTime, text: "19h4p" },
        ],
    },
    {
        id: 4,
        thumbnail: imgCourseHtmlPro,
        title: "HTML CSS Pro",
        price: "Miễn phí",
        path: "/courses/html-css-pro",
        stats: [
            { icon: iconStudent, text: "107.308" },
            { icon: iconViews, text: "9" },
            { icon: iconTime, text: "3h12p" },
        ],
    },
    {
        id: 5,
        thumbnail: imgCourseSass,
        title: "Ngôn ngữ Sass",
        price: "Miễn phí",
        path: "/courses/sass",
        stats: [
            { icon: iconStudent, text: "17.211" },
            { icon: iconViews, text: "19" },
            { icon: iconTime, text: "6h18p" },
        ],
    },
    {
        id: 6,
        thumbnail: imgCourseJsBase,
        title: "Lập trình Javascript Cơ Bản",
        price: "Miễn phí",
        path: "/courses/javascript-basic",
        stats: [
            { icon: iconStudent, text: "214.361" },
            { icon: iconViews, text: "117" },
            { icon: iconTime, text: "29h5p" },
        ],
    },
    {
        id: 7,
        thumbnail: imgCourseJsAdvance,
        title: "Lập trình Javascript Nâng Cao",
        price: "Miễn phí",
        path: "/courses/javascript-advanced",
        stats: [
            { icon: iconStudent, text: "41.121" },
            { icon: iconViews, text: "19" },
            { icon: iconTime, text: "8h32p" },
        ],
    },
    {
        id: 8,
        thumbnail: imgCourseUbuntu,
        title: "Làm việc với Terminal & Ubuntu",
        price: "Miễn phí",
        path: "/courses/ubuntu",
        stats: [
            { icon: iconStudent, text: "21.204" },
            { icon: iconViews, text: "28" },
            { icon: iconTime, text: "4h59p" },
        ],
    },
    {
        id: 9,
        thumbnail: imgCourseReact,
        title: "Xây Dựng Website với ReactJs",
        price: "Miễn phí",
        path: "/courses/reactjs",
        stats: [
            { icon: iconStudent, text: "78.017" },
            { icon: iconViews, text: "112" },
            { icon: iconTime, text: "27h32p" },
        ],
    },
    {
        id: 10,
        thumbnail: imgCourseNode,
        title: "Node & ExpressJS",
        price: "Miễn phí",
        path: "/courses/nodejs",
        stats: [
            { icon: iconStudent, text: "48.941" },
            { icon: iconViews, text: "36" },
            { icon: iconTime, text: "12h8p" },
        ],
    },
];
