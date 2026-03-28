import { supabase } from "@/lib/supabase";
import ProductList from "./producto/productos";

export default async function Home() {
  // 1. Consultamos los productos desde el servidor (Server Component)
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false }); // Traer los más nuevos primero

  // 2. Manejo básico de errores para el portafolio
  if (error) {
    return (
      <div className="p-20 text-center">
        <p className="text-red-500 font-bold">Error al conectar con Supabase</p>
        <p className="text-sm text-gray-500">{error.message}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/*  agregar aquí un Banner más adelante */}
      
      <div className="py-4">
        {/* 3. Pasamos los datos al componente visual */}
        {products && products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <div className="p-20 text-center text-gray-400">
            No hay productos cargados en la base de datos.
          </div>
        )}
      </div>
    </main>
  );
}
