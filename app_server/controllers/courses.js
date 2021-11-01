const coursesReadAll = (req, res) => {
    res.render('courses-list', {
        courses: [{ name: 'HTML' }
            , { name: 'CSS' }]
    });
};

const coursesReadHTML = (req, res) => {
    res.render('course-info'
        , { name: 'HTML', info: "cours de base sur HTML5" });
};

const coursesReadCSS = (req, res) => {
    res.render('course-info', { name: 'CSS', info: "cours de base sur CSS4" });
}

module.exports = {
    coursesReadAll,
    coursesReadHTML,
    coursesReadCSS,
};