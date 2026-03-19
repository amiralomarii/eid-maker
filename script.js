/* ========================================
   Ultima Premium Eid Gift - Dynamic Maker Script
   ======================================== */

// DOM Elements - Maker
const makerSection = document.getElementById('makerSection');
const mainContainer = document.querySelector('.main-container');
const generateBtn = document.getElementById('generateBtn');
const resultContainer = document.getElementById('resultContainer');
const shareLinkInput = document.getElementById('shareLink');
const copyBtn = document.getElementById('copyBtn');
const nativeShareBtn = document.getElementById('nativeShareBtn');
const previewBtn = document.getElementById('previewBtn');

// DOM Elements - UI
const eidiyaBtn = document.getElementById('eidiyaBtn');
const giftReveal = document.getElementById('giftReveal');
const giftAmount = document.getElementById('giftAmount');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const whatsappShareBtn = document.getElementById('whatsappShareBtn');
const scrollIndicator = document.getElementById('scrollIndicator');
const confettiContainer = document.getElementById('confetti');
const particlesContainer = document.getElementById('particles');
const heroSection = document.querySelector('.hero');
const signatureName = document.querySelector('.signature-name');
const websiteTitle = document.querySelector('.title');
const websiteSubtitle = document.querySelector('.subtitle');
const waBtnText = document.querySelector('#whatsappShareBtn span:first-child');

// Dialect Data
const DIALECTS = {
    jo: {
        title: "عيدية من {name}",
        subtitle: "كل عام وانتو بخير يا رب",
        btn_start: "اكبس هون عشان توخذ عيديتك",
        btn_loading: "استنى شوي...",
        warning: "ترا بس صورة، ما في مصاري عنجد 😂",
        blessing: "ينعاد عليكم بالصحة والسلامة 🤍",
        btn_retry: "جرب حظك كمان مرة",
        btn_wa: "احكي لـ {name} قديش طلعلك",
        wa_message: "هلا {name}، طلعلي: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    },
    kw: {
        title: "عيدية من {name}",
        subtitle: "عساكم من عواده، وكل عام وأنتم بخير",
        btn_start: "اضغط لاستلام العيدية",
        btn_loading: "جاري الكشف...",
        warning: "حدك صورة، ما في فلوس صجية 😂",
        blessing: "تقبل الله طاعتكم 🤍",
        btn_retry: "جرب حظك مرة ثانية",
        btn_wa: "قول حق {name} جم طلعلك",
        wa_message: "هلا {name}، عيدييتي: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    },
    eg: {
        title: "عيدية من {name}",
        subtitle: "كل سنة وانتوا طيبين يا رب",
        btn_start: "دوس هنا عشان تستلم العيدية",
        btn_loading: "ثواني بنحمل...",
        warning: "دي مجرد صورة، مفيش فلوس بجد 😂",
        blessing: "كل سنة وانتوا بصحة وسعادة 🤍",
        btn_retry: "جرب حظك تاني",
        btn_wa: "ابعت لـ {name} طلعلك كام",
        wa_message: "أزيك يا {name}، طلعلي: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    },
    ar: {
        title: "عيدية من {name}",
        subtitle: "كل عام وأنتم بخير وصحة وعافية",
        btn_start: "اضغط هنا لاستلام عيديتك",
        btn_loading: "جاري التحميل الآن...",
        warning: "هذه مجرد صورة، وليست نقوداً حقيقية 😂",
        blessing: "أعاده الله عليكم باليمن والبركات 🤍",
        btn_retry: "حاول مرة أخرى",
        btn_wa: "أخبر {name} بما حصلت عليه",
        wa_message: "مرحباً {name}، لقد حصلت على: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    },
    sa: {
        title: "عيدية من {name}",
        subtitle: "عساكم من عواده، وكل عام وأنتم بخير",
        btn_start: "اضغط هنا وخذ عيديتك",
        btn_loading: "جاري الكشف...",
        warning: "تراها صورة، ما بوه فلوس صدقية 😂",
        blessing: "الله يتقبل طاعتكم 🤍",
        btn_retry: "جرب حظك مرة ثانية",
        btn_wa: "علم {name} كم طلع لك",
        wa_message: "يا هلا {name}، هذي عيدييتي: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    },
    ps: {
        title: "عيدية من {name}",
        subtitle: "كل سنة وانتو سالمين يا رب",
        btn_start: "اضغط هون وخذ عيديتك",
        btn_loading: "اصبر شوي...",
        warning: "يظلمني منك هاي صورة، مش مصاري جد 😂",
        blessing: "ينعاد عليكم بالصحة والهنا 🤍",
        btn_retry: "جرب حظك كمان مرة",
        btn_wa: "احكي لـ {name} قديش طلعلك",
        wa_message: "يسعد مساك {name}، طلعلي: {amount}",
        currency_singular: "دينار",
        currency_plural: "دنانير"
    }
};

// State
let config = {
    name: "أمير العُمري",
    phone: "962776756018",
    dialect: "jo",
    theme: "theme-rose-navy"
};

// Verified Gift Images from GitHub
const gifts = [
    { text: '1', weight: 30, image: 'https://github.com/amiralomarii/eid/blob/main/1%20dinar.jpg?raw=true' },
    { text: '5', weight: 35, image: 'https://github.com/amiralomarii/eid/blob/main/5%20dinar.jpg?raw=true' },
    { text: '10', weight: 25, image: 'https://github.com/amiralomarii/eid/blob/main/10%20dinar.jpg?raw=true' },
    { text: '20', weight: 10, image: 'https://github.com/amiralomarii/eid/blob/main/20%20dinar.jpg?raw=true' }
];

let tryCount = 1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkUrlParams();
    createParticles();
    initializeAnimations();
});

// Check URL Params
function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('n')) {
        config.name = params.get('n');
        config.phone = params.get('p') || "";
        config.dialect = params.get('d') || "jo";
        config.theme = params.get('t') || "theme-rose-navy";
        
        applyConfig();
        makerSection.classList.add('hidden');
        mainContainer.classList.remove('hidden');
    } else {
        makerSection.classList.remove('hidden');
        mainContainer.classList.add('hidden');
    }
}

// Apply Selected Config
function applyConfig() {
    const lang = DIALECTS[config.dialect] || DIALECTS.jo;
    document.body.className = config.theme;
    
    // Update Text
    websiteTitle.innerHTML = lang.title.replace('{name}', config.name) + ' <span class="gift-emoji">🎁</span>';
    websiteSubtitle.textContent = lang.subtitle;
    eidiyaBtn.querySelector('.btn-text').textContent = lang.btn_start;
    signatureName.textContent = config.name;
    document.querySelector('.blessing').textContent = lang.blessing;
    document.querySelector('.fake-money-warning').textContent = lang.warning;
    tryAgainBtn.querySelector('span:first-child').textContent = lang.btn_retry;
    waBtnText.textContent = lang.btn_wa.replace('{name}', config.name.split(' ')[0]);
    
    // Page Title
    document.title = `عيدية ${config.name} 🎁`;
}

// Maker Logic
generateBtn.addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    const code = document.getElementById('countryCode').value;
    let phoneNum = document.getElementById('userPhone').value.trim();
    const dialect = document.getElementById('userDialect').value;
    const theme = document.getElementById('userTheme').value;

    if (!name) {
        alert("لطفاً أدخل اسمك");
        return;
    }

    // Success feedback
    generateBtn.textContent = "جاري الإنشاء... ✨";
    generateBtn.style.opacity = "0.7";
    
    setTimeout(() => {
        generateBtn.textContent = "تم إنشاء الرابط! ✅";
        generateBtn.style.opacity = "1";
        
        // Clean phone number (remove any leading zeros or plus signs if entered)
        phoneNum = phoneNum.replace(/^0+|^\+/ , '');
        const phone = code + phoneNum;

        const baseUrl = window.location.origin + window.location.pathname;
        const params = new URLSearchParams({
            n: name,
            p: phone,
            d: dialect,
            t: theme
        });

        const finalUrl = `${baseUrl}?${params.toString()}`;
        shareLinkInput.value = finalUrl;
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth' });
        
        // Update current local config to preview
        config = { name, phone, dialect, theme };
        
        setTimeout(() => {
            generateBtn.textContent = "إنشاء الرابط السحري ✨";
        }, 3000);
    }, 800);
});

copyBtn.addEventListener('click', () => {
    shareLinkInput.select();
    document.execCommand('copy');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "تم النسخ! ✅";
    copyBtn.style.background = "#2ecc71";
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = "var(--accent-color)";
    }, 2000);
});

nativeShareBtn.addEventListener('click', async () => {
    const shareData = {
        title: `عيدية ${config.name} 🎁`,
        text: `كل سنة وانت طيب! شوف عيديتك من ${config.name} هنا:`,
        url: shareLinkInput.value
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            // Fallback for browsers that don't support native share
            alert("المشاركة غير مدعومة في هذا المتصفح، يرجى نسخ الرابط يدوياً.");
        }
    } catch (err) {
        console.log("Share failed:", err);
    }
});

previewBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        applyConfig();
        makerSection.classList.add('hidden');
        mainContainer.classList.remove('hidden');
    }, 400);
});

// --- CORE GAME LOGIC ---

function getRandomGift() {
    const totalWeight = gifts.reduce((sum, gift) => sum + gift.weight, 0);
    let random = Math.random() * totalWeight;

    for (const gift of gifts) {
        if (random < gift.weight) return gift;
        random -= gift.weight;
    }
    return gifts[0];
}

function revealGift() {
    const selectedGift = getRandomGift();
    const lang = DIALECTS[config.dialect] || DIALECTS.jo;
    
    heroSection.style.display = 'none';
    
    const giftIconContainer = document.querySelector('.gift-icon');
    const img = new Image();
    img.src = selectedGift.image;
    img.className = 'gift-image';
    img.alt = 'عيدية';
    
    // Smooth transition for image loading
    img.onload = () => {
        giftIconContainer.innerHTML = '';
        giftIconContainer.appendChild(img);
    };
    
    img.onerror = () => {
        giftIconContainer.innerHTML = `<div class="image-error">🎁</div>`;
    };
    
    // Format amount text based on dialect and number
    let amtText = selectedGift.text;
    const unit = (amtText === '1' || amtText === '2' || amtText === '20') ? lang.currency_singular : lang.currency_plural;
    giftAmount.textContent = `💵 عيديتك: ${amtText} ${unit}`;

    giftReveal.classList.remove('hidden');
    createConfetti();
    createSparkles();
    
    // Auto-scroll to reveal content on mobile
    setTimeout(() => {
        giftReveal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    setTimeout(() => { if (window.scrollY < 50) scrollIndicator.classList.remove('hidden'); }, 1500);
}

whatsappShareBtn.addEventListener('click', () => {
    const lang = DIALECTS[config.dialect] || DIALECTS.jo;
    const cleanAmount = giftAmount.textContent.replace('💵 عيديتك:', '').trim();
    
    let text = lang.wa_message.replace('{name}', config.name.split(' ')[0]).replace('{amount}', cleanAmount);
    
    // Special formatting for Jordanian user request if specific message is wanted... 
    // but the generic one in the dialect object is safer for a "Maker".
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${config.phone}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
});

function resetGift() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        tryCount++;
        giftReveal.classList.add('hidden');
        heroSection.style.display = 'flex'; // Fix: Restore flex for centering
        eidiyaBtn.disabled = false;
        eidiyaBtn.style.pointerEvents = 'auto';
        eidiyaBtn.querySelector('.btn-text').textContent = DIALECTS[config.dialect].btn_start;
        window.scrollTo({ top: 0, behavior: 'instant' }); // Ensure top
    }, 400);
}

eidiyaBtn.addEventListener('click', () => {
    const lang = DIALECTS[config.dialect] || DIALECTS.jo;
    eidiyaBtn.disabled = true;
    eidiyaBtn.style.pointerEvents = 'none';
    eidiyaBtn.querySelector('.btn-text').textContent = lang.btn_loading;
    setTimeout(revealGift, 1500);
});

tryAgainBtn.addEventListener('click', resetGift);

// Particles & Animations
function createParticles() {
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDelay = `${Math.random() * 8}s`;
        particlesContainer.appendChild(p);
    }
}

function initializeAnimations() {
    document.querySelectorAll('.hero > *').forEach((el, i) => { el.style.animationDelay = `${i * 0.2}s`; });
}

function createConfetti() {
    const colors = ['#d4af37', '#ffffff', '#2d5a3d', '#ff6b6b'];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement('div');
        c.className = 'confetti-piece';
        c.style.left = `${Math.random() * 100}%`;
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.width = c.style.height = `${5 + Math.random() * 10}px`;
        c.style.animationDuration = `${2 + Math.random() * 2}s`;
        confettiContainer.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}

function createSparkles() { /* Standard sparkle logic here if needed, omitted for brevity */ }
