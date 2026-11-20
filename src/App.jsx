const FALLBACK_LOGO =
  'https://lh3.googleusercontent.com/aida/ALJJyrBNpcNwCBAxRbkEDPEYRvqW1s6nuvdcUVpbdjTgekA76oqNqABHcH4ENPuQoofbelkxAoZo9GHtnsFheXhCSCdtfidMIsBMBjxI2EsB2osMsjiGueXb40EAW9t3TsGIQrAczMISwTM3-ZH74WOLEg8AWGd73H1t_gs0O0nMdK_TkE07v7hZDd6ww6qHplFXI_lrEyDKPzxZacf0mInlFW0DVwgg-a4IA-trynAXuSJs'

const solutions = [
  {
    id: 'persediaan',
    kicker: 'Manajemen Persediaan',
    title: 'Persediaan Biak',
    icon: 'pallet',
    img: './src/assets/persediaan.png',
    alt: 'Warehouse Pulse & Fulfillment Dashboard Preview',
    cta: 'Akses Persediaan Biak',
    href: 'https://persediaan.klikencana.co.id/',
    color: '#0b5462',
    hover: '#006877',
    gradient: 'linear-gradient(90deg, #0b5462, #006877, #7fd3e2)',
  },
  {
    id: 'simbada',
    kicker: 'Manajemen Barang Daerah',
    title: 'SIMBADA - BIAK',
    icon: 'query_stats',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWM1YaS0zV2AzCb6mnRweJ0lLewVfxI-ME2Zc4GYYzu8aO5hopVPfmHm2IX78E6jyKhhIU1uKnhj1umIH0cA_8IhVllj78t_8sBGBm6CHEKBdX1wecihUv8nRVU9YXouV8xB8AY9cLL0MBCcNQrff5Hrrs1D78Z5TFjygW-D7KGGk1m7DD7PDznHMmdICuLph-_KBCY64cr_oMagWaqqOrZf06Kx0QElV_-325UJw',
    alt: 'SupplyIQ & Procurement Analytics Dashboard Preview',
    cta: 'Akses SIMBADA - BIAK',
    href: 'https://persediaan.klikencana.co.id/',
    color: '#006877',
    hover: '#0b5462',
    gradient: 'linear-gradient(90deg, #006877, #7fd3e2, #0b5462)',
  },
]

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="container sl-hero">
          <div className="text-center mx-auto" style={{ maxWidth: '48rem' }}>
            <img
              src="/logo.png"
              alt="Logo Kabupaten Biak Numfor"
              className="mb-3"
              style={{ height: 96, width: 'auto' }}
            />
            <h1 className="sl-title">
              Persediaan & SIMBADA Biak
            </h1>
            {/*<p className="sl-subtitle mx-auto" style={{ maxWidth: '42rem' }}>
              Manajemen persediaan
            </p>*/}
          </div>

          <div className="mx-auto" style={{ maxWidth: '72rem' }}>
            <div className="row g-4 mt-5" id="solutions">
            {solutions.map((s) => (
              <div className="col-md-6" key={s.id}>
                <article
                  className="sl-card"
                  style={{ '--card-color': s.color, '--card-hover': s.hover }}
                >
                  <div className="sl-card-top" style={{ background: s.gradient }} />
                  <div className="p-4 p-sm-5 d-flex flex-column flex-grow-1 gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="sl-icon">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 26 }}
                        >
                          {s.icon}
                        </span>
                      </div>
                      <div>
                        <div className="sl-kicker">{s.kicker}</div>
                        <h2 className="sl-card-title mb-0">{s.title}</h2>
                      </div>
                    </div>

                    <div className="sl-media">
                      <img src={s.img} alt={s.alt} />
                    </div>

                    <div className="mt-auto">
                      <a className="btn-access" href={s.href}>
                        <span>{s.cta}</span>
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="sl-footer">
        <div className="container py-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="material-symbols-outlined">verified_user</span>
            <span>© 2026 Pemda</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
