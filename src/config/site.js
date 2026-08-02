export const brand = {
    name: 'p0larCode',
    owner: 'César Padilla',
}

export const hero = {
  kicker: 'Desarrollador de sistemas · Disponible',
  titleBefore: 'Software a la medida que hace',
  titleAccent: 'crecer',
  titleAfter: 'tu empresa.',
  description:
    'Diseño y construyo sistemas de gestión, aplicaciones web y automatizaciones ' +
    'para empresas que quieren digitalizar su operación. De la idea al producto funcionando.',
  cvUrl: '#',
}


export const navLinks = [
    {label: 'Proyectos', href: '#proyectos'},
    {label: 'Servicios', href: '#servicios'},
    {label: 'Sobre mí', href: '#sobre-mi'},
]

export const projects = [
  {
    id: 'inventario',
    title: 'Sistema de inventario',
    descripcion: 'Control de stock con alertas de existencias minimas y reportes en tiempo real' + 'para una distribuidora. Redujo pérdidas de inventario en un 30%',
    tags: ['React', 'Node.js', 'MySQL'],
    liveURL:'',
    codeURL:'',
    icon:'❤️',
    tone: 1,
  },
   {
    id: 'pos',
    title: 'Punto de Venta',
    description:
      'Sistema de ventas con facturación, corte de caja y estadísticas diarias. ' +
      'Funciona sin conexión y sincroniza al recuperar internet.',
    tags: ['Electron', 'SQLite', 'JavaScript'],
    liveUrl: '',
    codeUrl: '',
    icon: '❤️',
    tone: 2,
  },
]

export const projectsSection = {
  title: 'Proyectos seleccionados',
  numeral: '01 — Portafolio',
}