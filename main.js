
// var url = 'http://daringfireball.net/feeds/articles'
// var url = 'https://jsbeginners.com/feed/'
// var url = 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN%3Aen&oc=11'

const textarea = document.querySelector('#feed-textarea > ul');

const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();

var url = 'https://news.google.com/atom?hl=en-IN&gl=IN&ceid=IN%3Aen&oc=11'
feednami.load(url, function (result) {
    if (result.error) {
        console.log(result.error)
    }
    else {
        var entries = result.feed.entries
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i]

            // console.log(entry.title)

            let li = document.createElement('li');
            //add HTML content to list items
            li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
            //append HTML content to list 
            textarea.appendChild(li);
        }
    }
})