import Link from 'next/link';

function Brand() {
  return <span className="brand-lockup"><span className="robot-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><path className="fork" d="M6 25v-7m3 7v-7m3 7v-7m-6 7h6m-3 0v13"/><path className="knife" d="M42 18c-3 0-5 2-5 5v3h3v12"/><path className="hat" d="M11 17c-1-1-1-2-1-3 0-3 2-5 5-5 1-3 3-5 6-5 2 0 4 1 5 3 1-1 2-1 3-1 3 0 5 2 5 5 0 1 0 2-1 3h2v4H10v-4h1Z"/><path className="hat-line" d="M10 17h27M12 21h24"/><rect className="robot-face" x="12" y="21" width="24" height="17" rx="6"/><circle cx="19" cy="28" r="2.2"/><circle cx="29" cy="28" r="2.2"/><path className="smile" d="M20 33c2 1.5 6 1.5 8 0"/><path className="antenna" d="M24 21v-3"/><circle className="antenna-dot" cx="24" cy="16" r="1.7"/></svg></span><span className="brand-name"><b>Nurture</b><b>Food Inc</b></span></span>;
}

export default function SiteHeader() {
  return <header className="site-header"><div className="container nav"><Link className="brand" href="/"><Brand /></Link><nav aria-label="Main navigation"><Link href="/company">Company</Link><Link href="/platform">Platform</Link><Link href="/sacramento">Plant #1</Link><Link href="/markets">Markets</Link><Link href="/leadership">Leadership</Link><Link href="/investors">Investors</Link></nav><Link className="nav-cta" href="/#contact">Contact</Link></div></header>;
}
