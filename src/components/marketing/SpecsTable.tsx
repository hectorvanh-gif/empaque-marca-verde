interface SpecRow {
  talla: string;
  medidas: string;
  gramaje: string;
  uso: string;
  std?: boolean;
}

interface SpecLine {
  label: string;
  rows: SpecRow[];
}

interface SpecsTableProps {
  eyebrow: string;
  heading: string;
  description: string;
  lines: SpecLine[];
  headers: { linea: string; talla: string; medidas: string; gramaje: string; uso: string };
  standardTag: string;
  note?: string;
}

const SpecsTable = ({ eyebrow, heading, description, lines, headers, standardTag, note }: SpecsTableProps) => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">{eyebrow}</span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{heading}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-2xl shadow-card border border-border/20">
        <table className="w-full text-left">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-5 py-4 font-display font-semibold">{headers.linea}</th>
              <th className="px-5 py-4 font-display font-semibold">{headers.talla}</th>
              <th className="px-5 py-4 font-display font-semibold">{headers.medidas}</th>
              <th className="px-5 py-4 font-display font-semibold">{headers.gramaje}</th>
              <th className="px-5 py-4 font-display font-semibold">{headers.uso}</th>
            </tr>
          </thead>
          <tbody className="bg-card">
            {lines.map((line) =>
              line.rows.map((s, i) => (
                <tr
                  key={`${line.label}-${s.talla}`}
                  className={`border-t border-border/20 ${i % 2 === 1 ? "bg-secondary/30" : ""} hover:bg-secondary/50 transition-colors`}
                >
                  {i === 0 && (
                    <td className="px-5 py-4 font-semibold text-primary text-sm align-top" rowSpan={line.rows.length}>
                      {line.label}
                    </td>
                  )}
                  <td className="px-5 py-4 text-foreground font-medium">{s.talla}</td>
                  <td className="px-5 py-4 font-mono text-sm text-foreground">{s.medidas}</td>
                  <td className="px-5 py-4 text-foreground text-sm">
                    {s.gramaje}
                    {s.std && (
                      <span className="ml-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        {standardTag}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground text-sm">{s.uso}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-6">
        {lines.map((line) => (
          <div key={line.label}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 px-1">{line.label}</h3>
            <div className="grid gap-3">
              {line.rows.map((s) => (
                <div key={s.talla} className="bg-card rounded-xl shadow-card border border-border/20 p-4">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/20">
                    <p className="font-display text-lg text-primary font-semibold">{s.talla}</p>
                    {s.std && (
                      <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        {standardTag}
                      </span>
                    )}
                  </div>
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground text-xs">{headers.medidas}</dt>
                      <dd className="font-mono text-foreground">{s.medidas}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-xs">{headers.gramaje}</dt>
                      <dd className="text-foreground">{s.gramaje}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground text-xs">{headers.uso}</dt>
                      <dd className="text-foreground">{s.uso}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 leading-relaxed">
          {note}
        </div>
      )}
    </div>
  </section>
);

export default SpecsTable;
