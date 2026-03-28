import Navbar from "@/components/common/navbar";

import "./globals.css";
//Aqui se podria importar un componente de layout para toda la app, como un header o footer, y envolver el children con ese componente para que se muestre en todas las paginas.


export default function RootLayout({
  children, // El children es el contenido de cada pagina que se renderiza dentro del layout
}: {
  children: React.ReactNode// El tipo React.ReactNode es un tipo que representa cualquier cosa que pueda ser renderizada por React, como elementos, strings, numbers, etc.
}) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* El Navbar vive aquí, arriba de todo */}
        <main>{children}</main> {/* Aquí se renderizan tus páginas */}
      </body>
    </html>
  )
}

