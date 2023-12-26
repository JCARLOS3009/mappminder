import Image from 'next/image';
import Mapa_sp from './Mapa_sp.svg';
import ZoomableImage from '@/components/ZoomableImage';
export default function Home() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h1>Monitoramento Urbano</h1>
      </header>

      <nav style={{ backgroundColor: '#444', textAlign: 'center', color: '#fff', padding: '10px' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '100px' }}><a href="#map" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mapa</a></li>
          <li style={{ display: 'inline', marginRight: '100px' }}><a href="#reports" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Relatórios</a></li>
          <li style={{ display: 'inline', marginRight: '10px' }}><a href="#alerts" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Alertas</a></li>
        </ul>
      </nav>

      <section style={{display: 'flex',textAlign:'center', justifyContent: 'center', alignItems: 'center'}}>
        {/* Aqui, você pode usar a imagem importada usando a tag Image */}
        <Image src={Mapa_sp} alt="Mapa de São Paulo" width={500} height={500} />
        
         <iframe
          title="Meu iFrame"
          width="60%"
          height="800"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467695.1615763731!2d-47.18627549104198!3d-23.680661978753648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1703629748674!5m2!1spt-BR!2sbr"
          frameBorder="0"
          allowFullScreen
        ></iframe> 
      </section>

      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; 2023 Monitoramento Urbano</p>
      </footer>
    </div>
  )
  
}
