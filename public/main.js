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
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
        }
    };
    request.send()
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()

};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text)
        }
    };
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
    const request = new XMLHttpRequest(); //readystate =0
    request.open("GET", "./style.css"); //readystate =1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成了')
            //下载完成但是不知道加载成功还是失败
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                //填写style标签内容
                style.innerHTML = request.response
                //把标签插入到head中
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败!')
            }
        }
    }
    request.send(); //readystate =2
};