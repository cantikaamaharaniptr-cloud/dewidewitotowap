import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'DEWIDEWITOTO',
  domain: 'dewidewitotowap.com',
  logo: 'https://i.postimg.cc/52Xxb3Tq/dewidewi-pp.png',
  linkLogin: 'https://loginwap.gelapsekali.com/dewidewi',
  linkDaftar: 'https://daftarwap.gelapsekali.com/dewidewi',
  amphtml: 'dewidewitotowap.com',
};

const features = [
  { icon: '\u26A1', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '\u{1F512}', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '\u{1F4F1}', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '\u{1F517}', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '\u{1F3AF}', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '\u{1F4AC}', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login DEWIDEWITOTO?', a: 'Kunjungi halaman login resmi di situs resmi DEWIDEWITOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah DEWIDEWITOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, DEWIDEWITOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>DEWIDEWITOTO | Portal Utama & Registrasi Cepat: Ekspedisi Hiburan Tanpa Batas</title>
        <meta name="description" content="DEWIDEWITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="DEWIDEWITOTO | Portal Utama & Registrasi Cepat: Ekspedisi Hiburan Tanpa Batas" />
        <meta property="og:description" content="DEWIDEWITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="DEWIDEWITOTO | Portal Utama & Registrasi Cepat: Ekspedisi Hiburan Tanpa Batas" />
        <meta name="twitter:description" content="DEWIDEWITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Nunito Sans',sans-serif;background:#1a1000;color:#e0e0e0;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1200px;margin:0 auto;padding:0 24px}

        .topbar{background:#281a05;border-bottom:1px solid rgba(255,102,0,.25);padding:7px 0;font-size:12px;color:#ccc}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#ff6600;font-weight:700;transition:.2s}.topbar a:hover{opacity:.8}

        header{background:#281a05;border-bottom:1px solid rgba(255,102,0,.25);position:sticky;top:0;z-index:50;backdrop-filter:blur(12px)}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:12px 0;gap:14px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:900;font-size:24px;color:#ff6600;flex-shrink:0}
        .logo img{width:38px;height:38px;border-radius:12px;border:2px solid #ff6600}
        .nav-mid{display:flex;gap:4px;flex:1;justify-content:center}
        .nav-mid a{padding:8px 18px;font-size:13px;color:#bbb;font-weight:600;border-radius:12px;transition:.2s}
        .nav-mid a:hover,.nav-mid a.act{color:#fff;background:#ff6600}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:11px 24px;border-radius:14px;font-weight:700;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .btn-p{background:#ff6600;color:#fff}.btn-p:hover{background:#e55a00;transform:translateY(-1px)}
        .btn-o{border:2px solid #ff6600;color:#ff6600;background:transparent}.btn-o:hover{background:rgba(255,102,0,.14)}

        .hero{background:#281a05;padding:50px 0;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;right:-150px;top:-80px;width:500px;height:500px;border-radius:50%;background:rgba(255,102,0,.14)}
        .hero::after{content:'';position:absolute;left:-100px;bottom:-120px;width:400px;height:400px;border-radius:50%;background:rgba(255,102,0,.14)}
        .hero-flex{display:flex;align-items:center;gap:44px;position:relative;z-index:1}
        .hero-text{flex:1}
        .hero-text .chip{display:inline-flex;align-items:center;gap:8px;background:#ff6600;color:#fff;padding:7px 18px;border-radius:14px;font-size:12px;font-weight:800;margin-bottom:18px;text-transform:uppercase;letter-spacing:.5px}
        .hero-text h1{font-size:clamp(24px,4vw,42px);font-weight:900;line-height:1.12;margin-bottom:16px;color:#fff}
        .hero-text p{color:#ccc;font-size:15px;line-height:1.8;margin-bottom:24px;max-width:500px;text-align:justify}
        .hero-text .hbtns{display:flex;gap:12px;flex-wrap:wrap}
        .hero-text .btn-hero{padding:14px 32px;border-radius:16px;font-weight:800;font-size:15px;border:none;cursor:pointer;font-family:inherit;transition:.25s}
        .hero-text .btn-hero.fill{background:#ff6600;color:#fff}
        .hero-text .btn-hero.fill:hover{background:#e55a00;transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.3)}
        .hero-text .btn-hero.line{background:transparent;color:#ff6600;border:2px solid #ff6600}
        .hero-text .btn-hero.line:hover{background:rgba(255,102,0,.14)}
        .trust-row{display:flex;gap:24px;margin-top:20px;font-size:12px;color:#bbb;font-weight:600}
        .hero-img{flex-shrink:0;width:360px}
        .hero-img img{border-radius:20px;box-shadow:0 24px 64px rgba(0,0,0,.45);border:2px solid rgba(255,102,0,.25)}

        .stats{background:#35240a;border-top:1px solid rgba(255,102,0,.25);border-bottom:1px solid rgba(255,102,0,.25);padding:26px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center}
        .stat-item{padding:8px 0}
        .stat-item .sv{font-size:28px;font-weight:900;color:#ff6600}
        .stat-item .sl{font-size:10px;color:#bbb;text-transform:uppercase;letter-spacing:1.5px;margin-top:3px;font-weight:600}

        .sec{padding:56px 0}
        .sec-alt{background:#281a05}
        .sec-head{text-align:center;margin-bottom:40px}
        .sec-head .badge{display:inline-block;background:#ff6600;color:#fff;padding:6px 20px;border-radius:14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
        .sec-head h2{font-size:clamp(24px,3.2vw,36px);font-weight:900;margin-bottom:8px;color:#fff}
        .sec-head p{color:#bbb;font-size:14px;max-width:540px;margin:0 auto;text-align:justify}

        .art-row{max-width:900px;margin:0 auto}
        .art-content h3{font-size:22px;font-weight:800;margin-bottom:18px;color:#ff6600}
        .art-content p{color:#ccc;font-size:14px;line-height:1.9;margin-bottom:20px;text-align:justify}
        .art-gallery{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
        .art-gallery img{border-radius:16px;border:2px solid rgba(255,102,0,.25);width:100%;height:210px;object-fit:cover;transition:.3s}
        .art-gallery img:hover{border-color:#ff6600;transform:scale(1.02)}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
        .art-tag{background:#ff6600;color:#fff;padding:6px 16px;border-radius:14px;font-size:11px;font-weight:700}

        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat-card{background:#35240a;border:2px solid rgba(255,102,0,.25);border-radius:20px;padding:28px;transition:.3s}
        .feat-card:hover{border-color:#ff6600;transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,.25)}
        .feat-card .fi-icon{width:52px;height:52px;border-radius:16px;background:rgba(255,102,0,.14);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px}
        .feat-card h3{font-size:16px;font-weight:800;margin-bottom:6px;color:#fff}
        .feat-card p{color:#bbb;font-size:13px;margin:0;text-align:justify;line-height:1.65}

        .cta-box{background:linear-gradient(135deg,#e55a00,#ff6600);border-radius:24px;padding:56px 36px;text-align:center;color:#fff;position:relative;overflow:hidden}
        .cta-box::before{content:'';position:absolute;right:-100px;top:-100px;width:350px;height:350px;border-radius:50%;background:rgba(255,255,255,.07)}
        .cta-box::after{content:'';position:absolute;left:-80px;bottom:-80px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.05)}
        .cta-box>*{position:relative;z-index:1}
        .cta-box h2{font-size:clamp(22px,3.2vw,34px);font-weight:900;margin-bottom:10px}
        .cta-box p{opacity:.92;margin-bottom:24px;font-size:16px}
        .cta-box .btn-cta{background:#fff;color:#1a1000;font-weight:800;padding:16px 38px;border-radius:16px;border:none;cursor:pointer;font-family:inherit;font-size:16px;transition:.25s}
        .cta-box .btn-cta:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,.35)}

        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:16px;overflow:hidden;border:2px solid rgba(255,102,0,.25);transition:.3s}
        .bnr-card:hover{transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,.25);border-color:#ff6600}
        .bnr-card img{width:100%;height:auto}

        .faq-list{max-width:740px;margin:0 auto}
        .faq-item{background:#35240a;border:2px solid rgba(255,102,0,.25);border-radius:16px;padding:20px 24px;margin-bottom:10px;cursor:pointer;transition:.25s}
        .faq-item:hover{border-color:#ff6600}
        .faq-q{font-weight:700;display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#f0f0f0}
        .faq-q span{color:#ff6600;font-size:20px;font-weight:800}
        .faq-a{margin-top:12px;color:#bbb;font-size:14px;line-height:1.75;border-top:1px solid rgba(255,102,0,.25);padding-top:12px;text-align:justify}

        footer{background:#281a05;border-top:2px solid rgba(255,102,0,.25);padding:40px 0;font-size:13px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:24px}
        .ft-col h4{color:#ff6600;font-size:15px;font-weight:800;margin-bottom:14px}
        .ft-col a{display:block;color:#aaa;margin-bottom:8px;transition:.2s;font-weight:500}.ft-col a:hover{color:#ff6600}
        .ft-bottom{border-top:1px solid rgba(255,102,0,.25);padding-top:20px;text-align:center;color:#999}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:420px}
          .hero-text .hbtns,.trust-row{justify-content:center}
          .hero-text p{text-align:center}
          .nav-mid{display:none}
          .art-gallery{grid-template-columns:1fr}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .feat-grid,.stats-grid{grid-template-columns:1fr}
          .bnr-grid,.ft-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="topbar"><div className="W topbar-inner">
        <span>{D.brand} &mdash; Platform Resmi 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nav-mid">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      <main>
        <section className="hero"><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="chip">{D.brand} Official</div>
              <h1>DEWIDEWITOTO | Portal Utama & Registrasi Cepat: Ekspedisi Hiburan Tanpa Batas</h1>
              <p>DEWIDEWITOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang.</p>
              <div className="hbtns">
                <a href={D.linkDaftar} className="btn-hero fill">Daftar Sekarang &rarr;</a>
                <a href={D.linkLogin} className="btn-hero line">Login Akun</a>
              </div>
              <div className="trust-row">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop" alt={D.brand + ' Platform'} />
            </div>
          </div>
        </div></section>

        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="badge">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="badge">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-content">
              <h3>Panduan Lengkap {D.brand}</h3>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=260&fit=crop" alt={D.brand + ' Service'} />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=260&fit=crop" alt={D.brand + ' Team'} />
              </div>
              <p>DEWIDEWITOTO di situs resmi DEWIDEWITOTO menyajikan pengalaman digital yang hangat dan menyenangkan. Seperti secangkir kopi favorit yang selalu membuat hari lebih baik, mengakses DEWIDEWITOTO memberikan kenyamanan dan kepuasan tersendiri. Antarmuka yang cozy dan proses login yang smooth membuat setiap kunjungan terasa seperti menikmati espresso terbaik di coffee shop favorit.</p>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=260&fit=crop" alt={D.brand + ' Dashboard'} />
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=260&fit=crop" alt={D.brand + ' Digital'} />
              </div>
              <p>Racikan sempurna dari DEWIDEWITOTO melalui situs resmi DEWIDEWITOTO menghadirkan blend antara keamanan SSL 256-bit dan kecepatan server premium. Aroma layanan 24/7 yang selalu fresh, link alternatif yang selalu freshly brewed, dan uptime 99,9% menjadikan DEWIDEWITOTO the perfect cup untuk kebutuhan akses digital Anda. Barista support kami siap menyajikan bantuan terbaik setiap saat.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="badge">Promo &amp; Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=720&h=280&fit=crop" alt={D.brand + ' Promo 1'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=720&h=280&fit=crop" alt={D.brand + ' Promo 2'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=280&fit=crop" alt={D.brand + ' Promo 3'} loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="btn-cta">Daftar Gratis &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="badge">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#aaa',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a><a href={D.linkDaftar}>Daftar Baru</a><a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a><a href="#">Proteksi DDoS</a><a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</div>
      </div></footer>
    </>
  );
}
