import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    navigation: {
      home: 'Home',
      vehicles: 'Vehicles',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      slogan: "A clean car shows your best personality",
      sub_slogan: "Discover our exclusive collection of premium vehicles",
      search: "Search vehicles",
      search_button: "Find Your Car",
      hero_alt: "Luxury cars showcase",
      featured: "Featured Vehicles",
      featured_description: "Explore our hand-picked selection of premium vehicles",
      categories: "Vehicle Categories",
      categories_description: "Browse through our diverse collection of vehicles",
      contact: "Contact Us",
      contact_description: "We're here to help you find your perfect vehicle",
      viewAll: "View All",
      live_chat: "Live Chat",
      vehicles_count: "{count} vehicles",
      categories_list: {
        mercedes: "Mercedes Collection",
        toyota: "Toyota Collection",
        luxury: "Daily Stock",
        suv: "Stock Update"
      },
      vehicle_features: {
        luxury: "Premium leather seats, panoramic roof, advanced safety features",
        reliable: "Durable build, excellent fuel economy, spacious interior",
        sporty: "Dynamic performance, sporty design, premium audio system"
      },
      benefits: {
        quality: {
          title: "Quality Assured",
          description: "All our vehicles undergo rigorous quality checks"
        },
        pricing: {
          title: "Best Pricing",
          description: "Competitive prices with flexible financing options"
        },
        warranty: {
          title: "Extended Warranty",
          description: "Peace of mind with our comprehensive warranty coverage"
        }
      }
    },
    vehicles: {
      filters: {
        brand: 'Brand',
        price: 'Price Range',
        year: 'Year',
        type: 'Vehicle Type'
      },
      sort: {
        latest: 'Latest',
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        yearNewOld: 'Year: Newest to Oldest'
      },
      noResults: 'No vehicles found matching your criteria'
    },
    contact: {
      title: 'Get in Touch',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Send Message',
      location: 'Our Location',
      workingHours: 'Working Hours'
    },
    about: {
      title: 'About Tinashe Car Sale',
      mission: 'Our Mission',
      vision: 'Our Vision',
      values: 'Our Values'
    }
    ,
    footer: {
      description: 'Your trusted partner in finding the perfect vehicle for your needs.',
      quickLinks: 'Quick Links',
      links: {
        vehicles: 'Vehicles',
        about: 'About Us',
        contact: 'Contact',
        services: 'Services'
      },
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      location: 'Harare, Zimbabwe',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  sn: {
    navigation: {
      home: 'Kumba',
      vehicles: 'Mimota',
      about: 'Nezvedu',
      contact: 'Tibate'
    },
    home: {
      slogan: "Mota yakachena inoratidza hunhu hwako",
      sub_slogan: "Ona mimota yedu yakanaka",
      search: "Tsvaga mimota",
      search_button: "Tsvaga Mota Yako",
      hero_alt: "Mimota yakanaka",
      featured: "Mimota Yakanaka",
      featured_description: "Ona mimota yedu yakasarudzwa",
      categories: "Mahomwe eMimota",
      categories_description: "Ona mimota yedu yakasiyana-siyana",
      contact: "Tibate",
      contact_description: "Tiri pano kukubatsira kuwana mota yaunoda",
      viewAll: "Ona Zvose",
      live_chat: "Taurirana Nesu",
      vehicles_count: "Mimota {count}",
      categories_list: {
        mercedes: "Mimota yeMercedes",
        toyota: "Mimota yeToyota",
        luxury: "Mimota Yakanakisa",
        suv: "MaSUV neMaTruck"
      },
      vehicle_features: {
        luxury: "Zvigaro zvemakudya, denga rakapamhamha, zvinodzivirira tsaona",
        reliable: "Yakasimba, haiputsi fuel, yakakura mukati",
        sporty: "Inomhanya zvakanaka, yakagadzirwa zvakanaka, ine radio yakanaka"
      },
      benefits: {
        quality: {
          title: "Yakanaka Zvechokwadi",
          description: "Mimota yedu yose inoongororwa zvakanyanya"
        },
        pricing: {
          title: "Mitengo Yakanaka",
          description: "Mitengo yakaenzanirana uye tinogona kukubatsira kumhadza"
        },
        warranty: {
          title: "Warranty Yakareba",
          description: "Usane hanya nezvingakanganisika"
        }
      }
    },
    vehicles: {
      filters: {
        brand: 'Rudzi',
        price: 'Mutengo',
        year: 'Gore',
        type: 'Mhando yeMota'
      },
      sort: {
        latest: 'Dzazvino',
        priceLowHigh: 'Mutengo: Kubva Pasi',
        priceHighLow: 'Mutengo: Kubva Pamusoro',
        yearNewOld: 'Gore: Itsva kuTsara'
      },
      noResults: 'Hapana mimota yawanikwa'
    },
    contact: {
      title: 'Tibate',
      name: 'Zita Rako',
      email: 'Email',
      phone: 'Nhamba yeFoni',
      message: 'Shoko',
      submit: 'Tumira Shoko',
      location: 'Tiri Kupi',
      workingHours: 'Nguva yeBasa'
    },
    about: {
      title: 'Nezve Tinashe Car Sale',
      mission: 'Chinangwa Chedu',
      vision: 'Tarisiro Yedu',
      values: 'Tsika Dzedu'
    },
    footer: {
      description: 'Shamwari yenyu yakavimbika mukutsvaga mota yamunoda.',
      quickLinks: 'Zvikamu',
      links: {
        vehicles: 'Mimota',
        about: 'Nezvedu',
        contact: 'Tibate',
        services: 'Mabasa'
      },
      contactUs: 'Tibate',
      followUs: 'Titevere',
      location: 'Harare, Zimbabwe',
      rights: 'Kodzero dzose dzakachengetedzwa.',
      privacy: 'Zvakavanzika',
      terms: 'Mitemo'
    }
  },
  nd: {
    navigation: {
      home: 'Ikhaya',
      vehicles: 'Izimota',
      about: 'Ngathi',
      contact: 'Thinta Thina'
    },
    home: {
      slogan: "Imota ehlanzekileyo itshengisa ubuwena bakho",
      sub_slogan: "Thola izimota zethu ezinhle",
      search: "Dinga izimota",
      search_button: "Thola Imota Yakho",
      hero_alt: "Izimota ezinhle",
      featured: "Izimota Ezikhethiweyo",
      featured_description: "Bona izimota zethu ezikhethiweyo",
      categories: "Izinhlobo Zezimota",
      categories_description: "Bona izimota zethu ezahlukene",
      contact: "Thinta Thina",
      contact_description: "Silapha ukukusiza uthole imota oyifunayo",
      viewAll: "Bona Konke",
      live_chat: "Xoxa Lathi",
      vehicles_count: "Izimota {count}",
      categories_list: {
        mercedes: "Izimota zeMercedes",
        toyota: "Izimota zeToyota",
        luxury: "Izimota Ezinhle Kakhulu",
        suv: "AmaSUV lamaTruck"
      },
      vehicle_features: {
        luxury: "Izihlalo zesikhumba, uphahla olukhulu, izinto zokuphepha",
        reliable: "Yakhiwe yaqina, ayidli iphethroli, inkulu ngaphakathi",
        sporty: "Ihamba kuhle, yenziwe ngobuciko, lomculo omuhle"
      },
      benefits: {
        quality: {
          title: "Iqinisekisiwe Ikhwalithi",
          description: "Zonke izimota zethu zihlolwa ngokucophelela"
        },
        pricing: {
          title: "Amanani Amahle",
          description: "Amanani alungileyo kanye lezindlela zokuthenga ezikhethekileyo"
        },
        warranty: {
          title: "Iwaranti Ende",
          description: "Thula umoya ngokuvikeleka okupheleleyo"
        }
      }
    },
    vehicles: {
      filters: {
        brand: 'Inhlobo',
        price: 'Intengo',
        year: 'Unyaka',
        type: 'Uhlobo lweMota'
      },
      sort: {
        latest: 'Okwakamuva',
        priceLowHigh: 'Intengo: Kusukela Phansi',
        priceHighLow: 'Intengo: Kusukela Phezulu',
        yearNewOld: 'Unyaka: Entsha kuEndala'
      },
      noResults: 'Ayikho imota etholakalayo'
    },
    contact: {
      title: 'Thinta Thina',
      name: 'Ibizo Lakho',
      email: 'I-email',
      phone: 'Inombolo Yocingo',
      message: 'Umlayezo',
      submit: 'Thumela Umlayezo',
      location: 'Indawo Yethu',
      workingHours: 'Amahora Okusebenza'
    },
    about: {
      title: 'Mayelana loTinashe Car Sale',
      mission: 'Injongo Yethu',
      vision: 'Umbono Wethu',
      values: 'Izinto Esizikholelwayo'
    },
    footer: {
      description: 'Umngane wakho othembekileyo ekutholeni imota oyifunayo.',
      quickLinks: 'Izixhumanisi',
      links: {
        vehicles: 'Izimota',
        about: 'Ngathi',
        contact: 'Thinta Thina',
        services: 'Amasevisi'
      },
      contactUs: 'Thinta Thina',
      followUs: 'Silandele',
      location: 'Harare, Zimbabwe',
      rights: 'Wonke amalungelo agodliwe.',
      privacy: 'Inqubomgomo Yemfihlo',
      terms: 'Imithetho Yokusetshenziswa'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    translations,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;