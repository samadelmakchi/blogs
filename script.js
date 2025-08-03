async function loadPostsTree() {
    const res = await fetch('posts.json');
    const tree = await res.json();
    const container = document.getElementById('post-list');
    container.innerHTML = '';
    tree.forEach(item => container.appendChild(renderNode(item)));
}

function renderNode(node, level = 0) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tree-node';
    wrapper.style.marginRight = ${ level * 1 } rem;

    if (node.children) {
        const toggler = document.createElement('div');
        toggler.className = 'tree-folder list-group-item';
        toggler.textContent = node.title;
        toggler.addEventListener('click', () => {
            childrenWrapper.classList.toggle('d-none');
        });
        wrapper.appendChild(toggler);


        const childrenWrapper = document.createElement('div');
        childrenWrapper.className = 'tree-children d-none';
        node.children.forEach(child => {
            childrenWrapper.appendChild(renderNode(child, level + 1));
        });
        wrapper.appendChild(childrenWrapper);
    } else {
        const item = document.createElement('div');
        item.className = 'list-group-item tree-leaf';
        item.textContent = node.title;
        item.addEventListener('click', async () => {
            document.querySelectorAll('.tree-leaf').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            const res = await fetch(node.file);
            const text = await res.text();
            document.getElementById('post-content').innerHTML = marked.parse(text);
        });
        wrapper.appendChild(item);

    }

    return wrapper;
}

window.addEventListener('DOMContentLoaded', loadPostsTree);