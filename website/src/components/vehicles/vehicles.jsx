// VehicleListingPage.jsx
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/lunguageContext";
import { Search, SlidersHorizontal, X, Mail, Phone } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  vehicles,
  filterVehicles,
  getBrands,
  getTypes,
  getYears,
} from "@/data";
import { Link } from "react-router-dom";

const VehicleListingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const [sortBy, setSortBy] = useState("latest");
  const [filters, setFilters] = useState({
    brand: "all",
    priceRange: [0, Math.max(...vehicles.map((v) => v.price))],
    year: "all",
    type: "all",
  });

  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const brands = getBrands();
  const types = getTypes();
  const years = getYears();

  useEffect(() => {
    const filtered = filterVehicles({
      ...filters,
      searchQuery,
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "yearNewOld":
          return b.year - a.year;
        default:
          return b.id - a.id;
      }
    });

    setFilteredVehicles(sorted);
  }, [filters, searchQuery, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };


  const clearFilters = () => {
    setFilters({
      brand: "all",
      priceRange: [0, Math.max(...vehicles.map((v) => v.price))],
      year: "all",
      type: "all",
    });
    setSearchQuery("");
  };

  const handleVehicleClick = (vehicleId) => {
    navigate(`/vehicles/${vehicleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-600 pt-20 pb-12">
      {/* Header with contact info */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-end gap-6 px-4 text-white">
        <a
          href="mailto:tinashechikwaiti@gmail.com"
          className="flex items-center gap-2"
        >
          <Mail size={20} />
          tinashechikwaiti@gmail.com
        </a>
        <a href="tel:078 393 5399" className="flex items-center gap-2">
          <Phone size={20} />
          078 393 5399
        </a>
      </div>

      <Card className="max-w-7xl mx-auto">
        <CardContent className="p-6">
          {/* Search and Filter Header */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200"
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal size={20} />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Vehicles</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Brand
                    </label>
                    <Select
                      value={filters.brand}
                      onValueChange={(value) =>
                        handleFilterChange("brand", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Brands</SelectItem>
                        {brands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Type
                    </label>
                    <Select
                      value={filters.type}
                      onValueChange={(value) =>
                        handleFilterChange("type", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Types</SelectItem>
                        {types.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Year
                    </label>
                    <Select
                      value={filters.year.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("year", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Years</SelectItem>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Price Range
                    </label>
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) =>
                        handleFilterChange("priceRange", value)
                      }
                      min={0}
                      max={Math.max(...vehicles.map((v) => v.price))}
                      step={1000}
                      className="mt-2"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>${filters.priceRange[0].toLocaleString()}</span>
                      <span>${filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Brand Select */}
            <Select>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>

              {/* Type Select */}
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>

              {/* Year Select */}
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(filters).map(([key, value]) => {
              if (
                !value ||
                (Array.isArray(value) &&
                  value[0] === 0 &&
                  value[1] === Math.max(...vehicles.map((v) => v.price)))
              )
                return null;
              return (
                <Badge key={key} variant="secondary" className="px-3 py-1">
                  {Array.isArray(value)
                    ? `$${value[0].toLocaleString()} - $${value[1].toLocaleString()}`
                    : value}
                  <button
                    onClick={() => handleFilterChange(key, "")}
                    className="ml-2"
                  >
                    <X size={14} />
                  </button>
                </Badge>
              );
            })}
          </div>

          {/* Vehicle Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleVehicleClick(vehicle.id)}
                >
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ${vehicle.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600">{vehicle.year}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">{vehicle.brand}</Badge>
                      <Badge variant="secondary">{vehicle.type}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No vehicles found matching your criteria
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleListingPage;
