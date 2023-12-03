export interface Lokalizacja {
    x: number;
    y: number;
    z: number;
    czas: number;
  }
  
  export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;
  
  export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if (lokalizacje.length === 0) {
      return null;
    }
  
    let najlepszaLokalizacja: Lokalizacja | null = null;
    let najwyzszaWartosc: number = Number.NEGATIVE_INFINITY;
  
    for (const lokalizacja of lokalizacje) {
      const { x, y, z, czas } = lokalizacja;
      const wartoscMapy = mapa(x, y, z, czas);
  
      if (isNaN(wartoscMapy) || !isFinite(wartoscMapy)) {
        // Ignoruj niepoprawne wartości matematyczne
        continue;
      }
  
      if (wartoscMapy > najwyzszaWartosc) {
        najwyzszaWartosc = wartoscMapy;
        najlepszaLokalizacja = lokalizacja;
      }
    }
  
    return najlepszaLokalizacja;
  }
  