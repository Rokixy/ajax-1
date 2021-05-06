console.log(addCss)
addCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('css loading fail')
            }
        }
    }
    request.send()
}

addJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script")
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('js loading fail')
            }
        }
    }
    request.send()
}

addHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const myHtml = document.createElement("div")
                myHtml.innerHTML = request.response
                document.body.appendChild(myHtml)
            } else {
                alert('html loading fail')
            }
        }
    }
    request.send()
}

addXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const xml = document.createElement("div")
                xml.innerHTML = request.responseXML.getElementsByTagName('warning')[0].textContent.trim()
                document.body.appendChild(xml)
            } else {
                alert('xml loading fail')
            }
        }
    }
    request.send()
}

let pageNum = 2
nextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${pageNum}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                pageNum += 1
                pageNum > 3 ? nextPage.disabled = true : null
            } else {
                alert(`new page${pageNum} loading fail`)
            }
        }
    }
    request.send()
}