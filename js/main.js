/* ========================================
   大麥微針植髮醫院 - 主程式JavaScript
   ======================================== */

        // 輔助函數：隨機打亂陣列
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // 主視覺圖片
        const heroImages = [];
        for (let i = 1; i <= 23; i++) {
            heroImages.push(`Banner/hero-${i}.jpg`);
        }
        const heroTexts = [
            { title: "大麥微針植髮醫院", subtitle: "體驗世界級的植髮服務 — 自2006年以來，中國微針植髮技術的先驅與領導者。" },
            { title: "自然效果，持久美麗", subtitle: "30多家直營診所、10多項專利技術、Sullivan認證卓越品質，為全球患者帶來改變人生的植髮效果。" },
            { title: "今天就開始蛻變", subtitle: "提供免費線上諮詢！立即聯絡我們，展開您的植髮旅程。" },
            { title: "微針技術領導品牌", subtitle: "革命性植入筆技術，實現360°旋轉，打造自然生長方向，最小化創傷。" },
            { title: "18年卓越成就", subtitle: "信賴中國微針植髮技術的先驅與領導品牌。" }
        ];

        // 植髮前後對比圖片
        const beforeAfterImages = [];
        for (let i = 1; i <= 5; i++) beforeAfterImages.push({ path: `Beard/Beard-${i}.jpg`, type: '鬍鬚移植' });
        for (let i = 1; i <= 2; i++) beforeAfterImages.push({ path: `Eyebrow/Eyebrow-${i}.jpg`, type: '眉毛移植' });
        for (let i = 1; i <= 26; i++) beforeAfterImages.push({ path: `manBald/manBald-${i}.jpg`, type: '男性禿頂' });
        for (let i = 1; i <= 35; i++) beforeAfterImages.push({ path: `manHairline/manHairline-${i}.jpg`, type: '髮際線' });
        for (let i = 1; i <= 33; i++) beforeAfterImages.push({ path: `women/women-${i}.jpg`, type: '女性植髮' });

        const beforeAfterCaptions = [
            { title: "驚人蛻變", desc: "植髮前後對比" },
            { title: "自然效果", desc: "真實患者案例" },
            { title: "蛻變完成", desc: "改變人生的效果" },
            { title: "顯著改善", desc: "植髮前後照片" },
            { title: "自然美觀", desc: "專業植髮服務" },
            { title: "完美密度", desc: "卓越效果" },
            { title: "顯著蛻變", desc: "植髮前後對比" },
            { title: "新形象，新生活", desc: "患者成功故事" },
            { title: "改變人生", desc: "真實患者照片" },
            { title: "優秀成果", desc: "植髮前後對比" }
        ];



        // 醫患合照
        const doctorPatientPhotos = [];
        for (let i = 1; i <= 76; i++) {
            doctorPatientPhotos.push(`Photos/Photos-${i}.jpg`);
        }
        const photoCaptions = [
            { title: "開心患者", desc: "手術成功後與醫療團隊合影" },
            { title: "感恩患者", desc: "與醫師慶祝出色的植髮效果" },
            { title: "成功故事", desc: "又一位滿意患者分享喜悅" },
            { title: "重拾笑容", desc: "患者與陳醫師術後合影" },
            { title: "自然美觀", desc: "患者在陳醫師治療後開心合影" },
            { title: "改變人生", desc: "患者興奮展示新形象" },
            { title: "重拾自信", desc: "患者對蛻變效果感到非常滿意" },
            { title: "嶄新旅程", desc: "患者以驚人效果展開新生活" }
        ];

        // 診所環境
        const hospitalImages = [];
        for (let i = 1; i <= 73; i++) {
            hospitalImages.push(`Hospital/Hospital-${i}.jpg`);
        }
        const hospitalCaptions = [
            { title: "現代診所", desc: "最先進的醫療設施" },
            { title: "舒適等候區", desc: "在高級休息室放鬆等候" },
            { title: "手術室", desc: "無菌環境，先進設備" },
            { title: "諮詢室", desc: "私密專業的諮詢空間" },
            { title: "恢復區", desc: "舒適的術後恢復空間" },
            { title: "接待處", desc: "溫暖歡迎的入口" },
            { title: "治療室", desc: "設備完善，乾淨整潔" },
            { title: "醫師辦公室", desc: "專業的工作空間" },
            { title: "診所內部", desc: "現代化且溫馨" },
            { title: "現代設施", desc: "為您舒適而設計" }
        ];

        // 患者評價
        const testimonialsData = [
            { name: "陳志明", country: "中國台灣", text: "效果驚人！大麥的團隊非常專業，植髮效果超出了我的所有期待。強烈推薦給所有考慮植髮的人！", initials: "CZ" },
            { name: "李美琪", country: "中國香港", text: "從諮詢到術後恢復，整個體驗都非常棒。醫師專業知識豐富，我的頭髮看起來完全自然！", initials: "LM" },
            { name: "黃志豪", country: "馬來西亞", text: "我專程從吉隆坡來進行植髮手術，一切都值得。微針技術非常先進，恢復速度比我預期的快很多。", initials: "HZ" },
            { name: "林志明", country: "新加坡", text: "專業、友善，效果就是最好的證明。我很高興選擇了大麥，術後照護也非常完善！", initials: "LZ" },
            { name: "吳美芳", country: "新加坡", text: "最好的決定！整個團隊讓我在整個過程中都感到很安心。我的髮際線看起來很棒，自信也提升了。", initials: "WM" },
            { name: "何志強", country: "中國澳門", text: "從開始到結束都是卓越的服務。醫師是真正的專家，我對效果感到非常滿意！", initials: "HZ" }
        ];

        // FAQ資料
        const faqData = [
            { q: "植髮手術需要多長時間？", a: "手術時間取決於需要的毛囊單位數量。一般來說，手術需要4-8小時。我們的團隊會在諮詢期間為您提供精確的時間評估。" },
            { q: "什麼時候可以看到效果？", a: "您會在3-4個月開始看到新的頭髮生長。最佳效果通常在術後12-18個月顯現，頭髮會持續增厚並成熟。" },
            { q: "手術會痛嗎？", a: "我們使用局部麻醉確保您在整個手術過程中感到舒適。大多數患者報告不適感極小，可以在手術期間看電影或聽音樂。" },
            { q: "手術後多久可以回去工作？", a: "大多數患者可以在2-3天內恢復文書工作。對於需要體力勞動的工作，我們建議休息7-10天。我們的團隊會提供詳細的術後照護指引。" },
            { q: "植髮效果是永久的嗎？", a: "是的！移植的頭髮取自供髮區（後腦勺），該區域的毛囊天生對DHT和脫髮有抵抗力。這些頭髮將會持續自然生長一輩子。" },
            { q: "你們有提供線上諮詢服務嗎？", a: "有的！我們提供免費線上諮詢服務，讓您在術前就能了解適合的植髮方案。專業醫師團隊會為您詳細解答所有植髮相關問題。" },
            { q: "什麼是微針植髮技術？", a: "微針植髮使用專利植入筆技術，允許360°旋轉以實現自然的頭髮生長方向。它創口更小（0.6-1.0mm）、恢復更快、密度更高。" },
            { q: "手術後可以洗頭嗎？", a: "可以！使用我們的微針技術，大多數患者在24小時內即可輕柔洗頭。我們會為您提供詳細的術後照護指引。" },
            { q: "植髮費用是多少？", a: "費用取決於需要的毛囊單位數量和具體的植髮方案。我們提供具有競爭力的價格和靈活的付款方案。請聯絡我們獲取個人化報價。" },
            { q: "你們在其他城市有診所嗎？", a: "有的！我們在中國各大城市擁有30多家直營診所，包括北京、上海、深圳、廣州、成都等。" }
        ];

        // 初始化主視覺
        let currentSlide = 0;
        const selectedHeroes = shuffleArray(heroImages).slice(0, 3);
        
        function renderHero() {
            const slidesContainer = document.getElementById('heroSlides');
            if (!slidesContainer) return;
            
            // 檢查是否有靜態內容 - 如果有，只替換圖片src
            const existingSlides = slidesContainer.querySelectorAll('.hero-slide');
            if (existingSlides.length > 0) {
                // 只替換圖片，保留文案
                existingSlides.forEach((slide, index) => {
                    const img = slide.querySelector('img');
                    if (img && selectedHeroes[index]) {
                        img.src = selectedHeroes[index];
                    }
                });
                return;
            }
            
            // 如果沒有靜態內容，就生成完整的hero
            slidesContainer.innerHTML = selectedHeroes.map((img, index) => {
                const text = heroTexts[index % heroTexts.length];
                return `
                    <div class="hero-slide">
                        <img src="${img}" alt="Hero ${index + 1}">
                        <div class="hero-overlay">
                            <div class="hero-content">
                                <h1>${text.title}</h1>
                                <p>${text.subtitle}</p>
                                <a href="contact.html" class="btn">免費諮詢</a>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        function goToSlide(index) {
            const heroSlides = document.getElementById('heroSlides');
            if (!heroSlides) return;
            
            const slides = heroSlides.querySelectorAll('.hero-slide');
            if (slides.length === 0) return;
            
            currentSlide = index;
            heroSlides.style.transform = `translateX(-${index * 100}%)`;
            document.querySelectorAll('.hero-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        function nextSlide() {
            const heroSlides = document.getElementById('heroSlides');
            if (!heroSlides) return;
            
            const slides = heroSlides.querySelectorAll('.hero-slide');
            if (slides.length === 0) return;
            
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        }
        
        // 初始化植髮前後對比
        function renderBeforeAfter() {
            const container = document.getElementById('beforeAfterGallery');
            if (!container) return;
            
            // 每次重新整理時都重新生成，即使有靜態內容
            const selected = shuffleArray([...beforeAfterImages]).slice(0, 6);
            
            container.innerHTML = selected.map((item, index) => {
                const caption = beforeAfterCaptions[index % beforeAfterCaptions.length];
                return `
                    <div class="gallery-item">
                        <img src="${item.path}" alt="${item.type}">
                        <div class="gallery-overlay">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // 初始化醫患合照
        function renderDoctorPatientPhotos() {
            const container = document.getElementById('doctorPatientPhotos');
            if (!container) return;
            
            // 每次重新整理時都重新生成，即使有靜態內容
            const selected = shuffleArray([...doctorPatientPhotos]).slice(0, 8);
            
            container.innerHTML = selected.map((path, index) => {
                const caption = photoCaptions[index % photoCaptions.length];
                return `
                    <div class="photo-item">
                        <img src="${path}" alt="患者照片 ${index + 1}">
                        <div class="photo-caption">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // 初始化患者評價
        function renderTestimonials() {
            const container = document.getElementById('testimonials');
            if (!container) return;
            
            // 檢查是否有靜態評價 - 如果有，不覆蓋
            if (container.querySelector('.testimonial-card')) {
                return;
            }
            
            container.innerHTML = testimonialsData.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">"${t.text}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${t.initials}</div>
                        <div class="testimonial-info">
                            <h4>${t.name}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${t.country}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // 初始化診所畫廊
        function renderHospitalGallery() {
            const container = document.getElementById('hospitalGallery');
            if (!container) return;
            
            // 每次重新整理時都重新生成，即使有靜態內容
            const selected = shuffleArray([...hospitalImages]).slice(0, 6);
            
            container.innerHTML = selected.map((path, index) => {
                const caption = hospitalCaptions[index % hospitalCaptions.length];
                return `
                    <div class="hospital-item">
                        <img src="${path}" alt="診所 ${index + 1}">
                        <div class="hospital-caption">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // 初始化FAQ
        function renderFAQ() {
            const container = document.getElementById('faqContainer');
            if (!container) return;
            
            // 檢查是否有靜態FAQ項目 - 如果有，不覆蓋
            if (container.querySelector('.faq-item')) {
                return;
            }
            
            container.innerHTML = faqData.map((faq, index) => `
                <div class="faq-item ${index === 0 ? 'active' : ''}">
                    <div class="faq-question" onclick="toggleFAQElement(this)">
                        <span>${faq.q}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        ${faq.a}
                    </div>
                </div>
            `).join('');
        }
        
        function toggleFAQ(element) {
            // 處理傳入 element 的情況（faq.html 中使用）
            const faqItem = element.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
                return;
            }
            
            // 處理傳入 index 的情況（其他頁面）
            const items = document.querySelectorAll('.faq-item');
            if (!items[element]) return;
            items[element].classList.toggle('active');
        }
        
        function toggleFAQElement(element) {
            const faqItem = element.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
            }
        }
        
        // 複製到剪貼簿功能
        function copyToClipboard(text, label) {
            navigator.clipboard.writeText(text).then(function() {
                // 顯示成功提示，可以建立一個臨時的提示元素
                showCopySuccess(label);
            }).catch(function(err) {
                // 降級方案：使用傳統的 document.execCommand
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    showCopySuccess(label);
                } catch (e) {
                    console.error('複製失敗:', e);
                }
                document.body.removeChild(textarea);
            });
        }
        
        function showCopySuccess(label) {
            // 尋找已有的copy-notification元素
            let notification = document.getElementById('copy-notification');
            
            if (!notification) {
                // 如果沒有，建立一個新的
                notification = document.createElement('div');
                notification.id = 'copy-notification';
                notification.className = 'copy-notification';
                notification.innerHTML = `<i class="fas fa-check-circle"></i> <span id="copy-text"></span>`;
                document.body.appendChild(notification);
            }
            
            // 更新文本內容
            const copyText = document.getElementById('copy-text');
            if (copyText) {
                copyText.textContent = `${label}已複製！`;
            }
            
            // 顯示通知
            notification.classList.add('show');
            
            // 2秒後隱藏
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2500);
        }
        
        // 初始化FAQ分類標籤
        function initFAQCategories() {
            const tabs = document.querySelectorAll('.category-tab');
            const categories = document.querySelectorAll('.faq-category');
            
            if (tabs.length === 0 || categories.length === 0) return;
            
            // 初始顯示所有分類
            categories.forEach(cat => cat.classList.add('active'));
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const categoryId = this.getAttribute('data-category');
                    
                    // 更新活躍標籤
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // 更新活躍分類
                    if (categoryId === 'all') {
                        // 顯示所有分類
                        categories.forEach(cat => cat.classList.add('active'));
                    } else {
                        // 只顯示選中的分類
                        categories.forEach(cat => cat.classList.remove('active'));
                        const targetCategory = document.getElementById(categoryId);
                        if (targetCategory) {
                            targetCategory.classList.add('active');
                        }
                    }
                });
            });
        }

        // 漢堡選單切換
        function toggleHamburger() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');
            
            if (hamburger && nav) {
                hamburger.classList.toggle('active');
                nav.classList.toggle('active');
                
                // 選單開啟時防止捲動
                document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
            }
        }
        
        // 回到頂部按鈕
        function initBackToTop() {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(backToTopBtn);
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // 初始化所有
        document.addEventListener('DOMContentLoaded', function() {
            renderHero();
            renderBeforeAfter();
            renderDoctorPatientPhotos();
            renderTestimonials();
            renderHospitalGallery();
            renderFAQ();
            initFAQCategories();
            initBackToTop();
            
            // 新增漢堡選單點擊監聽器
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.addEventListener('click', toggleHamburger);
            }
            
            // 點擊連結時關閉選單
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function() {
                    const hamburger = document.querySelector('.hamburger');
                    const nav = document.querySelector('nav');
                    if (hamburger && nav) {
                        hamburger.classList.remove('active');
                        nav.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        });
        
        // 自動輪播主視覺（暫時停用）
        // setInterval(nextSlide, 5000);
    