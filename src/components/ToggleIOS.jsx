// Interruptor binario estilo iOS (switch deslizante) — distinto del
// segmentado de N opciones (ver ToggleSegmentado en OwnerResumen.jsx), este
// es on/off puro. Compartido entre la Configuración del cliente y la del
// panel del propietario.
export default function ToggleIOS({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      style={{
        position: 'relative', width: 48, height: 28, borderRadius: 999, border: 'none', padding: 0, flexShrink: 0,
        background: checked ? 'var(--accent)' : 'var(--border-strong)', cursor: 'pointer', transition: 'background 0.18s ease',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', top: 3, left: checked ? 23 : 3, width: 22, height: 22, borderRadius: '50%',
          background: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'left 0.18s ease',
        }}
      />
    </button>
  )
}
