document.querySelector('#icon>i').addEventListener('click', () =>{
    document.getElementById('mobileMenu').style.right = '0'
})

document.querySelector('#mobileMenu>ul>span>i').addEventListener('click', () =>{
    document.getElementById('mobileMenu').style.right = '-1000px'
})

let _num = 3
let _navA = document.querySelectorAll('nav>ul>li>a')
let textCount = document.querySelectorAll('#projects>.row>div>h3')
let _serviceArticle = document.querySelectorAll('#service>.row>article')
let _serviceArticleHgroup = document.querySelectorAll('#service>.row>article>h3')
let _serviceArticleP = document.querySelectorAll('#service>.row>article>p')
let _serviceArticleSpan = document.querySelectorAll('#service>.row>article>span')
let _serviceArticleI = document.querySelectorAll('#service>.row>article>span>i')
let _aboutDiv = document.querySelectorAll('#about article>section div>h5')
let _aboutDivP = document.querySelectorAll('#about article>section div>p')
let _aboutDivSpan = document.querySelectorAll('#about article>section>section>span')
let _aboutDivSpanI = document.querySelectorAll('#about article>section>section>span>i')
let _teamArticle = document.querySelectorAll('#team>.row>article')
let _teamArticleFigure = document.querySelectorAll('#team>.row>article>figure')
let _teamArticleh5 = document.querySelectorAll('#team>.row>article>div>h5')
let _teamArticlep = document.querySelectorAll('#team>.row>article>div>p')
let _netWork = document.querySelectorAll('#team>section>article>section>a')
let _blogArticle = document.querySelectorAll('#blog>.row>article')
let _blogArticle2 = document.querySelectorAll('#blog>.row>article:nth-of-type(2)')
let _blogArticleh3 = document.querySelectorAll('#blog>.row>article>h3')
let _blogArticlep = document.querySelectorAll('#blog>.row>article>p')
let _blogArticlespan = document.querySelectorAll('#blog>.row>article>.more>span')
let _footerDivH3 = document.querySelectorAll('footer>.row>div>h3')
let _footerDiva = document.querySelectorAll('footer>.row>div a')
document.querySelector('nav>div>span').addEventListener('click', () =>{
    if(_num % 2){
        window.addEventListener('scroll', ()=>{
            let scrollWindow = window.scrollY
            let _nav = document.getElementsByTagName('nav')[0].clientHeight
            if(scrollWindow > _nav){
                document.getElementsByTagName('nav')[0].style.background = '#f7f7f7'
                document.getElementsByTagName('nav')[0].style.boxShadow = '2px 2px 10px -2px #ddd'
            }
            else{
                document.getElementsByTagName('nav')[0].style.boxShadow = '0 0 0 transparent'
                document.getElementsByTagName('nav')[0].style.background = 'transparent'
                
            }
        })
        document.querySelector('nav>figure>h2').style.color = '#816aff'
        document.getElementById('icon').style.color = '#000'
        document.querySelector('nav>div:nth-of-type(1)>span').style.color = '#000'
        document.querySelector('nav>div:nth-of-type(1)>span>i').style.color = '#000'
        document.querySelector('nav>div>span').innerHTML = 'تاریک <i class="bi bi-moon-fill"></i>'
        document.getElementsByTagName('body')[0].style.background = '#fff'
        document.querySelector('#lotto>.row>article>h1').style.color = '#0c123d'
        document.querySelector('#lotto>.row>article>h1>strong').style.color = '#816aff'
        document.querySelector('#lotto>.row>article>p').style.color = '#000'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(1)').style.background = '#816aff'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(1)').style.borderColor = '#816aff'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.background = 'transparent'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.color = '#090238'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.border = '1px solid #816aff'
        document.querySelector('#service>.contentService>h6').style.color = '#816aff'
        document.querySelector('#service>.contentService>h2').style.color = '#0c123d'
        document.querySelector('#service>.contentService>h3').style.color = '#816aff'
        document.querySelector('#about article>h6').style.color = '#816aff'
        document.querySelector('#about article>h2').style.color = '#0c123d'
        document.querySelector('#about article>h3').style.color = '#816aff'
        document.querySelector('#about article>p').style.color = '#000'
        document.querySelector('#lotto>.row>figure>img').src = 'img/lottoImageLight.png'
        document.getElementById('projects').style.background = '#816aff'
        document.querySelector('#team>.contentTeam>h6').style.color = '#816aff'
        document.querySelector('#team>.contentTeam>h2').style.color = '#0c123d'
        document.querySelector('#team>.contentTeam>h2>span').style.color = '#816aff'
        document.querySelector('#blog').style.background = '#effcff'
        document.querySelector('#blog>.contentBlog>h6').style.color = '#816aff'
        document.querySelector('#blog>.contentBlog>h2').style.color = '#0c123d'
        document.querySelector('#blog>.contentBlog>h2>span').style.color = '#816aff'
        document.querySelector('#subscribe').style.background = 'linear-gradient(180deg,#bdf3ff 29%,#c1f3ff 50%,#e2faff 78%)'
        document.querySelector('#subscribe>.row>article>h6').style.color = '#816aff'
        document.querySelector('#subscribe>.row>article>h3').style.color = '#0c123d'
        document.querySelector('#subscribe>.row>article>h3>span').style.color = '#816aff'
        document.querySelector('#subscribe>.row>form>button').style.background = '#816aff'
        document.querySelector('footer>.row>div:nth-of-type(1)>h2').style.color = '#816aff'
        document.querySelector('footer>.row>div:nth-of-type(1)>p').style.color = '#000'
        document.querySelector('footer>.row>div:nth-of-type(1)>span').style.color = '#000'
        document.querySelector('footer>.row>#copy>p').style.color = '#000'
        document.querySelector('footer>.row>#copy>p>strong').style.color = '#816aff'
        for(j=0; j<_navA.length; j++){
            _navA[j].style.color = '#000'
        }
        for(i=0; i<textCount.length; i++){
            textCount[i].style.background  = '#fff'
        }
        for(j=0; j<_serviceArticle.length; j++){
            _serviceArticle[j].style.background = 'transparent'
            _serviceArticle[j].style.boxShadow = '0px 0px 15px #ccc'
        }
        for(j=0; j<_serviceArticleHgroup.length; j++){
            _serviceArticleHgroup[j].style.color = '#816aff'
        }
        for(j=0; j<_serviceArticleP.length; j++){
            _serviceArticleP[j].style.color = '#000'
        }
        for(j=0; j<_serviceArticleSpan.length; j++){
            _serviceArticleSpan[j].style.background = '#816aff'
            _serviceArticleSpan[j].style.borderColor = '#816aff'
        }
        for(j=0; j<_serviceArticleI.length; j++){
            _serviceArticleI[j].style.color = '#fff'
        }
        for(i=0; i<_aboutDiv.length; i++){
            _aboutDiv[i].style.color = '#0c123d'
        }
        for(i=0; i<_aboutDivP.length; i++){
            _aboutDivP[i].style.color = '#000'
        }
        for(j=0; j<_aboutDivSpan.length; j++){
            _aboutDivSpan[j].style.borderColor = '#816aff'
        }
        for(j=0; j<_aboutDivSpanI.length; j++){
            _aboutDivSpanI[j].style.color = '#816aff'
        }
        for(j=0; j<_teamArticle.length; j++){
            _teamArticle[j].style.boxShadow = '0px 0px 15px #ccc'
            _teamArticle[j].style.background = 'transparent'
        }
        for(j=0; j<_teamArticleFigure.length; j++){
            _teamArticleFigure[j].style.background = '#816aff'
        }
        for(j=0; j<_teamArticleh5.length; j++){
            _teamArticleh5[j].style.color = '#816aff'
        }
        for(j=0; j<_teamArticlep.length; j++){
            _teamArticlep[j].style.color = '#000'
        }
        for(j=0; j<_netWork.length; j++){
            _netWork[j].style.background = '#816aff'
        }
        for(j=0; j<_blogArticle.length; j++){
            _blogArticle[j].style.boxShadow = '5px 5px 15px -5px #999'
            _blogArticle[j].style.background = '#fff'
        }
        for(j=0; j<_blogArticle2.length; j++){
            _blogArticle2[j].style.border  = '1px solid #816aff'
        }
        for(j=0; j<_blogArticleh3.length; j++){
            _blogArticleh3[j].style.color = '#816aff'
        }
        for(j=0; j<_blogArticlep.length; j++){
            _blogArticlep[j].style.color = '#000'
        }
        for(j=0; j<_blogArticlespan.length; j++){
            _blogArticlespan[j].style.color = '#816aff'
        }
        for(j=0; j<_footerDivH3.length; j++){
            _footerDivH3[j].style.color = '#816aff'
        }
        for(j=0; j<_footerDiva.length; j++){
            _footerDiva[j].style.color = '#0c123d'
        }
        _footerDiva.forEach((item , index)=>{
            item.addEventListener('mouseenter', ()=>{
                item.style.color = '#816aff'
            })
            item.addEventListener('mouseout', ()=>{
                item.style.color = '#0c123d'
            })
        })
        _navA.forEach((item , index)=>{
            item.addEventListener('mouseenter', ()=>{
                item.style.color = '#816aff'
            })
            item.addEventListener('mouseout', ()=>{
                item.style.color = '#0c123d'
            })
        })
    }
    else{
        window.addEventListener('scroll', ()=>{
            let scrollWindow = window.scrollY
            let _nav = document.getElementsByTagName('nav')[0].clientHeight
            if(scrollWindow > _nav){
                document.getElementsByTagName('nav')[0].style.boxShadow = '0 0 0 transparent'
                document.getElementsByTagName('nav')[0].style.background = '#0c123d'
            }
            else{
                document.getElementsByTagName('nav')[0].style.background = 'transparent'
            }
        })
        document.querySelector('nav>figure>h2').style.color = '#379cf6'
        document.getElementById('icon').style.color = '#fff'
        document.querySelector('nav>div>span').innerHTML = ' روشن <i class="bi bi-brightness-high"></i>'
        document.querySelector('nav>div:nth-of-type(1)>span').style.color = 'hsla(0,0%,100%,.637)'
        document.querySelector('nav>div:nth-of-type(1)>span>i').style.color = 'hsla(0,0%,100%,.637)'
        document.getElementsByTagName('body')[0].style.background = '#060b1a'
        document.querySelector('#lotto>.row>article>h1').style.color = '#fff'
        document.querySelector('#lotto>.row>article>h1>strong').style.color = '#379cf6'
        document.querySelector('#lotto>.row>article>p').style.color = 'hsla(0,0%,100%,0.774)'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(1)').style.background = '#0c123d'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(1)').style.borderColor = '#379cf6'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.background = '#379cf6'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.color = '#fff'
        document.querySelector('#lotto>.row>article>.btnArticle>a:nth-of-type(2)').style.border = 'none'
        document.querySelector('#service>.contentService>h6').style.color = '#379cf6'
        document.querySelector('#service>.contentService>h2').style.color = '#fff'
        document.querySelector('#service>.contentService>h3').style.color = '#379cf6'
        document.querySelector('#lotto>.row>figure>img').src = 'img/lottoImage.png'
        document.getElementById('projects').style.background = 'transparent'
        document.querySelector('#about article>h6').style.color = '#379cf6'
        document.querySelector('#about article>h2').style.color = '#fff'
        document.querySelector('#about article>h3').style.color = '#379cf6'
        document.querySelector('#about article>p').style.color = 'hsla(0,0%,100%,0.774)'
        document.querySelector('#team>.contentTeam>h6').style.color = '#816aff'
        document.querySelector('#team>.contentTeam>h6').style.color = '#379cf6'
        document.querySelector('#team>.contentTeam>h2').style.color = '#fff'
        document.querySelector('#team>.contentTeam>h2>span').style.color = '#379cf6'
        document.querySelector('#blog').style.background = 'transparent'
        document.querySelector('#blog>.contentBlog>h6').style.color = '#379cf6'
        document.querySelector('#blog>.contentBlog>h2').style.color = '#fff'
        document.querySelector('#blog>.contentBlog>h2>span').style.color = '#379cf6'
        document.querySelector('#subscribe').style.background = 'linear-gradient(90deg,#1b0973 20%,#170960 38%,#0e0938)'
        document.querySelector('#subscribe>.row>article>h6').style.color = '#379cf6'
        document.querySelector('#subscribe>.row>article>h3').style.color = '#fff'
        document.querySelector('#subscribe>.row>article>h3>span').style.color = '#379cf6'
        document.querySelector('#subscribe>.row>form>button').style.background = '#379cf6'
        document.querySelector('footer>.row>div:nth-of-type(1)>h2').style.color = '#379cf6'
        document.querySelector('footer>.row>div:nth-of-type(1)>p').style.color = 'hsla(0,0%,100%,0.774)'
        document.querySelector('footer>.row>div:nth-of-type(1)>span').style.color = 'hsla(0,0%,100%,0.774)'
        document.querySelector('footer>.row>#copy>p').style.color = 'hsla(0,0%,100%,.573)'
        document.querySelector('footer>.row>#copy>p>strong').style.color = '#379cf6'
        for(j=0; j<_navA.length; j++){
            _navA[j].style.color = '#fff'
        }
        for(i=0; i<textCount.length; i++){
            textCount[i].style.background = 'linear-gradient(90deg,#02bba6 30%,#1d81b0 55%,#235dad 75%)'
        }
        for(j=0; j<_serviceArticle.length; j++){
            _serviceArticle[j].style.background = 'linear-gradient(45deg,#0f123d 33%,#0f123d 52%,#0b2945 84%)'
            _serviceArticle[j].style.boxShadow = '0 0 0 transparent'
        }
        for(j=0; j<_serviceArticleHgroup.length; j++){
            _serviceArticleHgroup[j].style.color = '#379cf6'
        }
        for(j=0; j<_serviceArticleP.length; j++){
            _serviceArticleP[j].style.color = 'hsla(0,0%,100%,0.774)'
        }
        for(j=0; j<_serviceArticleSpan.length; j++){
            _serviceArticleSpan[j].style.background = '#151e4f'
            _serviceArticleSpan[j].style.borderColor = '#379cf6'
        }
        for(j=0; j<_serviceArticleI.length; j++){
            _serviceArticleI[j].style.color = '#379cf6'
        }
        for(i=0; i<_aboutDiv.length; i++){
            _aboutDiv[i].style.color = '#fff'
        }
        for(i=0; i<_aboutDivP.length; i++){
            _aboutDivP[i].style.color = 'hsla(0,0%,100%,0.774)'
        }
        for(j=0; j<_aboutDivSpan.length; j++){
            _aboutDivSpan[j].style.borderColor = '#379cf6'
        }
        for(j=0; j<_aboutDivSpanI.length; j++){
            _aboutDivSpanI[j].style.color = '#379cf6'
        }
        for(j=0; j<_teamArticle.length; j++){
            _teamArticle[j].style.boxShadow = '0 0 0 transparent'
            _teamArticle[j].style.background = '#1b2352'
        }
        for(j=0; j<_teamArticleFigure.length; j++){
            _teamArticleFigure[j].style.background = '#379cf6'
        }
        for(j=0; j<_teamArticleh5.length; j++){
            _teamArticleh5[j].style.color = '#379cf6'
        }
        for(j=0; j<_teamArticlep.length; j++){
            _teamArticlep[j].style.color = 'hsla(0,0%,100%,0.774)'
        }
        for(j=0; j<_netWork.length; j++){
            _netWork[j].style.background = '#151e4f'
        }
        for(j=0; j<_blogArticle.length; j++){
            _blogArticle[j].style.boxShadow = '0 0 0 transparent'
            _blogArticle[j].style.background = 'linear-gradient(45deg,#0f123d 33%,#0f123d 52%,#0b2945 84%)'
        }
        for(j=0; j<_blogArticle2.length; j++){
            _blogArticle2[j].style.border  = 'none'
        }
        for(j=0; j<_blogArticleh3.length; j++){
            _blogArticleh3[j].style.color = '#fff'
        }
        for(j=0; j<_blogArticlep.length; j++){
            _blogArticlep[j].style.color = 'hsla(0,0%,100%,0.774)'
        }
        for(j=0; j<_blogArticlespan.length; j++){
            _blogArticlespan[j].style.color = '#379cf6'
        }
        for(j=0; j<_footerDivH3.length; j++){
            _footerDivH3[j].style.color = '#379cf6'
        }
        for(j=0; j<_footerDiva.length; j++){
            _footerDiva[j].style.color = '#fff'
        }
        _footerDiva.forEach((item , index)=>{
            item.addEventListener('mouseenter', ()=>{
                item.style.color = '#379cf6'
            })
            item.addEventListener('mouseout', ()=>{
                item.style.color = '#fff'
            })
        })
        _navA.forEach((item , index)=>{
            item.addEventListener('mouseenter', ()=>{
                item.style.color = '#379cf6'
            })
            item.addEventListener('mouseout', ()=>{
                item.style.color = '#fff'
            })
        })
    }
    _num++
})


    function _move(event){
        let x = event.pageX
        let y = event.pageY

        let offTop = this.offsetTop
        let offLeft = this.offsetLeft

        let _sumX = x - offLeft
        let _sumY = y - offTop

        let _sumAllX = (_sumX*.2)-30
        let _sumAllY = (_sumY*.2)-30

        this.style.transform = 'perspective(600px)rotateY('+_sumAllX+'deg)rotateX('+_sumAllY+'deg)'
    }

    function _moveRemove(){
        this.style.transform = 'rotate(0)'
    }

    _serviceArticle.forEach((item, index) =>{
        item.addEventListener('mousemove', _move)
        item.addEventListener('mouseout', _moveRemove)
    })




    function _move2(event){
        let x = event.pageX
        let y = event.pageY

        let offTop = this.offsetTop
        let offLeft = this.offsetLeft

        let _sumX = x - offLeft
        let _sumY = y - offTop

        let _sumAllX = (_sumX*.2)-30
        let _sumAllY = (_sumY*.2)-30

        this.style.transform = 'perspective(700px)rotateY('+_sumAllX+'deg)rotateX('+_sumAllY+'deg)'
    }

    function _moveRemove2(){
        this.style.transform = 'rotate(0)'
    }

    _teamArticle.forEach((item, index) =>{
        item.addEventListener('mousemove', _move2)
        item.addEventListener('mouseout', _moveRemove2)
    })


    window.addEventListener('scroll', ()=>{
        let scrollWindow = window.scrollY
        let _nav = document.getElementsByTagName('nav')[0].clientHeight
        console.log(_nav)
        if(scrollWindow > _nav){
            document.getElementsByTagName('nav')[0].style.background = '#0c123d'
        }
        else{
            document.getElementsByTagName('nav')[0].style.background = 'transparent'
        }
    })

    let _input = document.getElementsByTagName('input')[0]
    document.querySelector('form>button').addEventListener('click' , ()=>{
        if(
            _input.value == ''
        ){
            alert('Please Write Your Email Address •••')
        }
        else if(
            _input.value == '<script'
        ){
            alert('you can not hack me ☺')
            window.close()
        }
        else{
            alert('Thanks For Subscribing ♥')
        }
    })