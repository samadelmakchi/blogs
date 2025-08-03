const postList = document.getElementById('post-list');
const postContent = document.getElementById('post-content');
let posts = [];

async function loadPostsList() {
    try {
        const res = await fetch('posts.json');
        posts = await res.json();

        postList.innerHTML = '';
        posts.forEach(post => {
            const link = document.createElement('a');
            link.href = `#${post.file}`;
            link.textContent = post.title;
            postList.appendChild(link);
        });

        loadPost(); // بارگذاری پست در صورت وجود در URL
    } catch (err) {
        postList.innerHTML = '<p>مشکلی در بارگذاری لیست پست‌ها پیش آمده.</p>';
    }
}

function loadPost() {
    const postFile = location.hash.slice(1);
    const post = posts.find(p => p.file === postFile);
    if (post) {
        fetch(`posts/${post.file}`)
            .then(res => res.text())
            .then(md => {
                postContent.innerHTML = marked.parse(md);
                window.scrollTo(0, 0);
            })
            .catch(() => {
                postContent.innerHTML = '<p>خطا در بارگذاری پست.</p>';
            });
    } else {
        postContent.innerHTML = "<p>لطفاً یک پست را انتخاب کنید.</p>";
    }
}

window.addEventListener('hashchange', loadPost);
window.addEventListener('load', loadPostsList);
