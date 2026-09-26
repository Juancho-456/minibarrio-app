import { useEffect, useState } from 'react'

// Único breakpoint global de la app (768px) para adaptar los paneles y menús
// a pantallas de celular. Se usa para ramificar los mismos objetos de estilo
// inline que ya existen (p. ej. gridTemplateColumns), sin introducir un
// sistema de CSS paralelo.
const QUERY = '(max-width: 768px)'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const handler = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return isMobile
}
