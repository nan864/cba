

const start = performance.now();

const script = document.createElement('script');
script.src = 'https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js';
script.onload = () => {
    const end = performance.now();
    console.log(`Script loaded in ${end - start} milliseconds`);
};

document.head.appendChild(script);
