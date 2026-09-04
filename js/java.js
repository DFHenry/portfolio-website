window.onload = function()
{
    //reusable html components
    let banner = document.getElementById('banner');
    let portBanner = document.getElementById('portBanner');
    let navbar = document.getElementById('navbar');
    let recent = document.getElementById('recent');
    let branding = document.getElementById('branding');
    let petProjects = document.getElementById('petProjects');
    let footer = document.getElementById('footer');

    //functions to call html components
    getBanner();
    getNavBar();
    getFooter();
    getRecent();
    getBranding();
    getPetProjects();

    function getBanner()
    {
        if(banner != null)
        {
            banner.innerHTML = '<a href="index.html">' + 
                '<img src="./img/logo_title.png" alt="David Henry Designs Logo" width="372">' + 
            '</a>';
        }

        if(portBanner != null)
        {
            portBanner.innerHTML = '<a href="index.html">' + 
                '<img src="./img/logo_title.png" alt="David Henry Designs Logo" width="372">' + 
            '</a>';
        }

    }

    function getNavBar()
    {
        navbar.innerHTML = '<div class="navButton">' + 
                                '<a href="about.html"><p>About Me</p></a>' + 
                            '</div>' + 
                            '<div class="navButton">' + 
                                '<a href="skillsets.html"><p>Skillsets</p></a>' + 
                            '</div>' + 
                            '<div class="navButton">' + 
                                '<a href="portfolio.html"><p>Portfolio</p></a>' + 
                            '</div>' + 
                            '<div class="navButton">' + 
                            '<a href="contact.html"><p>Contact</p></a>' + 
                            '</div>';
    }

    function getRecent()
    {
        if(recent != null)
        {
            recent.innerHTML = '<h2 class="showHeader">Latest Work</h2>' + 
                                    '<section id="latest" class="showcase">' +
                                        '<div class="projects">' +
                                            
                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/Group20_Website_After_Desktop.png" alt="J Healthcare Initiative Project image">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>The J Healthcare Initiative Homepage</h3>' +
                                                        '<p>A revamped homepage for The J Healthcare Initiative</p>' +
                                                        '<a href="jHealthcare.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/ColorPalette_Image.jpg" alt="Random Colour Palette Generator image">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>Random Colour Palette Generator</h3>' +
                                                        '<p>Colour Palettes for Web Developers</p>' +
                                                        '<a href="colorPalette.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/BAB_Website_Image.jpg" alt="Bad Ass Bakery Website image">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>Bad Ass Baking Company Website</h3>' +
                                                        '<p>A website for an edgy bakery</p>' +
                                                        '<a href="bab_Website.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/WoD_DR_Image.jpg" alt="WoD Dice Roller image">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>World of Darkness 5th Edition Dice Roller</h3>' +
                                                        '<p>A mobile-designed dice rolling app</p>' +
                                                        '<a href="wodDiceRoller.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class="flip-card-front">' +
                                                        '<img src="./img/matchGame_image.jpg" alt="Card Matching Game">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>Dave\'s Great* Match Memory Game</h3>' +
                                                        '<p>An animated memory match game</p>' +
                                                        '<a href="matchGame.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                        '</div>' +
                                    '</section>';
        }
    }

    function getBranding()
    {
        if(branding != null)
        {
            branding.innerHTML = '<h2 class="showHeader">Branding & Style Guides</h2>' +
                                '<section id="guides" class="showcase">' +
                                    '<div class="projects">' +
                                        '<div class="flip-card">' +
                                            '<div class="flip-card-inner">' +
                                                '<div class="flip-card-front">' +
                                                    '<img src="./img/ASCC_StyleGuide_Image.jpg" alt="Amethyst Scale Crafts Company logo">' +
                                                '</div>' +
                                                '<div class="flip-card-back">' +
                                                    '<h3>Amethyst Scale Crafts Co. Style Guide</h3>' +
                                                    '<p>A branding guide a travelling crafts company</p>' +
                                                    '<a href="aasc_styleGuide.html">Click Here</a>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +

                                        '<div class="flip-card">' +
                                            '<div class="flip-card-inner">' +
                                                '<div class="flip-card-front">' +
                                                    '<img src="./img/BAB_StyleGuide_Image.jpg" alt="Bad Ass Baking Company logo">' +
                                                '</div>' +
                                                '<div class="flip-card-back">' +
                                                    '<h3>Bad Ass Baking Company Style Guide</h3>' +
                                                    '<p>A branding Guide for an edgy bakery</p>' +
                                                    '<a href="bab_StyleGuide.html">Click Here</a>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</section>';
        }
    }

    function getPetProjects()
    {
        if(petProjects != null)
        {
            petProjects.innerHTML = '<h2 class="showHeader">Pet Projects</h2>' +
                                    '<section id="pet" class="showcase">' +
                                        '<div class="projects">' +
                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/WoD_DR_Image.jpg" alt="WoD Dice Roller image">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>World of Darkness 5th Edition Dice Roller</h3>' +
                                                        '<p>A mobile-designed dice rolling app</p>' +
                                                        '<a href="wodDiceRoller.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/WerewolfQRef_Image.jpg" alt="Werewolf: The Apocalypse Quickstart Book">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>Werewolf: the Apocalypse Quick Reference Guide</h3>' +
                                                        '<p>A printable guide for new players</p>' +
                                                        '<a href="werewolfGuide.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +

                                            '<div class="flip-card">' +
                                                '<div class="flip-card-inner">' +
                                                    '<div class = "flip-card-front">' +
                                                        '<img src="./img/Moordeep_Image.jpg" alt="Moordeep Crypts Title Page">' +
                                                    '</div>' +
                                                    '<div class="flip-card-back">' +
                                                        '<h3>Moordeep Crypts</h3>' +
                                                        '<p>An Dungeons & Dragons Adventure</p>' +
                                                        '<a href="moordeepCrypts.html">Click Here</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</section>';
        }
    }

    function getFooter()
    {
        footer.innerHTML = 
                            //Footer 1 - Appears when screen width is above 768px
                            '<section id="foot1">' +

                                //Social Links
                                '<div class="footerItem" id="socialLinks">' +
                                    '<div id="social1">' +
                                        '<h4>DAVID HENRY DESIGNS</h4>' +
                                        '<div>' +
                                            '<p>Follow Me On Social Media</p>' +
                                            '<a href="https://www.linkedin.com/in/david-henry-72b44546/">' +
                                                '<img src="./img/linkedin-icon.png" alt="link to David Henry\'s linked in profile">' +
                                            '</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +

                                //sitemap
                                    '<div class="footerItem" id="siteMap1">' +
                                        '<div id="aboutMap1" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="about.html">About Me</a></li>' +
                                                '<li><a href="about.html#myStory">Story</a></li>' +
                                                '<li><a href="about.html#whatIDo">What I Do</a></li>' +
                                                '<li><a href="about.html#myApproach">My Approach</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="skillsetMap1" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="skillsets.html">Skillsets</a></li>' +
                                                '<li><a href="skillsets.html#codingSect">Coding</a></li>' +
                                                '<li><a href="skillsets.html#graphicDesign">Graphic Design</a></li>' +
                                                '<li><a href="skillsets.html#gameDesign">Game Design</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="portfolioMap1" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="portfolio.html">Portfolio</a></li>' +
                                                '<li><a href="portfolio.html#webDevSect">Web Development</a></li>' +
                                                '<li><a href="portfolio.html#brandingSect">Branding & Style</a></li>' +
                                                '<li><a href="portfolio.html#petProjectsSect">Pet Projects</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="contactMap1" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="contact.html">Contact</a></li>' +                          
                                            '</ul>' +
                                        '</div>' +
                                    '</div>' +
                                '</section>' +
                            
                            //Footer 2 - Appears when screen width is above 768px. Some elements disappear when screen width is 480px or less
                                '<section id="foot2">' +

                                //Footer Title
                                    '<div class="footerItem" id="footTitle">' +
                                        '<div id="social2">' +
                                            '<h4>DAVID HENRY DESIGNS</h4>' +
                                        '</div>' +
                                    '</div>' +

                                //Site Map - Disappears when screen width is 480px or less
                                    '<div class="footerItem" id="siteMap2">' +
                                        '<div id="aboutMap2" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="about.html">About Me</a></li>' +
                                                '<li><a href="about.html#myStory">Story</a></li>' +
                                                '<li><a href="about.html#whatIDo">What I Do</a></li>' +
                                                '<li><a href="about.html#myApproach">My Approach</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="skillsetMap2" class="mapList">'+
                                            '<ul>' +
                                                '<li><a href="skillsets.html">Skillsets</a></li>' +
                                                '<li><a href="skillsets.html#codingSect">Coding</a></li>' +
                                                '<li><a href="skillsets.html#graphicDesign">Graphic Design</a></li>' +
                                                '<li><a href="skillsets.html#gameDesign">Game Design</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="portfolioMap2" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="portfolio/portfolio.html">Portfolio</a></li>' +
                                                '<li><a href="portfolio/portfolio.html#webDevSect">Web Development</a></li>' +
                                                '<li><a href="portfolio/portfolio.html#brandingSect">Branding & Style</a></li>' +
                                                '<li><a href="portfolio/portfolio.html#petProjectsSect">Pet Projects</a></li>' +
                                            '</ul>' +
                                        '</div>' +

                                        '<div id="contactMap2" class="mapList">' +
                                            '<ul>' +
                                                '<li><a href="contact.html">Contact</a></li>' +                          
                                            '</ul>' +
                                        '</div>' +
                                    '</div>' +

                                //Social Links - Disappears when screen width is 480px or less
                                    '<div class="footerItem" id="socialLinks2">' +
                                    '<p>Follow Me On Social Media</p>' +
                                        '<div id="icons">' +
                                            '<a href="https://www.linkedin.com/in/david-henry-72b44546/">' +
                                                '<img src="./img/linkedin-icon.png" alt="link to David Henry\'s linked in profile">' +
                                            '</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</section>' +

                            //Copyright Information
                                '<section id="copyright">' +
                                    '<p>&copy; David Henry All Rights Reserved</p>' +
                            '</section>';
    }
}

var menuOn = false;

function toggleMenu()
{
    var menu = document.getElementById("main-menu");

    if(menuOn == false)
    {
        menu.style.display = "block";
        menuOn = true;
    }
    else
    {
        menu.style.display = "none";
        menuOn = false;
    }
    return false;
}


