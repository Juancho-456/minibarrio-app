// Carga perezosa del script de Google Maps JavaScript API (una sola vez,
// compartida por toda la app) y geocodificación de direcciones a lat/lng.
//
// Requiere VITE_GOOGLE_MAPS_API_KEY en .env, con "Maps JavaScript API" y
// "Geocoding API" habilitadas en Google Cloud Console para esa key.

let loadPromise = null

export function loadGoogleMaps() {
  if (typeof window !== 'undefined' && window.google?.maps) {
    return Promise.resolve(window.google.maps)
  }
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      reject(new Error('Falta VITE_GOOGLE_MAPS_API_KEY en el archivo .env'))
      return
    }
    window.__minibarrioGoogleMapsListo = () => resolve(window.google.maps)
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&callback=__minibarrioGoogleMapsListo`
    script.async = true
    script.onerror = () => reject(new Error('No se pudo cargar la API de Google Maps.'))
    document.head.appendChild(script)
  })
  return loadPromise
}

/** Geocodifica una dirección de texto a { lat, lng } usando el geocoder de Google Maps. */
export async function geocodeDireccion(direccion) {
  const maps = await loadGoogleMaps()
  const geocoder = new maps.Geocoder()
  return new Promise((resolve, reject) => {
    geocoder.geocode({ address: `${direccion}, Bogotá, Colombia` }, (resultados, status) => {
      if (status === 'OK' && resultados?.[0]) {
        const loc = resultados[0].geometry.location
        resolve({ lat: loc.lat(), lng: loc.lng() })
      } else {
        reject(new Error(`No se pudo geocodificar la dirección (${status}).`))
      }
    })
  })
}
