'use client';
import Link from 'next/link';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface IProducto {// Define la interfaz del producto
  id: string | number;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;   
  brand: string;
  discount?: number;
  is_new?: boolean;
  rating?: number;
  reviews?: number;
}

const ProductList = ({ products }: { products: IProducto[] }) => {// Componente visual para mostrar los productos
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number = 0) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-3 h-3 ${i < fullStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">

        {/* Header*/}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Productos destacados</h2>
            <p className="text-gray-500 text-sm">Lo más popular de la semana</p>
          </div>
          <Link href="/productos" className="flex items-center gap-1 text-red-700 hover:underline font-bold text-sm">
            Ver todo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all p-4 flex flex-col group">
              
              {/* Imagen con Aspect Ratio controlado */}
              <div className="relative aspect-square mb-3 overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform"
                />
                {product.discount && (
                  <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="grow">
                <p className="text-[10px] text-gray-400 font-bold uppercase">{product.brand}</p>
                <h3 className="text-sm text-gray-700 leading-snug h-10 line-clamp-2 mt-1 font-medium">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 my-2">
                  {renderStars(product.rating)}
                  <span className="text-[10px] text-gray-400">({product.reviews || 0})</span>
                </div>

                <div className="mt-auto">
                  {product.original_price && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.original_price)}
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-red-600">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón */}
              <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md text-xs transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                AGREGAR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
