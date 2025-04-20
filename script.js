// 示例时间线数据
const timelineData = [
    { date: '2021-03-10', event: '2021 事件 1', image: 'example1.jpg' },
    { date: '2021-07-20', event: '2021 事件 2', image: 'example2.jpg' },
    { date: '2022-01-15', event: '2022 事件 1', image: 'example1.jpg' },
    { date: '2022-09-30', event: '2022 事件 2', image: 'example2.jpg' },
    { date: '2023-01-01', event: '2023 事件 1：新年的开始', image: 'example1.jpg' },
    { date: '2023-06-15', event: '2023 事件 2：项目完成', image: 'example2.jpg' }
];

// 渲染时间线
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    let currentYear = null;
    timelineData.forEach(item => {
        const itemYear = new Date(item.date).getFullYear();
        if (itemYear !== currentYear) {
            const yearElement = document.createElement('div');
            yearElement.className = 'timeline-year';
            yearElement.textContent = itemYear;
            timeline.appendChild(yearElement);
            currentYear = itemYear;
        }
        const itemElement = document.createElement('div');
        itemElement.className = 'timeline-item';

        const dotElement = document.createElement('div');
        dotElement.className = 'timeline-dot';
        dotElement.style.backgroundColor = getRandomColor();

        // 添加数字元素
        const numberElement = document.createElement('span');
        numberElement.textContent = Array.from(timelineData).indexOf(item) + 1;
        numberElement.className = 'timeline-dot-number';
        dotElement.appendChild(numberElement);

        const contentElement = document.createElement('div');
        contentElement.className = 'timeline-content';

        const dateElement = document.createElement('div');
        dateElement.className = 'timeline-date';
        dateElement.textContent = item.date;

        const eventElement = document.createElement('div');
        eventElement.textContent = item.event;

        const imageElement = document.createElement('img');
        imageElement.className = 'timeline-image';
        imageElement.src = item.image;
        imageElement.alt = item.event;

        contentElement.appendChild(dateElement);
        contentElement.appendChild(eventElement);
        contentElement.appendChild(imageElement);
        itemElement.appendChild(dotElement);
        itemElement.appendChild(contentElement);
        timeline.appendChild(itemElement);
    });
}

// 页面加载完成后渲染时间线
window.addEventListener('load', renderTimeline);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}