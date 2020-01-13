let app = {}

document.querySelector('.sidebar').addEventListener('click',function(){
    console.log("close")
    app.closeSidebar()
})

document.querySelector('.header-left-btn').addEventListener('click',function(){
    console.log("open")
    app.openSidebar()
})

app.closeSidebar = function(){
    document.querySelector('.sidebar').classList.add('hide')
}

app.openSidebar = function(){
    document.querySelector('.sidebar').classList.remove('hide')
}