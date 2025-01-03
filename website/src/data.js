// Types for TypeScript support
//export type VehicleType = 'Sedan' | 'SUV' | 'Pickup' | 'Van' | 'Hatchback' | 'Hybrid';



export const vehicles = [
  // Mercedes Collection
  {
    id: 1,
    name: 'Mercedes-Benz C200 W205',
    price: 30000,
    year: 2016,
    brand: 'Mercedes-Benz',
    type: 'Sedan',
    model: 'C200',
    image: '/c200.png',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['AMG Line', 'LED Headlights', 'Navigation', 'Leather Seats'],
    description: 'Premium condition C200 with full service history'
  },
  {
    id: 2,
    name: 'Mercedes-Benz C200 W205',
    price: 26000,
    year: 2015,
    brand: 'Mercedes-Benz',
    type: 'Sedan',
    model: 'C200',
    image: '/c200.png',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Premium Package', 'Sunroof', 'Parking Sensors']
  },
  {
    id: 3,
    name: 'Mercedes-Benz C220d W205',
    price: 30000,
    year: 2016,
    brand: 'Mercedes-Benz',
    type: 'Sedan',
    model: 'C220d',
    image: '/220.png',
    transmission: 'Automatic',
    fuelType: 'Diesel'
  },
  {
    id: 4,
    name: 'Mercedes-Benz E320',
    price: 5500,
    year: 2007,
    brand: 'Mercedes-Benz',
    type: 'Sedan',
    model: 'E320',
    image: '/e320.png',
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  
  // Toyota Collection
  {
    id: 5,
    name: 'Toyota Hilux Raider GD6 Clubcab',
    price: 37000,
    year: 2018,
    brand: 'Toyota',
    type: 'Pickup',
    model: 'Hilux',
    image: '/clubcab2.png',
    transmission: 'Manual',
    fuelType: 'Diesel',
    features: ['Bull Bar', 'Tonneau Cover', 'Side Steps']
  },
  {
    id: 6,
    name: 'Toyota Hilux D4D',
    price: 18500,
    year: 2012,
    brand: 'Toyota',
    type: 'Pickup',
    model: 'Hilux',
    image: '/d4d.webp',
    transmission: 'Manual',
    fuelType: 'Diesel'
  },
  {
    id: 7,
    name: 'Toyota Hilux Dakar GD6',
    price: 45000,
    year: 2018,
    brand: 'Toyota',
    type: 'Pickup',
    model: 'Hilux',
    image: '/twin.png',
    features: ['Dakar Edition', 'Navigation', 'Leather Interior']
  },
  {
    id: 8,
    name: 'Toyota Revo Doublecab',
    price: 78000,
    year: 2023,
    brand: 'Toyota',
    type: 'Pickup',
    model: 'Hilux Revo',
    image: '/revo.jpg',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    features: ['Premium Audio', 'Apple CarPlay', 'Lane Departure Warning']
  },
  
  // Other Vehicles
  {
    id: 9,
    name: 'Volkswagen Golf 7 TSI',
    price: 12500,
    year: 2018,
    brand: 'Volkswagen',
    type: 'Hatchback',
    model: 'Golf',
    image: '/gti.png',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Touch Screen', 'Rear Camera', 'Park Distance Control']
  },
  {
    id: 10,
    name: 'Mazda CX5 LTD',
    price: 15000,
    year: 2014,
    brand: 'Mazda',
    type: 'SUV',
    model: 'CX-5',
    image: '/cx5.webp',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Leather Seats', 'Sunroof', 'Bose Sound System']
  }
];

export const getVehicleById = (id) => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const filterVehicles1 = ({
  brand = '',
  priceRange = [0, 1000000],
  year = '',
  type = '',
  searchQuery = ''
}) => {
  return vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = !brand || vehicle.brand === brand;
    const matchesType = !type || vehicle.type === type;
    const matchesYear = !year || vehicle.year === parseInt(year.toString());
    const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];

    return matchesSearch && matchesBrand && matchesType && matchesYear && matchesPrice;
  });
};

export const filterVehicles = ({
    brand = 'all',
    priceRange = [0, 1000000],
    year = 'all',
    type = 'all',
    searchQuery = ''
  }) => {
    return vehicles.filter(vehicle => {
      const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = brand === 'all' || vehicle.brand === brand;
      const matchesType = type === 'all' || vehicle.type === type;
      const matchesYear = year === 'all' || vehicle.year === parseInt(year.toString());
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
  
      return matchesSearch && matchesBrand && matchesType && matchesYear && matchesPrice;
    });
  };

export const getBrands = () => {
  return [...new Set(vehicles.map(vehicle => vehicle.brand))].sort();
};

export const getTypes = () => {
  return [...new Set(vehicles.map(vehicle => vehicle.type))].sort();
};

export const getYears = () => {
  return [...new Set(vehicles.map(vehicle => vehicle.year))].sort((a, b) => b - a);
};

