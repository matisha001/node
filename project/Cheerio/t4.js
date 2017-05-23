function crawlerChapter(html) {
    var $ = cheerio.load(html);
    var chapters = $('.panel');
    var data = [];
 
    chapters.map(function (node) {
        var chapters = $(this);
        var chapterTitle = chapters.find('h4').text().trim();
        var sections = chapters.find('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            section: []
        };
        sections.map(function (node) {
            var section = $(this).text().trim();
            chapterData.section.push(section);
        });
        data.push(chapterData);
    });
    console.log(data);
};