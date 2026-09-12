import { useAuth } from '../../context/AuthContext.jsx'
import Icon from '../../components/Icon.jsx'
import ToggleIOS from '../../components/ToggleIOS.jsx'

// Configuración del panel del propietario. El modo oscuro de aquí es una
// preferencia independiente de la del cliente (modoOscuroPanel vs.
// modoOscuro en AuthContext): solo afecta a las rutas /panel, nunca a la
// vitrina pública ni al panel del cliente, aunque el propietario navegue
// fuera de su panel (ver el efecto de tema en App.jsx).
export default function OwnerConfiguracion() {
  const { modoOscuroPanel, actualizarModoOscuroPanel } = useAuth()

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Configuración</div>
      <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 20 }}>
        Preferencias de este panel.
      </p>

      <div className="card" style={{ padding: 20, maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="moon" size={17} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 14.5 }}>Modo oscuro</div>
            <div style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 2 }}>
              Aplica solo a este panel del negocio.
            </div>
          </div>
        </div>
        <ToggleIOS checked={modoOscuroPanel} onChange={actualizarModoOscuroPanel} label="Modo oscuro del panel" />
      </div>
    </div>
  )
}
