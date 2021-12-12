const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="image/Fresh-food.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">
                thịt
            </li>
            <li><a href="#" class="footer-link">bò</a></li>
            <li><a href="#" class="footer-link">heo</a></li>
            <li><a href="#" class="footer-link">gà</a></li>
            <li><a href="#" class="footer-link">vịt</a></li>
            <li><a href="#" class="footer-link">trâu</a></li>
            <li><a href="#" class="footer-link">gà</a></li>
            <li><a href="#" class="footer-link">vịt</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">
                hải sản
            </li>
            <li><a href="#" class="footer-link">tôm</a></li>
            <li><a href="#" class="footer-link">cá</a></li>
            <li><a href="#" class="footer-link">nghêu</a></li>
            <li><a href="#" class="footer-link">ốc</a></li>
            <li><a href="#" class="footer-link">cua</a></li>
            <li><a href="#" class="footer-link">ghẹ</a></li>
            <li><a href="#" class="footer-link">mực</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">
                rau
            </li>
            <li><a href="#" class="footer-link">rau</a></li>
            <li><a href="#" class="footer-link">quả</a></li>
            <li><a href="#" class="footer-link">củ</a></li>
            <li><a href="#" class="footer-link">rau</a></li>
            <li><a href="#" class="footer-link">quả</a></li>
            <li><a href="#" class="footer-link">củ</a></li>
            <li><a href="#" class="footer-link">củ</a></li>
        </ul>
    </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">công ty tập đoàn 5 thành viên : long, thọ, thy, tính, phương</p>
    <p class="info">support emails - freshfood@gmail.com, customersupport@gmail.com</p>
    <p class="info">telephone - 0912345675</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & service</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">fresh-food, no.1 brand in the world</p>
    `;
}
createFooter();