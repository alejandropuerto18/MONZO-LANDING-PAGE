const responsive = (function() {

    let dropdownMenuContent;
    let dropdownMenuButton;

    let toggleMenu;

    const MOBILE_WIDTH_CAP = 760;

    const IMG_DIRECTORY = "./img/";

    
    function isMobileWidth() {
        return document.body.clientWidth < MOBILE_WIDTH_CAP;
    }

    
    function init() {

        let cardImage = document.getElementById("cards-image");

        if (isMobileWidth()) {
            // Mobile width
            dropdownMenuContent = document.getElementById("nav");
            dropdownMenuButton = document.getElementById("dropdown-menu");

            dropdownMenuButton.addEventListener("click", toggleMenu);
            dropdownMenuContent.addEventListener("click", toggleMenu);

            cardImage.src = IMG_DIRECTORY + "cards-mobile.png";
            } 
        else {
            // Desktop width
            cardImage.src = IMG_DIRECTORY + "cards-desktop.png";

            toggleMenu = function() {
                dropdownMenuContent.classList.toggle("expanded");
            }
        }

       
        window.addEventListener("resize", init);

    }

   
    return { init };

})();
