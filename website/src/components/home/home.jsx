import React from 'react';
import { 
  SearchIcon, 
  ChevronRight, 
  Mail, 
  Phone,
  MessageSquare,
  Calendar,
  DollarSign,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/context/lunguageContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

  const categories = [
    { 
      name: t.home.categories_list.mercedes, 
      count: t.home.vehicles_count.replace('{count}', '15'), 
      image: '/mercedes.jpg' 
    },
    { 
      name: t.home.categories_list.toyota, 
      count: t.home.vehicles_count.replace('{count}', '25'), 
      image: '/hilux.jpg' 
    },
    { 
      name: t.home.categories_list.luxury, 
      count: t.home.vehicles_count.replace('{count}', '10'), 
      image: '/dailystock.jpg' 
    },
    { 
      name: t.home.categories_list.suv, 
      count: t.home.vehicles_count.replace('{count}', '20'), 
      image: '/stockupdate.jpg' 
    },
  ];

  const featuredVehicles = [
    { 
      name: 'Mercedes-Benz GLE 350d', 
      year: 2018, 
      price: 80000, 
      features: t.home.vehicle_features.luxury,
      image: '/gle.avif' 
    },
    { 
      name: 'Toyota Hilux Raider', 
      year: 2018, 
      price: 37000, 
      features: t.home.vehicle_features.reliable,
      image: '/2018.png' 
    },
    { 
      name: 'BMW X3', 
      year: 2015, 
      price: 16500, 
      features: t.home.vehicle_features.sporty,
      image: '/bmw2015.avif' 
    },
  ];

  const benefits = [
    {
      icon: Calendar,
      title: t.home.benefits.quality.title,
      description: t.home.benefits.quality.description
    },
    {
      icon: DollarSign,
      title: t.home.benefits.pricing.title,
      description: t.home.benefits.pricing.description
    },
    {
      icon: Shield,
      title: t.home.benefits.warranty.title,
      description: t.home.benefits.warranty.description
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-red-600 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 opacity-50" />
        <img 
          src="/home.jpg" 
          alt={t.home.hero_alt}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.home.slogan}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.home.sub_slogan}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.home.search}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-lg"
                />
              </div>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors" onClick={() => navigate('/vehicles')}>
                {t.home.search_button}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.home.categories}</h2>
            <p className="text-gray-600">{t.home.categories_description}</p>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            {t.home.viewAll} <ChevronRight className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-gray-300">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.featured}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.home.featured_description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-2">{vehicle.year}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-3">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">{vehicle.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.home.contact}</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">{t.home.contact_description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:tinashechikwaiti@gmail.com" 
               className="flex items-center justify-center space-x-4 p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={24} />
              <span>tinashechikwaiti@gmail.com</span>
            </a>
            <a href="tel:0783935399" 
               className="flex items-center justify-center space-x-4 p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors">
              <Phone size={24} />
              <span>078 393 5399</span>
            </a>
            <button className="flex items-center justify-center space-x-4 p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors">
              <MessageSquare size={24} />
              <span>{t.home.live_chat}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;