import { BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Arena() {
  return (
    <div className="space-y-8">
      {/* Caption */}
      <div>
        <h1 className="font-display text-2xl">REAL ARENA</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-lg">
          The faster way to climb. Wager your REAL Points, win, and your Arena Multiplier does the rest.
        </p>
        <motion.button
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 font-display text-sm hover:bg-primary/15 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Go Wager <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Arena Performance */}
      <motion.div
        className="relative rounded-2xl border border-border bg-card overflow-hidden"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[hsl(30_40%_30%/0.03)] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 metallic-sheen pointer-events-none" />

        <div className="relative z-10 p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            <h2 className="font-display text-sm tracking-wider">ARENA PERFORMANCE</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Arena Points Earned</p>
              <p className="font-display text-3xl text-foreground">12,450</p>
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">Based on wagering activity</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Total Wagered</p>
              <p className="font-display text-2xl text-amber">$8,200</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
