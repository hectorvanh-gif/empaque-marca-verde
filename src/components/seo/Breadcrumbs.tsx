import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  path: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="mb-4">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      {items.map((item, i) => (
        <li key={item.path} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3" />}
          {i === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
