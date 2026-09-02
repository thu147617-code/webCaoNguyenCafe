document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Banner Slider - Tự động chuyển 4 ảnh sau mỗi 6 giây
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideInterval = 6000;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
    });
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  }
  function nextSlide() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  if (slides.length > 0) {
    let autoSlideTimer = setInterval(nextSlide, slideInterval);
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(nextSlide, slideInterval);
      });
    });
  }
  // 2. Hiệu ứng cuộn Navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});
// =========================
// COUNTER - SỐ CHẠY
// =========================
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    let number = 0;
    const updateCounter = () => {
        if (number < target) {
            number++;
            counter.innerText = number + "+";
            setTimeout(updateCounter, 40);
        } else {
            counter.innerText = target + "+";
        }
    };
    updateCounter();
});
// Phần PRODUCT//
 const products = [
      { id: 1, name: "Cà Phê Muối Kem Béo", price: 45000, badge: "Hot Trend", desc: "Vị đắng nhẹ Robusta quyện cùng lớp kem muối béo mặn đượm đà.", img: "../images/a1.jpg", cat: "popular" },
      { id: 2, name: "Cà Phê Cốt Dừa Đá Xay", price: 50000, badge: "Bán Chạy", desc: "Cốt dừa Bến Tre xay tuyết béo ngậy hòa quyện cốt cà phê đậm đà.", img: "../images/a2.jpg", cat: "popular" },
      { id: 3, name: "Cold Brew Cam Sả Tươi", price: 48000, badge: "Giải Nhiệt", desc: "Cà phê ủ lạnh 16 giờ kết hợp hương cam vàng và sả tươi mát.", img: "../images/a3.jpg", cat: "cold brew" },
      { id: 4, name: "Bạc Xỉu Sữa Hạt Oatly", price: 52000, badge: "Healthy", desc: "Bạc xỉu thanh nhẹ kết hợp sữa yến mạch thuần thực vật thơm dịu.", img: "../images/a4.jpg", cat: "popular" },
      { id: 5, name: "Matcha Espresso Layered", price: 55000, badge: "Must Try", desc: "Lớp Matcha Uji Nhật Bản phân tầng độc đáo cùng Espresso đậm đà.", img: "../images/a5.jpg", cat: "espresso" },
      { id: 6, name: "Cà Phê Pistachio Hạt Dẻ Cười", price: 58000, badge: "Mới Ra Mắt", desc: "Espresso pha cùng sốt Pistachio thơm bùi và kem tươi sánh mịn.", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop", cat: "espresso" },
{ id: 7, name: "Cold Brew Vải Hoa Lài", price: 48000, badge: "Thơm Nhẹ", desc: "Cà phê Ủ lạnh ngâm cùng mộng vải tươi và hương hoa lài tinh tế.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop", cat: "cold brew" },
      { id: 8, name: "Cà Phê Trứng Kem Béo Mây", price: 45000, badge: "Đặc Sản", desc: "Lớp kem trứng đánh bông mịn như mây phủ trên Espresso nóng hổi.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop", cat: "popular" },
      { id: 9, name: "Espresso Tonic Chanh Vàng", price: 50000, badge: "Sảng Khoái", desc: "Vị sủi bọt mát lạnh của Tonic kết hợp chanh vàng và Espresso.", img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop", cat: "espresso" },
      { id: 10, name: "Caramel Macchiato Đá Xay", price: 52000, badge: "Ngọt Ngào", desc: "Sốt Caramel đắng nhẹ quyện cùng sữa tươi béo và Espresso tầng.", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop", cat: "espresso" },
      { id: 11, name: "Cold Brew Nitro Bọt Tuyết", price: 58000, badge: "Độc Đáo", desc: "Cà phê ủ lạnh sục khí Nitơ tạo lớp bọt mịn màng như bia thủ công.", img: "../images/a6.jpg", cat: "cold brew" },
      { id: 12, name: "Combo Phin Giấy Cao Nguyên (10 túi)", price: 150000, badge: "Tiện Lợi", desc: "Túi lọc tiện lợi mang đi làm, đi học với 3 gu vị phối hợp cực chất.", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&auto=format&fit=crop", cat: "phin" }
    ];
    function renderProducts(items) {
      const container = document.getElementById('productList');
      const noRes = document.getElementById('noResults');
      
      if (items.length === 0) {
        container.innerHTML = '';
        noRes.style.display = 'block';
        return;
      }
      noRes.style.display = 'none';
      container.innerHTML = items.map(p => `
        <div class="card">
          <img src="${p.img}" alt="${p.name}" class="card-img" style="height: 220px; object-fit: cover; width: 100%;">
          <div class="card-body">
            <span class="badge">${p.badge}</span>
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="product-price">${p.price.toLocaleString('vi-VN')} đ</div>
            <button class="btn-primary btn-block" onclick="addToCart('${p.name}', ${p.price}, '${p.img}')">Thêm Vào Giỏ</button>
          </div>
        </div>
      `).join('');
    }
    // Bấm nút là lưu dữ liệu và nhảy thẳng qua cart.html luôn
    function addToCart(name, price, img) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      let existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          name: name,
price: price,
          image: img,
          quantity: 1
        });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location.href = "cart.html";
    }
    renderProducts(products);
    function searchProducts() {
      const kw = document.getElementById('productSearch').value.toLowerCase().trim();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(kw) || 
        p.desc.toLowerCase().includes(kw) || 
        p.cat.toLowerCase().includes(kw)
      );
      renderProducts(filtered);
    }
    document.getElementById('productSearch').addEventListener('input', searchProducts);
    function filterCategory(cat, btn) {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (cat === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.cat === cat);
        renderProducts(filtered);
      }
    }