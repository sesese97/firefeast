/* global React */
const { useState, useEffect, useRef } = React;

const WA_NUMBER = "5215543876711";
const waLink = (msg = "Hola, quiero más información sobre Firefeast") =>
`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ---------------- Icons ---------------- */
const IconWA = ({ size = 20 }) =>
<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.2-.2-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.9-3.1-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.6 8.3-8.1 8.3z" />
  </svg>;

const IconArrow = () =>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>;

const IconIG = () =>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>;


/* ---------------- Photo Slot ---------------- */
const Photo = ({ label, desc, className = "" }) =>
<div className={`photo-slot ${className}`}>
    <div className="photo-slot__label">{label}</div>
    <div className="photo-slot__desc">{desc}</div>
  </div>;


/* ---------------- NAV ---------------- */
const Nav = ({ onOpenMenu, scrolled }) =>
<nav className={`nav ${scrolled ? "scrolled" : ""}`}>
    <a href="#top" className="nav__logo">FIREFEAST</a>
    <div className="nav__links">
      <a href="#experiencias">Experiencias</a>
      <a href="#menus">Menús</a>
      <a href="#como-funciona">Cómo funciona</a>
      <a href="#galeria">Galería</a>
      <a href="#faq">FAQ</a>
    </div>
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <a href={waLink()} className="nav__cta" target="_blank" rel="noopener">
        <IconWA size={14} /> Cotizar
      </a>
      <button className="nav__burger" onClick={onOpenMenu} aria-label="Menú">
        <span /><span /><span />
      </button>
    </div>
  </nav>;


const MobileMenu = ({ open, onClose }) =>
<div className={`mobile-menu ${open ? "open" : ""}`}>
    <button onClick={onClose} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "var(--crema)", fontSize: 28, cursor: "pointer" }} aria-label="Cerrar">×</button>
    {[
  ["Experiencias", "#experiencias"],
  ["Menús", "#menus"],
  ["Cómo funciona", "#como-funciona"],
  ["Galería", "#galeria"],
  ["Eventos", "#eventos"],
  ["FAQ", "#faq"],
  ["Contacto", "#contacto"]].
  map(([t, h]) => <a key={h} href={h} onClick={onClose}>{t}</a>)}
  </div>;


/* ---------------- HERO ---------------- */
const Hero = ({ heroCopy }) =>
<section className="hero" id="top">
    <div className="hero__bg" aria-hidden="true"></div>
    <div className="hero__content container">
      <div className="eyebrow eyebrow-light">Parrilladas premium · CDMX & Edo. Mex.</div>
      <h1 className="h-display hero__title">
        Un bocado<br />de <span className="em">humo</span>
      </h1>
      <p className="hero__sub">{heroCopy}</p>
      <div className="hero__ctas">
        <a className="btn btn-primary" href={waLink("Hola, quiero cotizar un evento con FireFeast")} target="_blank" rel="noopener">
          <IconWA size={16} /> Cotiza tu evento
        </a>
        <a className="btn btn-ghost" href="#experiencias">Ver experiencias <IconArrow /></a>
      </div>
    </div>
    <div className="hero__meta">
      <strong>EST. CDMX</strong>
      Carne · Fuego · Humo<br />
      Servicio a domicilio
    </div>
  </section>;


const Marquee = () => {
  const items = ["Parrilladas a domicilio", "Carne premium", "Eventos privados", "Clases de asado", "CDMX & Edo. Mex.", "Del fuego a la mesa"];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((k) =>
        <span key={k}>
            {items.map((it, i) =>
          <React.Fragment key={i}>
                {it} <span className="marquee__dot" />
              </React.Fragment>
          )}
          </span>
        )}
      </div>
    </div>);

};

/* ---------------- MANIFIESTO ---------------- */
const Manifiesto = () =>
<section className="section manifiesto" id="manifiesto">
    <div className="container">
      <div className="manifiesto__grid">
        <div>
          <div className="eyebrow">— Nuestro oficio</div>
          <h2 className="h-display manifiesto__title">
            El fuego es nuestro <span className="em">lenguaje</span>
          </h2>
          <div className="manifiesto__text">
            <p>En FireFeast no solo cocinamos: creamos momentos con fuego y humo. Llevamos comida fina a domicilio, con cortes premium y técnicas que convierten el comer en experiencia.</p>
            <p>Tú no haces nada. Llegamos con el asador, la leña y todo el equipo. Tú te dedicas a tus invitados; nosotros, a la brasa.</p>
            <p>Manos curtidas, recetas propias, sabores tradicionales con un toque que se siente desde el primer bocado.</p>
          </div>
        </div>
        <div className="manifiesto__photo">
          <Photo label="OFICIO · 1200×1500" desc="Manos del asador trabajando la parrilla, brasas vivas, gesto de oficio. Vertical." />
        </div>
      </div>

      <div className="pilares">
        <div className="pilar">
          <div className="pilar__num">01 · Producto</div>
          <h3 className="pilar__title">Cortes premium</h3>
          <p className="pilar__desc">Seleccionamos cada pieza. Calidad de carnicería, no de banquete masivo. Aquí la carne es la protagonista.</p>
        </div>
        <div className="pilar">
          <div className="pilar__num">02 · Técnica</div>
          <h3 className="pilar__title">Asado con oficio</h3>
          <p className="pilar__desc">Manejo de fuego, leña y tiempos. Cada platillo trae intención: marcado, sellado, reposo, sabor.</p>
        </div>
        <div className="pilar">
          <div className="pilar__num">03 · Servicio</div>
          <h3 className="pilar__title">Tú no haces nada</h3>
          <p className="pilar__desc">Llevamos asadores, insumos, montaje y servicio en sitio. Tú recibes invitados, nosotros la brasa.</p>
        </div>
      </div>
    </div>
  </section>;


/* ---------------- EXPERIENCIAS ---------------- */
const EXPERIENCIAS = [
{
  num: "01",
  title: "Parrilladas Clásicas",
  desc: "La esencia del buen asado en su forma más pura. Cortes de calidad, brasa viva y los sabores de toda la vida — pero hechos como deben ser.",
  price: "$450",
  sub: "por persona",
  group: "Mín. 15 personas",
  photo: "Plato clásico de parrillada — costilla, arrachera, chorizo, guarniciones simples sobre tabla de madera.",
  img: "assets/galeria-tabla.jpg"
},
{
  num: "02",
  title: "Parrilladas Feast",
  desc: "Experiencia gastronómica completa. Menús diseñados para sorprender — combinaciones, técnica, montaje cuidado. Para celebraciones que merecen más.",
  price: "$700",
  sub: "por persona",
  group: "10–30 personas",
  photo: "Plato montado tipo fine dining sobre cerámica oscura — corte sellado, salsa, micro guarnición, presentación.",
  img: "assets/menu-clasica-4.jpg"
},
{
  num: "03",
  title: "Comida por Kilo",
  desc: "Carne premium asada y entregada lista para servir. Ideal para reuniones íntimas, antojos especiales o cuando quieres calidad sin compromiso de paquete.",
  price: "Bajo cotización",
  sub: "según corte",
  group: "Sin mínimo",
  photo: "Tabla de cortes asados al peso — picaña, asado de tira, bondiola, cortados y listos para servir.",
  img: "assets/galeria-arrachera.jpg"
},
{
  num: "04",
  title: "Clases Privadas Feast",
  desc: "Aprende a manejar el fuego como nosotros. Sesiones prácticas para grupos — perfectas para amigos, equipos de trabajo o regalo único.",
  price: "$1,000",
  sub: "por persona",
  group: "Mín. 2 personas",
  photo: "Persona aprendiendo en una clase, delantal, gesto de concentración, parrilla viva al fondo.",
  img: "assets/galeria-pollo.jpg"
}];


const Experiencias = () =>
<section className="section experiencias" id="experiencias">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow eyebrow-light">— Nuestras experiencias</div>
        <h2 className="h-display">
          Cuatro formas de<br />vivir el <span className="em">fuego</span>
        </h2>
        <p className="section-head__intro">Desde un asado tradicional para 30 hasta una clase íntima para 4. Elige el formato; nosotros traemos todo lo demás.</p>
      </div>
      <div className="exp-grid">
        {EXPERIENCIAS.map((e) =>
      <article key={e.num} className="exp-card">
            <div className="exp-card__photo">
              {e.img ? <img src={e.img} alt={e.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <Photo label={`EXP ${e.num} · 1200×900`} desc={e.photo} />}
            </div>
            <div className="exp-card__body">
              <div className="exp-card__num">— {e.num}</div>
              <h3 className="exp-card__title">{e.title}</h3>
              <p className="exp-card__desc">{e.desc}</p>
              <div className="exp-card__meta">
                <div className="exp-card__price">
                  {e.price}
                  <small>{e.sub}</small>
                </div>
                <div className="exp-card__group">{e.group}</div>
              </div>
              <a href={waLink(`Hola, me interesa ${e.title}`)} className="exp-card__cta" target="_blank" rel="noopener">
                Cotizar <IconArrow />
              </a>
            </div>
          </article>
      )}
      </div>
    </div>
  </section>;


/* ---------------- MENUS DETALLADOS ---------------- */
const COMUNES = ["Cebollitas cambray", "Tortillas de maíz y harina", "2 salsas de la casa", "Agua fresca natural"];

const MENUS = {
  clasicas: {
    name: "Parrilladas Clásicas",
    tagline: "Cortes clásicos, brasa viva, sin complicaciones.",
    items: [
    {
      id: "tradicional",
      name: "Carne Asada Tradicional",
      price: "$460",
      sub: "por persona",
      img: "assets/menu-clasica-1.jpg",
      intro: "Cortes clásicos para una parrillada sin complicaciones.",
      parrilla: ["Arrachera", "Gaonera de sirloin", "Matambre", "Salchicha parrillera"],
      acompañan: ["Cebollitas", "Papas galeana", "Chiles toreados", "Tortillas de maíz y harina", "2 salsas", "Incluye agua de sabor"]
    },
    {
      id: "fire",
      name: "Carnita Asada Fire",
      price: "$580",
      sub: "por persona",
      img: "assets/menu-clasica-2.jpg",
      intro: "Más variedad, más sabor.",
      parrilla: ["Diezmillo", "Vacío", "Pollo al carbón", "Chistorra"],
      acompañan: ["Cebollitas", "Queso asado", "Papa al carbón con mantequilla", "Tortillas de maíz y harina", "2 salsas", "Incluye agua de sabor"]
    },
    {
      id: "asadopro",
      name: "Asado Pro",
      price: "$720",
      sub: "por persona",
      img: "assets/menu-clasica-3.jpg",
      intro: "Tu evento merece lo mejor del asador.",
      parrilla: ["Gaoneras", "Rib eye delgado", "Picaña", "Chistorra", "Empalmes"],
      acompañan: ["Vegetales al grill", "Papas al carbón", "Guacamole", "Tortillas de maíz y harina", "2 salsas", "Incluye agua de 2 sabores"]
    },
    {
      id: "mariscada",
      name: "Mariscada Fire",
      price: "$790",
      sub: "por persona",
      img: "assets/menu-clasica-4.jpg",
      intro: "Para los que prefieren el sabor del mar con el toque del fuego.",
      parrilla: ["Ceviche de pescado fresco", "Aguachile de camarón tatemado", "Pescado zarandeado", "Arroz con mariscos"],
      acompañan: ["Ensalada fresca", "Tortillas de maíz y harina", "2 salsas", "Incluye agua de 2 sabores"]
    }]

  },
  feast: {
    name: "Parrilladas Feast",
    tagline: "Experiencias gastronómicas más allá de la carne asada tradicional.",
    items: [
    {
      id: "feast1",
      name: "Menú 1",
      price: "$680",
      sub: "por persona",
      img: "assets/menu-feast-1.jpg",
      intro: "Sabores fuertes, ánimo de fiesta.",
      parrilla: [
      "Tacos gobernador (de camarón)",
      "Tacos de diezmillo",
      "Tacos de arrachera",
      "Essada de frutas caramelizadas"],

      acompañan: []
    },
    {
      id: "feast2",
      name: "Menú 2",
      price: "$680",
      sub: "por persona",
      img: "assets/menu-feast-2.jpg",
      intro: "Ahumados, salsa y técnica fina.",
      parrilla: [
      "Empalmes (con atropellado)",
      "Muslos de pollo con salsa",
      "Costillas ahumadas",
      "Panqué de elote"],

      acompañan: []
    },
    {
      id: "feast3",
      name: "Menú 3",
      price: "$780",
      sub: "por persona",
      img: "assets/menu-feast-3.jpg",
      intro: "Composición elevada con producto del momento.",
      parrilla: [
      "Queso asado con chistorra en salsa",
      "Tostada de aguachile tatemado",
      "Torta de picaña",
      "Tapas dulces"],

      acompañan: []
    },
    {
      id: "feast4",
      name: "Menú 4",
      price: "$850",
      sub: "por persona",
      img: "assets/menu-feast-4.jpg",
      intro: "El más completo. Para celebraciones memorables.",
      parrilla: [
      "Costra de gaonera de rib eye",
      "Tacos de diezmillo",
      "Tacos de barbacoa de picaña",
      "Quesadilla dulce"],

      acompañan: []
    }],

    incluyeFooter: [
    "Menú completo POR PERSONA (entrada, plato fuerte, acompañamientos)",
    "Salsas, guarniciones, agua de sabor",
    "Vajilla (desechable o lo que se pacte)",
    "Montaje más cuidado y equipo especializado",
    "Servicio en sitio"]

  }
};

const Menus = () => {
  const [familia, setFamilia] = useState("clasicas");
  const f = MENUS[familia];
  return (
    <section className="section menus" id="menus">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow eyebrow-light">— Nuestros menús</div>
          <h2 className="h-display">
            Cuatro Clásicas.<br />Cuatro <span className="em">Feast</span>.
          </h2>
          <p className="section-head__intro">Elige la familia que se ajuste a tu evento y selecciona el paquete. Todos incluyen servicio en sitio, asadores, leña y montaje.</p>
        </div>

        <div className="menu-family-tabs">
          {Object.entries(MENUS).map(([k, v]) =>
          <button key={k} className={`menu-family-tab ${familia === k ? "active" : ""}`} onClick={() => setFamilia(k)}>
              <span className="menu-family-tab__name">{v.name}</span>
              <span className="menu-family-tab__sub">{v.tagline}</span>
            </button>
          )}
        </div>

        <div className="menu-cards-grid">
          {f.items.map((m) =>
          <article key={m.id} className="menu-card">
              <div className="menu-card__media">
                <img src={m.img} alt={m.name} loading="lazy" />
              </div>
              <div className="menu-card__body">
                <div className="menu-card__head">
                  <h3 className="menu-card__name">{m.name}</h3>
                  <p className="menu-card__intro">{m.intro}</p>
                </div>

                <div className="menu-card__divider"></div>

                {m.parrilla && m.parrilla.length > 0 &&
              <div className="menu-card__block">
                    <h5 className="menu-card__label">{familia === "feast" ? "Incluye" : "De la parrilla"}</h5>
                    <ul className="menu-card__list">
                      {m.parrilla.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
              }

                {m.acompañan && m.acompañan.length > 0 &&
              <div className="menu-card__block">
                    <h5 className="menu-card__label">Acompañado de</h5>
                    <ul className="menu-card__list">
                      {m.acompañan.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
              }

                <div className="menu-card__footer">
                  <div className="menu-card__price">
                    <span className="menu-card__price-num">{m.price}</span>
                    <span className="menu-card__price-sub">{m.sub}</span>
                  </div>
                  <a
                  href={waLink(`Hola, quiero cotizar el menú "${m.name}" de ${f.name}.`)}
                  className="menu-card__cta"
                  target="_blank"
                  rel="noopener">
                  
                    <IconWA size={14} /> Cotizar
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>

        {f.incluyeFooter &&
        <div className="menu-incluye-footer">
            <h5>Todos nuestros menús Feast incluyen</h5>
            <ul>
              {f.incluyeFooter.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        }
      </div>
    </section>);

};

/* ---------------- COMO FUNCIONA ---------------- */
const Como = () =>
<section className="section como" id="como-funciona">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">— Así trabajamos</div>
        <h2 className="h-display">Sin estrés. <span className="em">Sin pretextos.</span></h2>
        <p className="section-head__intro" style={{ color: "var(--cafe-dark)" }}>Cuatro pasos del primer mensaje a la última brasa. Tú solo eliges la fecha.</p>
      </div>

      <div className="steps">
        {[
      { n: "01", t: "Cuéntanos", d: "Mándanos un WhatsApp con fecha, número de invitados y la idea. Te respondemos con opciones concretas." },
      { n: "02", t: "Cotizamos", d: "Te enviamos propuesta de menú y costos. Apartamos con 50% de anticipo; el resto el día del evento." },
      { n: "03", t: "Llegamos", d: "Llegamos antes con asadores, leña, insumos y montaje. Tú no levantas un dedo." },
      { n: "04", t: "Disfrutas", d: "Servimos a tus invitados. Tú estás presente con ellos, no en la cocina." }].
      map((s) =>
      <div key={s.n} className="step">
            <div className="step__num">{s.n}</div>
            <h3 className="step__title">{s.t}</h3>
            <p className="step__desc">{s.d}</p>
          </div>
      )}
      </div>

      <div className="incluye">
        <div>
          <div className="eyebrow eyebrow-light">— Qué incluye</div>
          <h3 className="incluye__title" style={{ marginTop: 16 }}>Llevamos<br /><span className="em">todo</span></h3>
        </div>
        <ul className="incluye__list">
          <li>Asadores profesionales y leña</li>
          <li>Cortes premium seleccionados</li>
          <li>Guarniciones y salsas de la casa</li>
          <li>Tortillas</li>
          <li>Aguas frescas y bebidas básicas</li>
          <li>Vajilla (desechable o lo que se pacte)</li>
          <li>Montaje y desmontaje</li>
          <li>Personal de servicio en sitio</li>
        </ul>
      </div>
    </div>
  </section>;


/* ---------------- GALERÍA ---------------- */
const Galeria = () =>
<section className="galeria" id="galeria">
    <div className="galeria__head">
      <div className="eyebrow eyebrow-light">— Amor a primera vista</div>
      <h2 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--crema)", marginTop: 16 }}>
        Lo que <span style={{ color: "var(--cobre-glow)", fontStyle: "italic", fontWeight: 400 }}>cocinamos</span>
      </h2>
    </div>
    <div className="galeria__grid">
      <div className="galeria__cell galeria__cell--tall"><img src="assets/galeria-pesca.jpg" alt="Pesca preparada con hierbas" /></div>
      <div className="galeria__cell"><img src="assets/galeria-arrachera.jpg" alt="Arrachera fileteada" /></div>
      <div className="galeria__cell"><img src="assets/galeria-tabla.jpg" alt="Tabla con cortes y chistorra" /></div>
      <div className="galeria__cell"><img src="assets/galeria-ceviche.jpg" alt="Ceviche de camarón fresco" /></div>
      <div className="galeria__cell"><img src="assets/galeria-buffet.jpg" alt="Mesa de evento montada" /></div>
      <div className="galeria__cell"><img src="assets/galeria-pollo.jpg" alt="Pollo entero asado" /></div>
      <div className="galeria__cell galeria__cell--tall"><img src="assets/menu-clasica-4.jpg" alt="Langosta a la parrilla" /></div>
      <div className="galeria__cell"><img src="assets/galeria-ahumados.jpg" alt="Ahumados en parrilla" /></div>
      <div className="galeria__cell"><img src="assets/menu-feast-1.jpg" alt="Menú Feast" /></div>
    </div>
  </section>;


/* ---------------- OTROS SERVICIOS ---------------- */
const OTROS = [
{ tag: "AH", title: "Menú Ahumados", price: "$650", sub: "por persona", items: ["Brisket o Pork Belly", "Costillas ahumadas con salsa BBQ", "Pulled pork con slaw mexicano"] },
{ tag: "MD", title: "Mexa Deli", price: "$650", sub: "por persona", items: ["Barbacoa de res", "Cochinita pibil", "Birria"] },
{ tag: "GF", title: "Menú Gran Fiesta", price: "$650", sub: "por persona", items: ["Arroz meloso tipo paella", "Croquetas mixtas", "Chorizo español + mariscos", "Vegetales asados"] },
{ tag: "DG", title: "Desayunos Gourmet", price: "$650", sub: "por persona", items: ["Chilaquiles con proteína al carbón", "Frutas asadas de temporada"] }];

const Otros = () =>
<section className="section otros" id="otros">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">— Otros servicios</div>
        <h2 className="h-display">Cuéntanos tu idea<br />y la hacemos <span className="em">fuego</span></h2>
        <p className="section-head__intro" style={{ color: "var(--cafe-dark)" }}>Experiencias gastronómicas a la medida y bajo pedido.</p>
      </div>
      <div className="otros-grid">
        {OTROS.map((o) =>
      <article key={o.title} className="otros-card">
            <div className="otros-card__tag">{o.tag}</div>
            <h3 className="otros-card__title">{o.title}</h3>
            <ul className="otros-card__list">
              {o.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className="otros-card__footer">
              <div className="otros-card__price">
                <span className="otros-card__price-num">{o.price}</span>
                <span className="otros-card__price-sub">{o.sub}</span>
              </div>
              <a href={waLink(`Hola, me interesa ${o.title}`)} className="otros-card__cta" target="_blank" rel="noopener">Cotizar <IconArrow /></a>
            </div>
          </article>
      )}
      </div>
    </div>
  </section>;


/* ---------------- EVENTOS ---------------- */
const Eventos = () =>
<section className="section eventos" id="eventos">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">— Para quién</div>
        <h2 className="h-display">Cualquier excusa<br />es <span className="em">buena</span></h2>
        <p className="section-head__intro" style={{ color: "var(--cafe-dark)" }}>Diseñamos cada experiencia según el tipo de evento, el espacio y los invitados.</p>
      </div>
      <div className="eventos-grid">
        {[
      { n: "01", t: "Cumpleaños", d: "Desde íntimas reuniones de 10 hasta celebraciones de 60. Menús ajustados al perfil de tus invitados." },
      { n: "02", t: "Eventos especiales", d: "Aniversarios, bautizos, graduaciones, eventos personales donde el menú es protagonista." },
      { n: "03", t: "Corporativos", d: "Activaciones de equipo, cierres de año, comidas con clientes. Logística cuidada, factura disponible." },
      { n: "04", t: "Despedidas", d: "Despedidas de soltero/a, jubilaciones, mudanzas. La ocasión perfecta para una experiencia memorable." },
      { n: "05", t: "Reuniones familiares", d: "Comidas de fin de semana, reuniones grandes. Tú con la familia, nosotros con la parrilla." },
      { n: "06", t: "Experiencias regalo", d: "Una clase privada o cena Feast como regalo. Te ayudamos con la sorpresa." }].
      map((e) =>
      <div key={e.n} className="evento-card">
            <div className="evento-card__num">— {e.n}</div>
            <h3 className="evento-card__title">{e.t}</h3>
            <p className="evento-card__desc">{e.d}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


/* ---------------- TESTIMONIOS ---------------- */
const Testi = () =>
<section className="section testi">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow eyebrow-light">— Lo que dicen</div>
        <h2 className="h-display">Sabor que<br />se <span className="em">recuerda</span></h2>
      </div>
      <div className="testi-grid">
        {[
      { q: "Excelente servicio!! Puntuales 100% y excelente calidad de la comida! Los recomiendo ampliamente!.", a: "ANGEL", r: "Cumpleaños · Coyoacán", s: "★★★★★" },
      { q: "Hicieron una cena Feast para 12 personas en casa. El nivel del servicio y la comida no tiene comparación con otros banquetes que hemos contratado.", a: "MONICA", r: "Cena privada · Benito Juárez", s: "★★★★★" }].
      map((t, i) =>
      <div key={i} className="testi-card">
            <div className="testi-card__stars">{t.s}</div>
            <p className="testi-card__quote">{t.q}</p>
            <div className="testi-card__author">{t.a}</div>
            <div className="testi-card__role">{t.r}</div>
          </div>
      )}
      </div>
      <p style={{ marginTop: 32, fontSize: 12, color: "var(--ash)", fontFamily: "var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        * Testimonios de muestra · espacio listo para reseñas reales de Google e Instagram
      </p>
    </div>
  </section>;


/* ---------------- FAQ ---------------- */
const FAQS = [
{ q: "¿Con cuánta anticipación debo reservar?", a: "Recomendamos al menos 2 semanas para asegurar la fecha, especialmente fines de semana. Para fechas festivas ideal con 4 semanas." },
{ q: "¿Cómo funciona el anticipo?", a: "Apartamos tu fecha con un 50% de anticipo. El restante se cubre el día del evento, antes de servir." },
{ q: "¿Hay mínimo de personas?", a: "Depende del paquete: Parrilladas Clásicas desde 15 personas, Parrilladas Feast desde 7, Clases Privadas desde 2 personas. La Comida por Kilo no tiene mínimo." },
{ q: "¿Llevan absolutamente todo?", a: "Sí. Asadores, leña, insumos, salsas, guarniciones, vajilla desechable, montaje y personal. Tú solo nos das un espacio para instalarnos." },
{ q: "¿Qué zonas cubren?", a: "CDMX y Estado de México sin cargo extra. Otros estados se cotizan aparte por logística y traslados." },
{ q: "¿Qué pasa si llueve?", a: "Coordinamos contigo opciones: techar el área de cocción, reagendar sin penalización (avisando con tiempo) o adaptar el formato a interiores." },
{ q: "¿Pueden personalizar el menú?", a: "Por supuesto. Tenemos los paquetes base, pero adaptamos a alergias, preferencias o ideas específicas. Cuéntanos por WhatsApp." },
{ q: "¿Aceptan tarjeta o transferencia?", a: "Transferencia y efectivo. Para corporativos podemos emitir factura — pídela al cotizar." }];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">— Preguntas frecuentes</div>
          <h2 className="h-display">Lo que casi<br />siempre nos <span className="em">preguntan</span></h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) =>
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="faq-item__head">
                <div className="faq-item__q">{f.q}</div>
                <div className="faq-item__icon">+</div>
              </div>
              <div className="faq-item__a">{f.a}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------------- CTA FINAL + CONTACTO ---------------- */
const CTAFinal = () =>
<section className="cta-final" id="contacto">
    <div className="cta-final__bg">
      <Photo label="CTA · 2400×1200" desc="Brasas incandescentes, fondo oscuro, texturas. Ambiente íntimo y cálido." />
    </div>
    <div className="cta-final__content">
      <div className="eyebrow eyebrow-light">— Cuéntanos tu idea</div>
      <h2 className="cta-final__title">
        Y la hacemos<br /><span className="em">fuego</span>
      </h2>
      <p className="cta-final__sub">Una fecha, un lugar y los que quieras invitar. Nosotros nos encargamos del resto.</p>
      <div className="cta-final__ctas">
        <a className="btn btn-primary" href={waLink()} target="_blank" rel="noopener">
          <IconWA size={16} /> WhatsApp 55 4387 6711
        </a>
        <a className="btn btn-ghost" href="https://www.instagram.com/firefeastparrilladas/" target="_blank" rel="noopener">
          <IconIG /> @firefeastparrilladas
        </a>
      </div>
    </div>
  </section>;


/* ---------------- FOOTER ---------------- */
const Footer = () =>
<footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">FIREFEAST</div>
          <p className="footer__tag">Parrilladas premium a domicilio. Del fuego a tu mesa, sin complicaciones.</p>
        </div>
        <div className="footer__col">
          <h5>Experiencias</h5>
          <a href="#experiencias">Parrilladas Clásicas</a>
          <a href="#experiencias">Parrilladas Feast</a>
          <a href="#experiencias">Comida por Kilo</a>
          <a href="#experiencias">Clases Privadas</a>
        </div>
        <div className="footer__col">
          <h5>Contacto</h5>
          <a href={waLink()}>WhatsApp · 55 4387 6711</a>
          <a href="mailto:firefeastbanquetes@gmail.com">firefeastbanquetes@gmail.com</a>
          <p>CDMX & Edo. Mex.</p>
        </div>
        <div className="footer__col">
          <h5>Síguenos</h5>
          <a href="https://www.instagram.com/firefeastparrilladas/" target="_blank" rel="noopener">Instagram</a>
          <a href="#">TikTok</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 FireFeast · Hecho con fuego en CDMX</span>
        <span>Un bocado de humo</span>
      </div>
    </div>
  </footer>;


/* ---------------- TWEAKS ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paleta": "cobre",
  "tipografia": "bodoni",
  "heroCopy": "Parrilladas premium a domicilio. Cortes seleccionados, técnica de oficio y servicio completo. Tú recibes invitados; nosotros llevamos el fuego."
} /*EDITMODE-END*/;

const PALETTE_MAP = { "#D9722E": "cobre", "#D9A52E": "mostaza", "#C73E20": "brasa", "#8C9648": "olivo" };
const PALETTE_INV = { cobre: "#D9722E", mostaza: "#D9A52E", brasa: "#C73E20", olivo: "#8C9648" };

const FFTweaks = ({ tweaks, setTweak }) => {
  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection label="Paleta de acento">
        <window.TweakColor
          label="Tono fuego"
          value={PALETTE_INV[tweaks.paleta] || "#D9722E"}
          options={["#D9722E", "#D9A52E", "#C73E20", "#8C9648"]}
          onChange={(c) => setTweak("paleta", PALETTE_MAP[c] || "cobre")} />
        
      </window.TweakSection>
      <window.TweakSection label="Tipografía display">
        <window.TweakSelect
          label="Familia"
          value={tweaks.tipografia}
          options={["bodoni", "playfair", "fraunces", "dmserif"]}
          onChange={(v) => setTweak("tipografia", v)} />
        
      </window.TweakSection>
      <window.TweakSection label="Copy del hero">
        <window.TweakText
          label="Subtítulo"
          value={tweaks.heroCopy}
          onChange={(v) => setTweak("heroCopy", v)} />
        
      </window.TweakSection>
    </window.TweaksPanel>);

};

/* ---------------- APP ---------------- */
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tweaksHook = window.useTweaks(TWEAK_DEFAULTS);
  const tweaks = tweaksHook[0];
  const setTweak = tweaksHook[1];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.className = `theme-${tweaks.paleta} font-${tweaks.tipografia}`;
  }, [tweaks.paleta, tweaks.tipografia]);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add("in");});
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav onOpenMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero heroCopy={tweaks.heroCopy} />
      <Marquee />
      <Manifiesto />
      <Experiencias />
      <Menus />
      <Como />
      <Galeria />
      <Otros />
      <Eventos />
      <Testi />
      <FAQ />
      <CTAFinal />
      <Footer />
      <a className="float-wa" href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
        <IconWA size={26} />
      </a>
      <FFTweaks tweaks={tweaks} setTweak={setTweak} />
    </>);

};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);