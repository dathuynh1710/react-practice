import courseJsBase from "/images/course-js-base.png";
import courseJsAdvance from "/images/course-js-advance.png";
import courseJsPro from "/images/course-js-pro.png";
import post1 from "/images/result-1.jpg";
import post2 from "/images/result-2.png";
import post3 from "/images/result-3.jpg";
import post4 from "/images/result-4.jpg";
import post5 from "/images/result-5.jpg";
import post6 from "/images/result-6.jpg";
export const searchData = [
    {
        heading: "Khoá học",
        linkMore: "/courses",
        items: [
            { id: 1, thumbnail: courseJsBase, title: "Lập trình Javascript cơ bản" },
            { id: 2, thumbnail: courseJsAdvance, title: "Lập trình Javascript Nâng Cao" },
            { id: 3, thumbnail: courseJsPro, title: "Javascript Pro" },
        ],
    },
    {
        heading: "Bài viết",
        linkMore: "/blog",
        items: [
            { id: 4, thumbnail: post1, title: "Không Nên Học Javascript, Liệu Có Đúng Như Vậy?" },
            { id: 5, thumbnail: post2, title: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1" },
            { id: 6, thumbnail: post3, title: "Chuyện cũ xưa: Nên dùng === hay == để so sánh?" },
        ],
    },
    {
        heading: "Video",
        linkMore: "/videos",
        items: [
            { id: 7, thumbnail: post4, title: 'Giải thích các trường hợp "phi lý" trong JavaScript?' },
            { id: 8, thumbnail: post5, title: "Học Xong Javascript Có Giải Được Code Thiếu Nhi?" },
            { id: 9, thumbnail: post6, title: "Fn.apply() method trong Javascript?" },
        ],
    },
];
