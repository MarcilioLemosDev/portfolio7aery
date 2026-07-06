export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-id">
        <p className="nome">Marcílio Lemos</p>
        <p className="mono">Desenvolvedor de Software · Brasil</p>
        <p className="mono">© {new Date().getFullYear()}</p>
      </div>
      <div className="footer-credits">
        <p className="mono">
          Imagens: NASA · NASA/SDO · NASA/JPL-Caltech · MESSENGER · Apollo 17 ·
          Cassini · Voyager 2 · Hubble (NASA/ESA)
        </p>
        <p className="mono">
          Iconografia em domínio público, via NASA Image and Video Library
        </p>
      </div>
    </footer>
  );
}
