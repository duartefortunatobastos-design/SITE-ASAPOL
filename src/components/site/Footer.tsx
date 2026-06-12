import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-[var(--navy-foreground)] mt-24">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
              <Shield className="h-5 w-5 text-[var(--gold)]" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold">ASAPOL</div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                Sindicato PSP
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Associação Sindical Autónoma de Polícia — a voz independente dos
            profissionais da Polícia de Segurança Pública.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors"
                aria-label="Rede social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--gold)]">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {[
              ["/", "Início"],
              ["/quem-somos", "Quem Somos"],
              ["/beneficios", "Benefícios"],
              ["/noticias", "Notícias"],
              ["/adesao", "Adesão"],
              ["/contactos", "Contactos"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[var(--gold)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--gold)]">
            Contactos
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" />Av. da Liberdade, 1250-096 Lisboa</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" />+351 210 000 000</li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" />geral@asapol.pt</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--gold)]">
            Newsletter
          </h4>
          <p className="text-sm text-white/70 mb-3">
            Receba as últimas novidades e comunicados sindicais.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 min-w-0 rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
            <button
              type="submit"
              className="rounded-md bg-gold-gradient px-3 py-2 text-sm font-semibold text-[var(--navy)] hover:opacity-90"
            >
              Subscrever
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} ASAPOL. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--gold)]">Política de Privacidade</a>
            <a href="#" className="hover:text-[var(--gold)]">Termos e Condições</a>
            <a href="#" className="hover:text-[var(--gold)]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
