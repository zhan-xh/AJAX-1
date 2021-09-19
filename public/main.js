getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onload = () => {
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');

    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./style.css");
    request.onload = () => {
        // console.log('请求成功了')
        // console.log('request.response')
        console.log(request.response)
        //创建style标签
        const style = document.createElement('style')
        //填写style标签内容
        style.innerHTML = request.response
        //把标签插入到head中
        document.head.appendChild(style)
    };
    request.onerror = () => {
        console.log('请求失败了')
    };
    request.send();
};