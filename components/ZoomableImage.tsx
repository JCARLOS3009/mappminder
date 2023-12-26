import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Mapa_sp from './Mapa_sp.svg';

export const ZoomableImage = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY;
      const newZoomLevel = zoomLevel + (delta > 0 ? 0.1 : -0.1);

      // Defina limites para o nível de zoom
      if (newZoomLevel >= 1 && newZoomLevel <= 3) {
        setZoomLevel(newZoomLevel);
      }
    };

    // Adicione o ouvinte de evento de scroll
    window.addEventListener('wheel', handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [zoomLevel]);

  return (
    <div>
      <Image
        src={Mapa_sp}
        alt="Mapa de São Paulo"
        width={500 * zoomLevel}
        height={500 * zoomLevel} />
    </div>
  );
};
