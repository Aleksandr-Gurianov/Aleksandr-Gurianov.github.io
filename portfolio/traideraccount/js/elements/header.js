let header = document.querySelector('.header');

header.innerHTML = `
<nav>
        <div class="container">
            <img src="images/logo.png" class="logo">
            <div class="search-bar">
                <span class="material-symbols-sharp">search</span>
                <input type="search" placeholder="Search...">
            </div>
            <div class="profile-area">
                <div class="theme-btn">
                    <span class="material-symbols-sharp active">light_mode</span>
                    <span class="material-symbols-sharp">dark_mode</span>
                </div>
                <div class="profile">
                    <div class="profile-photo">
                        <img src="images/profile_200.png">
                    </div>
                    <h5>Chu Hua</h5>
                    <span class="material-symbols-sharp">expand_more</span>
                </div>
                <button id="menu-btn">
                    <span class="material-symbols-sharp">menu</span>
                </button>
            </div>
        </div>
    </nav>
`;


let aside = document.querySelector('aside');
aside.innerHTML = `
<button id="close-btn">
                <span class="material-symbols-sharp">close</span>
            </button>
            

            <div class="sidebar">
                <a href="#" class="active">
                    <span class="material-symbols-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">currency_exchange</span>
                    <h4>Exchange</h4>
               </a>
                <a href="#">
                    <span class="material-symbols-sharp">wallet</span>
                    <h4>Wallet</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">payment</span>
                    <h4>Transaction</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">pie_chart</span>
                    <h4>Analitycs</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">message</span>
                    <h4>Messages</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">help_center</span>
                    <h4>Help center</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-sharp">settings</span>
                    <h4>Settings</h4>
                </a>
            </div>
            <!-- end of sidebar -->

            <div class="updates">
                <span class="material-symbols-sharp">update</span>
                <h4>Updates Available</h4>
                <small>Security Upddates</small>
                <small>General Upddates</small>
                <a href="#">Update Now</a>
            </div>
`;


// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
    
})


// show or hide aside
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})