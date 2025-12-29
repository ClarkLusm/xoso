import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RegionSelectorProps {
  currentRegion: 'MB' | 'MT' | 'MN';
  onRegionChange: (region: 'MB' | 'MT' | 'MN') => void;
}

export function RegionSelector({ currentRegion, onRegionChange }: RegionSelectorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 bg-muted rounded-xl border">
        {[
          { id: 'MB', label: 'Miền Bắc' },
          { id: 'MT', label: 'Miền Trung' },
          { id: 'MN', label: 'Miền Nam' },
        ].map((region) => (
          <button
            key={region.id}
            onClick={() => onRegionChange(region.id as any)}
            className={cn(
              "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
              currentRegion === region.id
                ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                : "text-muted-foreground hover:text-foreground hover:bg-black/5"
            )}
          >
            {region.label}
          </button>
        ))}
      </div>
    </div>
  );
}
