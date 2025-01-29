// إضافة أو إزالة الكلاس 'navbar-scrolled' بناءً على موضع التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar'); // تحديد عنصر الـ navbar
    const toggler = document.querySelector('.navbar-toggler'); // تحديد زر التبديل

    // التحقق مما إذا تم التمرير لأسفل
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled'); // إضافة الكلاس لتغيير مظهر الـ navbar عند التمرير
        toggler.classList.add('scrolled'); // إضافة الكلاس لتغيير مظهر زر التبديل عند التمرير
    } else {
        navbar.classList.remove('navbar-scrolled'); // إزالة الكلاس إذا لم يتم التمرير
        toggler.classList.remove('scrolled'); // إزالة الكلاس إذا لم يتم التمرير
    }
});









// translations


let translations = {
    en: {
        en: 'انجليزي',
        ar: 'عربي',
        about: 'About US',
        services: 'Services',
        gallery: 'Gallery',
        blog: 'Blog',
        contact: 'Contact US',
        contact1: 'Contact',
        consult: "Consult",
        consult1: "Consultation",
        pricing: "Pricing",
        careers: 'Careers',
        // banner Area
        shogah_design_studio: 'Shogah Design Studio',
        // about Area
        story: 'OUR STORY',
        title_story1: 'The Essence of Luxury in Residential Designs ',
        title_story2: 'The Design Philosophy <br> at SHOGAH',
        our_story1: 'In the heart of every luxury residence lies a story waiting to unfold — a narrative of elegance, comfort, and unparalleled sophistication. This is where our journey begins.',
        our_story2: 'Welcome to SHOGAH design studio, where we transcend the ordinary to craft extraordinary living spaces. Our story is one of passion, creativity, and a relentless pursuit of perfection in every detail.',
        our_story3: 'Inspired by timeless design, we aim to redefine luxury living. With an eye for beauty and dedication to excellence, we create spaces that reflect individuality and elevate daily expe',
        our_story4: 'Luxury, to us, is a blend of comfort, functionality, and aesthetic finesse. We take pride in turning dreams into reality, crafting bespoke interiors that evoke emotion and captivate the senses.',
        our_story5: 'Our projects showcase our commitment to craftsmanship and innovation. From concept to completion, we meticulously manage every detail to ensure each space is a masterpiece.',
        our_story6: 'Great design is born from understanding our clients desires and fostering open communication. We build lasting relationships, ensuring that each design truly resonates with our clients.',
        our_story7: 'Join us on this journey of discovery and transformation. Let [Your Company Name] be your partner in bringing your vision to life, creating spaces that transcend imagination and leave a legacy of beauty.',
        learn: 'Learn More',
        team: 'OUR Team',
        team_dis: 'In order for a project to be successful you need to find a team who you click with and whose body of work is a reflection of your own personal style. We take great pride in offering a very friendly and approachable interior design service. As a multidisciplinary team consisting of experienced and talented designers, interior architects and project coordinators we provide a comprehensive service that allows us to undertake and seamlessly deliver on some of the most ambitious and prestigious design projects around the world. Our carefully assembled team of worldwide contractors, suppliers and artisans have been personally chosen by Sophie Paterson to ensure they are adept at carrying out our designs to our same exacting levels of precision, quality and care.',
        approach: 'OUR Approach',
        approach_dis: 'In order for a project to be successful you need to find a team who you click with and whose body of work is a reflection of your own personal style. We take great pride in offering a very friendly and approachable interior design service. As a multidisciplinary team consisting of experienced and talented designers, interior architects and project coordinators we provide a comprehensive service that allows us to undertake and seamlessly deliver on some of the most ambitious and prestigious design projects around the world. Our carefully assembled team of worldwide contractors, suppliers and artisans have been personally chosen by Sophie Paterson to ensure they are adept at carrying out our designs to our same exacting levels of precision, quality and care.',
        // FAQ Area
        // services Area
        services1: 'Creating beautiful, comfortable and timeless interiors is our passion. Our team of talented interior designers and architects create homes that are...',
        services2: 'tailored to the specific requirements of each client, taking into account location, context, brief and personal taste of the client. We are able to work on a multitude of different projects, from purely furnishing show homes for developers to sympathetic refurbishments of Grade II listed buildings of historical importance and large scale residential projects requiring full interior design and interior architecture services. We have honed our process and service over years of experience to ensure we provide an efficient but in depth design service that is split into the following stages.',
        brief: 'The Brief',
        brief_dis: 'Key to the success of any project is ensuring that the interiors are an authentic reflection of our client’s requirements and aspirations. During the brief stage we take the time to learn about how the client wishes to use the property, their personal style, lifestyle and aspirations. We will build a picture of the project through a site visit or floor plans and photographs as well as ensure that we understand all factors such as time scale, budget, and any structural or administrative requirements. Following this thorough briefing stage we will send a proposal to the client outlining the brief as we understand it, with an estimated budget for the FF&E and our associated design fee.',
        concept: 'Concept',
        concept_dis: 'Interpreting the detailed brief we will present the concept designs, consisting of floor plans illustrating the proposed furniture layouts and any structural changes that may be required, and mood board presentations containing samples of all proposed finishes as well as imagery of suggested furniture and joinery concepts. This is a very collaborative stage and we invite our clients to give as much feedback as possible to ensure we are on the right page.',
        detail: 'detail',
        detail_dis: 'Having approved all of the concept designs we progress to the design development and detail design stage. All final bespoke furniture, joinery and interior architecture drawings will be presented, along with a all final finishes and curated art and accessories for clients to approve. At this stage we will also present a fully itemised breakdown of costs in line with the agreed budget.',
        realisation: 'Realisation',
        realisation_dis: 'The schedule of works will be outlined and agreed. With all onsite requirements met, works will commence and our project coordinators and designers will attend regular site meetings to ensure our designs are being carried out to their exact specifications and that the project is progressing as planned. We will keep the client updated throughout as well as oversee the snagging during the snagging period, allowing our client to enjoy their property with peace of mind.',
        // gallary Area
        latest_project: 'Our latest project',
        recent: 'Our Recent Works may impress you',
        // contact Area
        cfaq: 'Contact For Any Query',
        cfac: 'Contact For Any Consult',
        mail: 'E-mail',
        phone: 'Phone',
        address: 'Address',
        address_dis1: 'Amman/Jordan',
        address_dis2: 'Riyadh/KSA',
        address_dis3: 'Dubai/UAE',
        first_name: 'First Name',
        first_name_error: 'Please enter your first name',
        last_name: 'Last Name',
        last_name_error: 'Please enter your last name',
        mail_error: 'Please enter a valid email address',
        phone: 'Phone Number',
        phone_error: 'Please enter your phone number',
        subject: 'Subject',
        subjectError: 'Please enter a subject',
        consult_error: 'Please enter a Consultation',
        message: 'Message',
        message_error: 'Please enter your message',
        send: 'Send Message',
        job_title: 'Job Title',
        job_title_error: 'Please enter your job title',
        cv: 'Upload CV',
        cv_error: 'Please upload your CV',
        portfolio: 'Upload Portfolio',
        portfolio_error: 'Please upload your portfolio',
        aos: 'AREAS OF CONSULTATION',
        aos1: 'Furniture and Accessories Selection',
        aos2: 'Space Organization',
        aos3: 'Finishing Materials and Colors',
        aos4: 'Technical Plans',
        aos5: 'Furniture Layout and Space Planning',
        // footer area
        follow: 'Follow Us',
        social: 'Let us be social',
    },
    ar: {
        en: 'EN',
        ar: 'AR',
        about: 'معلومات عنا',
        services: 'الخدمات',
        gallery: 'المعرض',
        blog: 'المدونه',
        contact: 'تواصل معنا',
        contact1: 'تواصل معنا',
        consult: "استشاره",
        consult1: "استشاره",
        pricing: "التسعير",
        careers: 'الوظائف',
        // banner Area
        shogah_design_studio: 'استوديو شوغا للتصميم',
        // about Area
        story: 'من نحن',
        title_story1: 'جوهر الفخامة في التصاميم الداخلية',
        title_story2: 'فلسفة التصميم في شوغا',
        our_story1: 'في قلب كل مسكن فاخر تكمن قصة تنتظر أن تتكشف — حكاية من الأناقة والراحة والتفوق اللامحدود. هنا تبدأ رحلتنا',
        our_story2: 'مرحبًا بكم في استوديو شوغا للتصميم، حيث نتجاوز العادي لنصنع مساحات معيشة استثنائية. قصتنا هي قصة شغف وإبداع وسعي لا ينتهي نحو الكمال في كل تفصيلة',
        our_story3: 'مستوحاة من التصميم الخالد، نهدف إلى إعادة تعريف العيش الفاخر. بنظرة نحو الجمال والتزام بالجودة، نخلق مساحات تعكس الفردية وترتقي بالتجربة اليومية',
        our_story4: 'الرفاهية بالنسبة لنا هي مزيج من الراحة والوظيفية والبراعة الجمالية. نفخر بتحويل الأحلام إلى حقيقة، وصنع ديكورات داخلية مخصصة تثير العواطف وتأسر الحواس',
        our_story5: 'تظهر مشاريعنا التزامنا بالحرفية والابتكار. من المفهوم إلى التنفيذ، ندير كل تفصيلة بدقة لضمان أن كل مساحة هي تحفة فنية',
        our_story6: 'يولد التصميم العظيم من فهم رغبات عملائنا وتعزيز التواصل المفتوح. نبني علاقات دائمة، لضمان أن كل تصميم يتجاوب حقًا مع عملائنا',
        our_story7: 'انضموا إلينا في هذه الرحلة من الاكتشاف والتحول. دعوا [اسم شركتكم] يكون شريككم في تحقيق رؤيتكم، وصنع مساحات تتجاوز الخيال وتترك إرثًا من الجمال',
        learn: 'تعرف على المزيد',
        team: 'فريقنا',
        team_dis: 'لنجاح أي مشروع، تحتاج إلى العثور على فريق يتوافق معك ويعكس عمله أسلوبك الشخصي. نفخر بتقديم خدمة تصميم داخلي ودية وقابلة للوصول. كفريق متعدد التخصصات يتكون من مصممين موهوبين ومعماريين داخليين ومنسقي مشاريع، نقدم خدمة شاملة تتيح لنا تنفيذ وتسليم بعض من أرقى مشاريع التصميم حول العالم. فريقنا المختار بعناية من المقاولين والموردين والحرفيين في جميع أنحاء العالم قد تم اختياره شخصيًا بواسطة Sophie Paterson لضمان قدرتهم على تنفيذ تصميماتنا بأعلى مستويات الدقة والجودة والعناية.',
        approach: 'نهجنا',
        approach_dis: 'لنجاح أي مشروع، تحتاج إلى العثور على فريق يتوافق معك ويعكس عمله أسلوبك الشخصي. نفخر بتقديم خدمة تصميم داخلي ودية وقابلة للوصول. كفريق متعدد التخصصات يتكون من مصممين موهوبين ومعماريين داخليين ومنسقي مشاريع، نقدم خدمة شاملة تتيح لنا تنفيذ وتسليم بعض من أرقى مشاريع التصميم حول العالم. فريقنا المختار بعناية من المقاولين والموردين والحرفيين في جميع أنحاء العالم قد تم اختياره شخصيًا بواسطة Sophie Paterson لضمان قدرتهم على تنفيذ تصميماتنا بأعلى مستويات الدقة والجودة والعناية.',
        services1: 'صنع ديكورات داخلية جميلة ومريحة وخالدة هو شغفنا. فريقنا من المصممين الداخليين والمعماريين الموهوبين يخلق منازل...',
        services2: 'مصممة لتلبية المتطلبات الخاصة لكل عميل، مع مراعاة الموقع والسياق والموجز والذوق الشخصي للعميل. نحن قادرون على العمل في مجموعة متنوعة من المشاريع، من تأثيث منازل العرض بالكامل للمطورين إلى ترميمات متعاطفة للمباني التاريخية من الفئة الثانية ومشاريع السكن الكبرى التي تتطلب خدمات تصميم داخلي وهندسة داخلية كاملة. لقد صقلنا عمليتنا وخدمتنا على مدار سنوات من الخبرة لضمان تقديم خدمة تصميم فعالة ولكن معمقة مقسمة إلى المراحل التالية.',
        brief: 'الموجز',
        brief_dis: 'أساس نجاح أي مشروع هو التأكد من أن الديكورات الداخلية تعكس بصدق متطلبات وتطلعات العميل. خلال مرحلة الموجز، نأخذ الوقت لفهم كيفية استخدام العميل للعقار وأسلوبه الشخصي ونمط حياته وتطلعاته. سنبني صورة عن المشروع من خلال زيارة الموقع أو مخططات الطوابق والصور، وكذلك نضمن فهم جميع العوامل مثل الجدول الزمني والميزانية وأي متطلبات هيكلية أو إدارية. بعد مرحلة الموجز الشاملة، سنرسل اقتراحًا للعميل يوضح الموجز كما نفهمه، مع ميزانية تقديرية للأثاث والمعدات ورسوم التصميم المرتبطة بنا.',
        concept: 'المفهوم',
        concept_dis: 'بتفسير الموجز المفصل، سنقدم تصاميم المفهوم، التي تتضمن مخططات الطوابق التي توضح ترتيبات الأثاث المقترحة وأي تغييرات هيكلية قد تكون مطلوبة، وعروض الألواح المزاجية التي تحتوي على عينات من جميع التشطيبات المقترحة وصور للأثاث المقترح ومفاهيم النجارة. هذه مرحلة تعاونية للغاية وندعو عملائنا لتقديم أكبر قدر ممكن من الملاحظات لضمان أننا نسير في الاتجاه الصحيح.',
        detail: 'التفاصيل',
        detail_dis: 'بعد الموافقة على جميع تصاميم المفهوم، ننتقل إلى مرحلة تطوير التصميم وتصميم التفاصيل. سيتم تقديم جميع تصاميم الأثاث المخصصة النهائية، وتصاميم النجارة والهندسة الداخلية، جنبًا إلى جنب مع جميع التشطيبات النهائية والفنون المختارة والإكسسوارات للموافقة عليها من قبل العملاء. في هذه المرحلة، سنقدم أيضًا تفصيلًا كاملاً للتكاليف بما يتماشى مع الميزانية المتفق عليها.',
        realisation: 'التنفيذ',
        realisation_dis: 'سيتم تحديد وجدولة الأعمال المطلوبة والاتفاق عليها. مع تلبية جميع المتطلبات على الموقع، ستبدأ الأعمال وسيحضر منسقو المشاريع والمصممون لدينا الاجتماعات المنتظمة لضمان تنفيذ تصاميمنا وفقًا لمواصفاتها الدقيقة وتقدم المشروع كما هو مخطط. سنبقي العميل على اطلاع طوال الوقت ونشرف على حل العيوب خلال فترة حل العيوب، مما يتيح لعميلنا الاستمتاع بممتلكاتهم براحة بال.',
        latest_project: 'أحدث مشروع لدينا',
        recent: 'أحدث أعمالنا قد تبهرك',
        cfaq: 'اتصل لأي استفسار',
        cfac: 'اتصل لأي استشارة',
        mail: 'البريد الإلكتروني',
        phone: 'الهاتف',
        address: 'العنوان',
        address_dis1: 'عمان/الأردن',
        address_dis2: 'الرياض/السعودية',
        address_dis3: 'دبي/الإمارات',
        first_name: 'الاسم الأول',
        first_name_error: 'يرجى إدخال اسمك الأول',
        last_name: 'الاسم الأخير',
        last_name_error: 'يرجى إدخال اسمك الأخير',
        mail_error: 'يرجى إدخال بريد إلكتروني صحيح',
        phone: 'رقم الهاتف',
        phone_error: 'يرجى إدخال رقم هاتفك',
        subject: 'الموضوع',
        subjectError: 'يرجى إدخال موضوع',
        consult_error: 'يرجى إدخال استشارة',
        message: 'الرسالة',
        message_error: 'يرجى إدخال رسالتك',
        send: 'إرسال',
        job_title: 'المسمى الوظيفي',
        job_title_error: 'يرجى إدخال مسماك الوظيفي',
        cv: 'تحميل السيرة الذاتية',
        cv_error: 'يرجى تحميل سيرتك الذاتية',
        portfolio: 'تحميل ملف الأعمال',
        portfolio_error: 'يرجى تحميل ملف أعمالك',
        aos: 'مجالات الاستشارة',
        aos1: 'اختيار الأثاث والإكسسوارات',
        aos2: 'تنظيم المساحة',
        aos3: 'مواد التشطيب والألوان',
        aos4: 'الخطط الفنية',
        aos5: 'تخطيط الأثاث وتنظيم المساحات',
        follow: 'تابعنا',
        social: 'دعونا نكون اجتماعيين',
    }
};
let rtlLanguages = ['ar']; // قائمة اللغات التي تتطلب الاتجاه من اليمين إلى اليسار
document.getElementById('languageSelector').addEventListener('change', (e) => {
    let selectedLang = e.target.value;
    applyTranslations(selectedLang);
    applyFont(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang);
});

function applyTranslations(language) {
    document.querySelectorAll('[data-key]').forEach((element) => {
        let key = element.getAttribute('data-key');
        element.innerHTML = translations[language][key];
    });

    let elements = document.querySelectorAll(".rotat");
    let textRightElements = document.querySelectorAll(".text_right");
    let textCenterElements = document.querySelectorAll(".text_center");
    let services1 = document.querySelectorAll("#services1");
    let lists = document.querySelectorAll('.list'); 

    lists.forEach((element) => { 
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'rtl';
        } else {
            element.style.direction = 'ltr';
        }
    });

    Array.from(elements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'rtl';
        } else {
            element.style.direction = 'ltr';
        }
    });

    Array.from(textRightElements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.textAlign = 'right';
            element.style.paddingRight = '30px';
        } else {
            element.style.textAlign = 'left';
            element.style.paddingRight = '0';
        }
    });

    Array.from(textCenterElements).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.textAlign = 'center';
        } else {
            element.style.textAlign = 'left';
        }
    });

    Array.from(services1).forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.letterSpacing = '0';
        } else {
            // لإزالة تأثير letterSpacing إذا كان موجوداً
            element.style.letterSpacing = '5px';
        }
    });
    
    
}

function applyFont(language) {
    let body = document.body;
    if (rtlLanguages.includes(language)) {
        body.classList.add('arabic-font');
        body.classList.remove('english-font');
    } else {
        body.classList.add('english-font');
        body.classList.remove('arabic-font');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('languageSelector').value = savedLanguage;
    applyTranslations(savedLanguage);
    applyFont(savedLanguage);
});












// FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = "500px"; // Set max-height to 500px
        }
    });
}

















// loaded
document.addEventListener("DOMContentLoaded", () => {
    const loadedDiv = document.querySelector('.loaded');
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const loader = document.getElementById("loader");
    const myWeb = document.getElementById("myweb");

    // إضافة فئة animate بعد فترة زمنية قصيرة
    setTimeout(() => {
        loadedDiv.classList.add('animate');
    }, 50); // تأخير بسيط لبدء الأنيميشن

    // إضافة فئة final بعد انتهاء الأنيميشن الأول
    setTimeout(() => {
        loadedDiv.classList.add('final');
    }, 1100); // يجب أن يكون أكبر من مدة الانتقال الأولى (1 ثانية)

    // إعادة توجيه الصفحة بعد انتهاء الأنيميشن الثاني
    setTimeout(() => {
        loader.style.display = "none";
        myWeb.style.display = "block";

        // تحديث حالة زر التنقل بناءً على حجم الشاشة
        updateNavToggleDisplay();
    }, 2200); // يجب أن يكون أكبر من مدة الانتقال الكلية (1 ثانية + 1 ثانية)

    // التحقق من حجم الشاشة عند تغيير الحجم
    window.addEventListener('resize', updateNavToggleDisplay);

    function updateNavToggleDisplay() {
        if (window.innerWidth < 961) {
            mobileNavToggle.style.display = "block";
        } else {
            mobileNavToggle.style.display = "none";
        }
    }
});




















// slide in gallary page

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
});