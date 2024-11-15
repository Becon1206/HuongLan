function reloadPage() {
    location.reload();
}

function filterCourses(category) {
    const allCourses = document.querySelectorAll('.course-card'); // Lấy tất cả các khóa học
    allCourses.forEach(course => {
        if (course.classList.contains(category)) {
            course.style.display = 'block'; // Hiển thị khóa học có class phù hợp với category
        } else {
            course.style.display = 'none'; // Ẩn các khóa học không phù hợp
        }
    });
}

