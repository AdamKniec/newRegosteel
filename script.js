//Function responsible for class addition
(function(){
    const nav = document.querySelector('.navbar');
    let animeteNavbar = () => (window.scrollY > 0) ? (nav.classList.add('sticky')) : (nav.classList.remove('sticky'));
    window.addEventListener('scroll', animeteNavbar);
}());

//MobileMenu handler
(function(){
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    const toggleMenu = (e) => {
        let menuList = document.querySelector('.menuList');
        if(!(menuList.classList.contains('mobile')) && (e.target == hamburger)){
            menuList.classList.add('mobile');
            hamburger.classList.add('animatedMobileMenu');
        } else {
            menuList.classList.remove('mobile');
            hamburger.classList.remove('animatedMobileMenu');
        }
    }
    document.body.addEventListener('click', toggleMenu);
}());
//GalleryHandler
(function (){
    const currentImage = document.querySelectorAll(".main-img img");
    const images = document.querySelectorAll('.imgs');
    images.forEach((element)=>{
        element.addEventListener('click', function(e) {
            let boxNumber = this.className.slice(-1)-1;
            if (e.target.nodeName === ("IMG")) {
                    currentImage[boxNumber].src = e.target.src;
            };
        })
    })
}());
//gallerySwitcher mobile
(function(){
    let select = document.querySelector('.select');
    select.addEventListener('change', function(a) {
        let valueSelected = select.selectedIndex;
        let galleries = document.querySelectorAll('.galleryWrapper');
            galleries.forEach((a,i) => {
                if(i == valueSelected) {
                    a.className = "galleryWrapper active";
                } else {
                    a.className = "galleryWrapper";
                }
            })
    })
}());

//gallerySwitcher desktop

(function(){
    let galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
    let galleryWrapper = document.querySelectorAll('.galleryWrapper');
    galleryCategories.forEach((singleCategory,i) => {
        singleCategory.addEventListener('click', ()=> {
            galleryWrapper.forEach(singleBox => singleBox.classList.remove('active'));
            galleryWrapper[i].classList.add('active');
        })
        
    })
})();
//smoothScroll
(function() {
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
}   ); 
}());
//gallery category selector underline
(function() {
    let galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
        galleryCategories.forEach((singleCategory) => {singleCategory.addEventListener('click', ()=>{
            galleryCategories.forEach((activatedCategory) => 
            activatedCategory.classList.remove("currentlyActive"));
            singleCategory.classList.add("currentlyActive");
        })})
}());
