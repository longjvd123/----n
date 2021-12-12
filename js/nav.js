const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
            <div class="nav">
                <img src="image/Fresh-food.png" class="brand-logo" alt="logo">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="Search food, vegetable, ...">
                        <button class="search-btn">search</button>
                    </div>
                    <a href="#"><img src="image/userAvatar.png" alt=""></a>
                    <a href="#"><img src="image/cart.png" alt=""></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">trang chủ</a></li>
                <li class="link-item"><a href="#" class="link">thịt</a></li>
                <li class="link-item"><a href="#" class="link">rau</a></li>
                <li class="link-item"><a href="#" class="link">giới thiệu</a></li>
                <li class="link-item"><a href="#" class="link">liên hệ</a></li>
            </ul>
    `;
}

createNav();