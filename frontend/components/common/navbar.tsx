'use client';// Este componente es un ejemplo de cómo podrías mostrar una cuadrícula de productos en tu página de productos.

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronRight, Tag, Smartphone,Cpu, Gamepad} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la búsqueda
    console.log('Buscando:', searchQuery);
    // Redirigir a página de resultados
    // router.push(`/buscar?q=${searchQuery}`);
  };

  // Categorías para el sidebar
  const categories = [
    { name: 'Ofertas del día', icon: Tag, href: '/categoria/ofertas', highlight: true },
    { name: 'Tecnología', icon: Smartphone, href: '/categoria/tecnologia', subcategories: ['Notebooks', 'Celulares', 'Iphone',  'Tablets', 'Audifonos',] },
    {name: 'Hardware', icon: Cpu , href: '/categoria/hardware', subcategories: ['Componentes', 'Periféricos', 'Almacenamiento', 'Monitores', 'Accesorios']},
    {name: 'Gaming', icon: Gamepad, href: '/categoria/gaming', subcategories: ['Consolas', 'Juegos', 'Accesorios']},
  ];

  // Links adicionales para el sidebar
  const additionalLinks = [
    { name: 'Mis compras', href: '/mis-compras' },
    { name: 'Mis direcciones', href: '/direcciones' },
    { name: 'Métodos de pago', href: '/pagos' },
    { name: 'Ayuda', href: '/ayuda' },
    { name: 'Puntos y beneficios', href: '/beneficios' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Barra superior 
      <div className="bg-red-600 text-white text-xs py-1 text-center">
        <span>Envíos gratis desde $49.990 | 3 meses sin intereses con tarjetas seleccionadas</span>
      </div>
      */}

      {/* Navbar principal */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Botón Menú + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-gray-700"
            >
              <Menu className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">Menú</span>
            </button>

            <Link href="/" className="shrink-0">
              <span className="text-2xl font-bold text-red-600 hover:text-red-700 transition">
                MyEcommerce
              </span>
            </Link>
          </div>

          {/* Buscador - versión desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-12 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition text-sm"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Iconos de usuario y carrito */}
          <div className="flex items-center gap-4">
            {/* User - versión desktop */}
            <Link href="/auth" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-red-600 transition group">
              <User className="w-5 h-5" />
              <div className="text-sm">
                <p className="font-semibold">Hola</p>
                <p className="text-xs text-gray-500 group-hover:text-red-600">Inicia sesión</p>
              </div>
            </Link>

            {/* Carrito */}
            <Link href="/cart" className="relative text-gray-700 hover:text-red-600 transition">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600 transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Buscador móvil */}
        <form onSubmit={handleSearch} className="md:hidden mt-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition text-sm"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <Link
              href="/auth"
              className="block py-2 text-gray-700 hover:text-red-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Iniciar sesión</span>
              </div>
            </Link>
            {/* Agrega más links aquí si es necesario */}
          </div>
        )}
      </div>



      {/* Sidebar - Menú desplegable */}
      {/* Overlay oscuro */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header del sidebar */}
        <div className="bg-red-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <User className="w-8 h-8" />
            <div>
              <p className="font-semibold">Hola, usuario</p>
              <p className="text-sm opacity-90">Inicia sesión para ver tus beneficios</p>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="hover:bg-red-700 p-1 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido del sidebar - Scroll */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Sección de categorías */}
          <div className="p-4 border-b">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Todas las categorías</h3>
            <div className="space-y-2">
              {categories.map((category, idx) => (
                <div key={idx} className="group">
                  <Link 
                    href={category.href}
                    className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition ${
                      category.highlight ? 'text-red-600' : 'text-gray-700'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5" />
                      <span className={category.highlight ? 'font-semibold' : ''}>{category.name}</span>
                    </div>
                    {category.subcategories && (
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    )}
                  </Link>
                  
                  {/* Subcategorías */}
                  {category.subcategories && (
                    <div className="ml-8 mt-1 space-y-1">
                      {category.subcategories.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={`${category.href}/${sub.toLowerCase()}`}
                          className="block py-1 px-2 text-sm text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sección de enlaces adicionales */}
          <div className="p-4 border-b">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Mi cuenta</h3>
            <div className="space-y-2">
              {additionalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sección de servicios */}
          <div className="p-4">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Servicios</h3>
            <div className="space-y-2">
              <Link href="/atencion-cliente" className="block p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition" onClick={() => setIsSidebarOpen(false)}>
                Atención al cliente
              </Link>
              <Link href="/tiendas" className="block p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition" onClick={() => setIsSidebarOpen(false)}>
                Nuestras tiendas
              </Link>
              <Link href="/tarjeta" className="block p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition" onClick={() => setIsSidebarOpen(false)}>
                Tarjeta de crédito
              </Link>
              <Link href="/seguros" className="block p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition" onClick={() => setIsSidebarOpen(false)}>
                Seguros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;