interface Stat {
  value: string;
  label: string;
}

const StatsBar = ({ stats }: { stats: Stat[] }) => (
  <section className="py-10 md:py-12 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl md:text-3xl font-bold">{s.value}</p>
            <p className="text-primary-foreground/70 text-xs md:text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
