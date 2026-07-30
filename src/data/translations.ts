export type Language = 'en' | 'hi';

export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Us',
      clients: 'Clients',
      contact: 'Contact',
      quote: 'Get Quote',
      counterStatus: 'Mahavir Agency & Novelty • Wholesale & Retail Counter Open',
    },
    // Hero Section
    hero: {
      badge: 'Mahavir Agency & Novelty • Wholesale & Retail Open',
      headlinePrefix: 'Your One Stop Destination for',
      headlineGradient: 'Premium Stationery',
      tagline: '"Everything You Need for College, Office & Business"',
      highlights: [
        'Wholesale & Retail',
        'Office Essentials',
        'College Stationery',
        'Corporate Supplies',
        'Art Materials',
        'Printing Accessories'
      ],
      btnServices: 'Our Services',
      btnAbout: 'About Store',
      btnContact: 'Contact Store'
    },
    // About Section
    about: {
      badge: 'About Our Store',
      title: 'Trusted Stationery Partner for',
      titleHighlight: 'Decades',
      overview: 'Mahavir Agency & Novelty is a trusted stationery store offering high-quality products for colleges, offices, businesses, and individual customers. We provide wholesale and retail services with affordable prices, genuine products, and excellent customer support.',
      tabs: {
        wholesale: 'Wholesale & Bulk Supply',
        retail: 'Retail Store Counter',
        institutions: 'Institutional & Office Contracts'
      },
      points: {
        wholesaleTitle: 'Wholesale Supply Chain & B2B Billing',
        wholesaleDesc: 'Direct wholesale distribution for retail shops, offices, and institutions with heavy bulk volume discounts.',
        wholesalePoints: [
          'Direct factory tie-ups with leading stationery brands',
          'Tiered volume pricing for bulk purchase orders',
          'Customized billing & GST compliance invoices',
          'City-wide express logistics & pallet deliveries'
        ],
        retailTitle: 'Retail Store Counter',
        retailDesc: 'Welcoming walk-in store counter for students, parents, and teachers to explore top brand notebooks, pens, and gift novelties.',
        retailPoints: [
          'Over 7,000+ ready products in stock',
          'Friendly & knowledgeable stationery staff',
          'Instant single item purchases with zero minimums',
          'Exclusive student geometry & art discounts'
        ],
        institutionsTitle: 'Institutional & Corporate Contracts',
        institutionsDesc: 'Complete annual stationery procurement contracts for colleges, coaching institutes, and corporate offices.',
        institutionsPoints: [
          'Custom notebook & student kit customization',
          'Whiteboard accessories, markers & duster supplies',
          'Printer toner cartridges & office filing solutions',
          'Scheduled term-wise bulk deliveries'
        ]
      }
    },
    // Why Choose Us
    whyUs: {
      badge: 'Why Choose Us',
      title: 'The Mahavir Agency Advantage',
      subtitle: 'Delivering excellence, genuine stationery products, and trusted service to thousands of satisfied colleges, institutions, offices, and retail customers.',
      benefits: [
        { title: 'Premium Quality', desc: 'We source only top-tier, high-GSM paper and precision-crafted stationery instruments.' },
        { title: 'Affordable Pricing', desc: 'Direct manufacturer relationships guarantee maximum value for every customer.' },
        { title: 'Wholesale Rates', desc: 'Unbeatable tier pricing for bulk institutional, college, and commercial buyers.' },
        { title: 'Retail Sales', desc: 'Friendly walk-in counter offering single items with premium service for students & individuals.' },
        { title: 'Bulk Orders', desc: 'Specialized order processing with flexible payment plans and custom branding options.' },
        { title: 'Trusted Brand', desc: 'Over decades of reputation built on integrity, genuine products, and customer trust.' },
        { title: 'Genuine Products', desc: '100% authentic stationery from authorized brand distributors with quality seals.' },
        { title: 'Fast Service', desc: 'Swift order fulfillment, rapid inquiry responses, and express local delivery.' },
        { title: 'Wide Product Range', desc: 'Over 7,000+ catalog items covering college, office, paper, art, and novelty needs.' },
        { title: 'Customer Satisfaction', desc: 'Dedicated support team ensuring every inquiry and purchase exceeds expectations.' }
      ]
    },
    // Services Section
    services: {
      badge: 'Our Key Offerings',
      title: 'Comprehensive Stationery Services',
      subtitle: 'Tailored supply chain solutions for Wholesale dealers, Retail customers, Colleges, Academies, Corporate Offices, and Custom Orders.',
      items: [
        { title: 'Wholesale Supply', desc: 'Bulk distribution of genuine stationery stock directly to retail shops, dealers, and educational suppliers at competitive rates.', badge: 'Wholesale Tier' },
        { title: 'Retail Store', desc: 'A modern physical and online store where students, teachers, and walk-in shoppers can purchase single items with expert advice.', badge: 'Retail Walk-In' },
        { title: 'Bulk Orders & Contracts', desc: 'Specialized corporate & institutional procurement packages with scheduled batch deliveries, custom billing, and credit terms.', badge: 'B2B Procurement' },
        { title: 'Academy & Institutional Programs', desc: 'Complete study material kits, answer sheets, art materials, and classroom whiteboard accessories.', badge: 'Institutional' },
        { title: 'College & University Stationery', desc: 'Engineering drawing tools, spiral project notebooks, graph sheets, calculators, and dissertation binding supplies.', badge: 'Higher Ed' },
        { title: 'Office & Corporate Supply', desc: 'Lever arch files, copier paper reams, printer ink, toners, desk organizers, desktop calculators, and sticky notes.', badge: 'Corporate' },
        { title: 'Custom Branding & Gifts', desc: 'Personalized corporate gift boxes, embossed executive diaries, custom logo pens, and novelty promotional giveaways.', badge: 'Custom Print' },
        { title: 'Doorstep Express Delivery', desc: 'Reliable, safe, and fast doorstep shipping for office, college, and commercial orders with real-time dispatch tracking.', badge: 'Fast Dispatch' }
      ]
    },
    // Target Audience & Clients Section
    clients: {
      badge: 'Target Audience & Institutional Clients',
      title: 'Serving Diverse Sectors Across the Region',
      subtitle: 'From premier educational institutions to corporate headquarters and government offices, Mahavir Agency provides tailored stationery solutions.',
      audiences: [
        { title: 'Coaching & Training Academies', desc: 'Test paper reams, graph registers, whiteboards, markers, and student study kits.' },
        { title: 'Colleges & Universities', desc: 'Engineering drawing paper, graph registers, spiral notebooks, calculators, and dissertation binding.' },
        { title: 'Corporate Offices & IT Hubs', desc: 'Lever arch files, A4 copier paper reams, printer ink toners, desk organizers, and sticky notes.' },
        { title: 'Commercial Businesses & Shops', desc: 'Accounting ledger registers, cash memo books, lamination pouches, staplers, and packaging tapes.' },
        { title: 'Government Organizations', desc: 'Official filing folders, treasury registers, computer stationery, and tender supply fulfillment.' },
        { title: 'Students & Teachers', desc: 'High-GSM notebooks, gel pens, highlighters, exam pads, drawing books, and project supplies.' }
      ]
    },
    // Stats Section
    stats: [
      { value: '4000+', label: 'Happy Customers', desc: 'Retail & wholesale shoppers' },
      { value: '50+', label: 'Colleges & Academies', desc: 'Higher education supply' },
      { value: '100+', label: 'Office Clients', desc: 'Corporate & B2B accounts' },
      { value: '7000+', label: 'Products Available', desc: 'Ready stock catalog items' }
    ],
    // Contact Section
    contact: {
      badge: 'Get In Touch',
      title: 'Visit Store or Contact Us',
      subtitle: 'Have questions about bulk orders, institutional contracts, or retail availability? Visit our store or reach out directly!',
      storeTitle: 'Store Details',
      addressLabel: 'Store Address',
      addressText: '246, Shaniwar Peth, Front of Shivraj Dhaba Parcel, Karad. Maharashtra 415110',
      phoneLabel: 'Phone & Orders',
      phoneText1: '+91 9423262994',
      phoneText2: '+91 9822510022 (Wholesale Counter)',
      emailLabel: 'Email Address',
      emailText: 'mahaviragency3883@gmail.com',
      hoursLabel: 'Business Hours',
      hoursText: 'Monday - Sunday: 10:00 AM - 8:30 PM',
      tuesdayClosed: 'Tuesday: Closed',
      whatsappBtn: 'Instant WhatsApp Inquiry',
      mapTitle: 'Interactive Store Map',
      mapDirections: 'Get Directions',
      mapNotice: 'Located in Shaniwar Peth, Karad. Convenient wholesale and retail counter parking available.'
    },
    // Footer
    footer: {
      desc: 'Your premier wholesale and retail stationery destination in Karad. Trusted provider of high-quality office essentials, college notebooks, printing paper, and novelty gift products.',
      rights: 'All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Supply',
      gst: 'GST Invoice Compliance'
    }
  },
  hi: {
    // Header & Navigation
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      whyUs: 'हम ही क्यों',
      clients: 'ग्राहक',
      contact: 'संपर्क',
      quote: 'कोटेशन पाएं',
      counterStatus: 'महावीर एजेंसी एंड नोवेल्टी • थोक और खुदरा काउंटर खुला है',
    },
    // Hero Section
    hero: {
      badge: 'महावीर एजेंसी एंड नोवेल्टी • थोक और खुदरा सेवा उपलब्ध',
      headlinePrefix: 'प्रीमियम स्टेशनरी के लिए आपका',
      headlineGradient: 'एकमात्र स्थान',
      tagline: '"कॉलेज, कार्यालय और व्यवसाय के लिए आपकी सभी ज़रूरतें"',
      highlights: [
        'थोक और खुदरा',
        'कार्यालय आवश्यक वस्तुएं',
        'कॉलेज स्टेशनरी',
        'कॉर्पोरेट आपूर्ति',
        'कला सामग्री',
        'प्रिंटिंग एक्सेसरीज'
      ],
      btnServices: 'हमारी सेवाएं',
      btnAbout: 'स्टोर के बारे में',
      btnContact: 'संपर्क करें'
    },
    // About Section
    about: {
      badge: 'हमारे स्टोर के बारे में',
      title: 'दशकों से भरोसेमंद स्टेशनरी',
      titleHighlight: 'साझेदार',
      overview: 'महावीर एजेंसी एंड नोवेल्टी एक विश्वसनीय स्टेशनरी स्टोर है जो कॉलेजों, कार्यालयों, व्यवसायों और व्यक्तिगत ग्राहकों के लिए उच्च गुणवत्ता वाले उत्पाद प्रदान करता है। हम किफायती दरों, असली उत्पादों और उत्कृष्ट सेवा के साथ थोक व खुदरा बिक्री प्रदान करते हैं।',
      tabs: {
        wholesale: 'थोक एवं थोक आपूर्ति',
        retail: 'खुदरा स्टोर काउंटर',
        institutions: 'संस्थागत व कॉर्पोरेट अनुबंध'
      },
      points: {
        wholesaleTitle: 'थोक आपूर्ति श्रृंखला और B2B बिलिंग',
        wholesaleDesc: 'खुदरा दुकानों, कार्यालयों और संस्थानों के लिए भारी छूट के साथ सीधा थोक वितरण।',
        wholesalePoints: [
          'प्रमुख स्टेशनरी ब्रांडों के साथ सीधा अनुबंध',
          'थोक ऑर्डर पर विशेष छूट दरें',
          'अनुकूलित बिलिंग और GST अनुपालन बिल',
          'शहर भर में एक्सप्रेस डिलीवरी सेवा'
        ],
        retailTitle: 'खुदरा स्टोर काउंटर',
        retailDesc: 'छात्रों, अभिभावकों और शिक्षकों के लिए शीर्ष ब्रांडों की नोटबुक, पेन और उपहार आइटम खरीदने हेतु स्वागत योग्य स्टोर काउंटर।',
        retailPoints: [
          '7,000+ से अधिक उत्पाद तैयार स्टॉक में उपलब्ध',
          'सहायक और अनुभवी स्टेशनरी स्टाफ',
          'बिना किसी न्यूनतम सीमा के एकल उत्पाद की त्वरित खरीदारी',
          'छात्रों के लिए विशेष छूट'
        ],
        institutionsTitle: 'संस्थागत एवं कॉर्पोरेट अनुबंध',
        institutionsDesc: 'कॉलेजों, कोचिंग संस्थानों और कॉर्पोरेट कार्यालयों के लिए संपूर्ण वार्षिक स्टेशनरी खरीद अनुबंध।',
        institutionsPoints: [
          'कस्टम नोटबुक और छात्र किट निर्माण',
          'व्हाइटबोर्ड एक्सेसरीज़, मार्कर और डस्टर आपूर्ति',
          'प्रिंटर टोनर कारतूस और कार्यालय फाइलिंग समाधान',
          'निर्धारित समय पर थोक आपूर्ति'
        ]
      }
    },
    // Why Choose Us
    whyUs: {
      badge: 'हमें क्यों चुनें',
      title: 'महावीर एजेंसी का विशेष लाभ',
      subtitle: 'हजारों संतुष्ट कॉलेजों, संस्थानों, कार्यालयों और खुदरा ग्राहकों को उत्कृष्टता, प्रामाणिक उत्पाद और भरोसेमंद सेवा प्रदान करना।',
      benefits: [
        { title: 'उत्कृष्ट गुणवत्ता', desc: 'हम केवल उच्च-GSM पेपर और सटीक निर्मित स्टेशनरी उपकरणों की आपूर्ति करते हैं।' },
        { title: 'किफायती मूल्य', desc: 'सीधे निर्माताओं से जुड़ाव हर ग्राहक के लिए सर्वोत्तम मूल्य की गारंटी देता है।' },
        { title: 'थोक दरें', desc: 'संस्थागत, कॉलेज और व्यावसायिक खरीदारों के लिए अपराजेय थोक दरें।' },
        { title: 'खुदरा बिक्री', desc: 'छात्रों और व्यक्तियों के लिए सिंगल आइटम खरीदने हेतु सुविधाजनक काउंटर।' },
        { title: 'थोक ऑर्डर', desc: 'लचीली भुगतान योजनाओं और कस्टम ब्रांडिंग के साथ विशेष ऑर्डर प्रोसेसिंग।' },
        { title: 'विश्वसनीय ब्रांड', desc: 'ईमानदारी, असली उत्पादों और ग्राहक विश्वास पर बनी दशकों की प्रतिष्ठा।' },
        { title: 'प्रामाणिक उत्पाद', desc: 'गुणवत्ता सील के साथ अधिकृत ब्रांड वितरकों से 100% असली स्टेशनरी।' },
        { title: 'त्वरित सेवा', desc: 'तेज ऑर्डर पूर्ति, त्वरित पूछताछ प्रतिक्रिया और एक्सप्रेस स्थानीय डिलीवरी।' },
        { title: 'विस्तृत उत्पाद श्रृंखला', desc: 'कॉलेज, कार्यालय, पेपर, आर्ट और गिफ्ट की जरूरतों को पूरा करने वाले 7,000+ आइटम।' },
        { title: 'ग्राहक संतुष्टि', desc: 'समर्पित सहायता टीम जो यह सुनिश्चित करती है कि आपकी हर खरीदारी बेहतरीन हो।' }
      ]
    },
    // Services Section
    services: {
      badge: 'हमारी प्रमुख पेशकशें',
      title: 'संपूर्ण स्टेशनरी सेवाएं',
      subtitle: 'थोक विक्रेताओं, खुदरा ग्राहकों, कॉलेजों, अकादमियों और कॉर्पोरेट कार्यालयों के लिए अनुकूलित आपूर्ति समाधान।',
      items: [
        { title: 'थोक आपूर्ति', desc: 'खुदरा दुकानों, डीलरों और शैक्षणिक आपूर्तिकर्ताओं को प्रतिस्पर्धी दरों पर स्टेशनरी का थोक वितरण।', badge: 'थोक श्रेणी' },
        { title: 'खुदरा स्टोर', desc: 'एक आधुनिक भौतिक स्टोर जहां छात्र, शिक्षक और ग्राहक विशेषज्ञ सलाह के साथ खरीदारी कर सकते हैं।', badge: 'खुदरा काउंटर' },
        { title: 'थोक ऑर्डर और अनुबंध', desc: 'निर्धारित डिलीवरी, कस्टम बिलिंग और क्रेडिट शर्तों के साथ विशेष कॉर्पोरेट खरीद पैकेज।', badge: 'B2B खरीद' },
        { title: 'अकादमी और संस्थागत कार्यक्रम', desc: 'संपूर्ण अध्ययन सामग्री किट, उत्तर पुस्तिकाएं, कला सामग्री और कक्षा की आवश्यकताएं।', badge: 'संस्थागत' },
        { title: 'कॉलेज और विश्वविद्यालय स्टेशनरी', desc: 'इंजीनियरिंग ड्राइंग उपकरण, स्पाइरल प्रोजेक्ट नोटबुक, ग्राफ शीट और कैलकुलेटर आपूर्ति।', badge: 'उच्च शिक्षा' },
        { title: 'कार्यालय और कॉर्पोरेट आपूर्ति', desc: 'लीवर आर्क फाइलें, ए4 कॉपी पेपर रीम, प्रिंटर स्याही, टोनर, डेस्क ऑर्गनाइज़र और स्टिकी नोट्स।', badge: 'कॉर्पोरेट' },
        { title: 'कस्टम ब्रांडिंग और उपहार', desc: 'व्यक्तिगत कॉर्पोरेट उपहार बॉक्स, उभरी हुई कार्यकारी डायरियां और लोगो पेन।', badge: 'कस्टम प्रिंट' },
        { title: 'डोरस्टेप एक्सप्रेस डिलीवरी', desc: 'कार्यालय, कॉलेज और व्यावसायिक ऑर्डरों के लिए सुरक्षित और तेज़ डिलीवरी सेवा।', badge: 'तेज डिलीवरी' }
      ]
    },
    // Target Audience & Clients Section
    clients: {
      badge: 'लक्षित दर्शक एवं संस्थागत ग्राहक',
      title: 'क्षेत्र भर में विभिन्न क्षेत्रों की सेवा',
      subtitle: 'प्रमुख शैक्षणिक संस्थानों से लेकर कॉर्पोरेट मुख्यालयों और सरकारी कार्यालयों तक, महावीर एजेंसी स्टेशनरी समाधान प्रदान करती है।',
      audiences: [
        { title: 'कोचिंग और प्रशिक्षण अकादमियां', desc: 'टेस्ट पेपर, ग्राफ रजिस्टर, व्हाइटबोर्ड, मार्कर और छात्र अध्ययन किट।' },
        { title: 'कॉलेज और विश्वविद्यालय', desc: 'इंजीनियरिंग ड्राइंग पेपर, स्पाइरल नोटबुक, कैलकुलेटर और प्रोजेक्ट बाइंडिंग सामग्री।' },
        { title: 'कॉर्पोरेट कार्यालय और आईटी हब', desc: 'फाइलें, ए4 प्रिंटर पेपर रीम, प्रिंटर टोनर, डेस्क ऑर्गनाइज़र और स्टिकी नोट्स।' },
        { title: 'व्यावसायिक व्यवसाय और दुकानें', desc: 'अकाउंटिंग लेजर रजिस्टर, कैश मेमो बुक्स, लेमिनेशन पाउच और स्टेपलर।' },
        { title: 'सरकारी संगठन', desc: 'आधिकारिक फाइलिंग फोल्डर, ट्रेजरी रजिस्टर, कंप्यूटर स्टेशनरी और निविदा आपूर्ति।' },
        { title: 'छात्र और शिक्षक', desc: 'उच्च गुणवत्ता की नोटबुक, जेल पेन, हाईलाइटर, एग्जाम पैड और ड्राइंग बुक्स।' }
      ]
    },
    // Stats Section
    stats: [
      { value: '4000+', label: 'संतुष्ट ग्राहक', desc: 'खुदरा और थोक खरीदार' },
      { value: '50+', label: 'कॉलेज और अकादमियां', desc: 'उच्च शिक्षा आपूर्ति' },
      { value: '100+', label: 'कार्यालय ग्राहक', desc: 'कॉर्पोरेट और B2B खाते' },
      { value: '7000+', label: 'उपलब्ध उत्पाद', desc: 'रेडी स्टॉक कैटलॉग आइटम' }
    ],
    // Contact Section
    contact: {
      badge: 'संपर्क करें',
      title: 'स्टोर पर आएं या हमसे संपर्क करें',
      subtitle: 'थोक ऑर्डर, संस्थागत अनुबंध या खुदरा उपलब्धता के बारे में प्रश्न हैं? हमारे स्टोर पर आएं या सीधे संपर्क करें!',
      storeTitle: 'स्टोर विवरण',
      addressLabel: 'स्टोर का पता',
      addressText: '246, शनिवार पेठ, शिवराज ढाबा पार्सल के सामने, कराड। महाराष्ट्र 415110',
      phoneLabel: 'फोन और ऑर्डर',
      phoneText1: '+91 9423262994',
      phoneText2: '+91 9822510022 (थोक काउंटर)',
      emailLabel: 'ईमेल पता',
      emailText: 'mahaviragency3883@gmail.com',
      hoursLabel: 'कार्य का समय',
      hoursText: 'सोमवार - रविवार: सुबह 10:00 - रात 8:30',
      tuesdayClosed: 'मंगलवार: बंद',
      whatsappBtn: 'व्हाट्सएप पर तुरंत पूछताछ करें',
      mapTitle: 'इंटरएक्टिव स्टोर मैप',
      mapDirections: 'दिशा-निर्देश प्राप्त करें',
      mapNotice: 'शनिवार पेठ, कराड में स्थित। सुविधाजनक थोक और खुदरा काउंटर पार्किंग उपलब्ध।'
    },
    // Footer
    footer: {
      desc: 'कराड में आपका प्रमुख थोक और खुदरा स्टेशनरी केंद्र। उच्च गुणवत्ता वाले कार्यालय आवश्यक वस्तुओं, कॉलेज नोटबुक और प्रिंटिंग पेपर का भरोसेमंद आपूर्तिकर्ता।',
      rights: 'सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'आपूर्ति की शर्तें',
      gst: 'GST चालान अनुपालन'
    }
  }
};
