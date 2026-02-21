"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for ESP integration
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight font-mono">
                                // Join the <br />
                                <span className="opacity-70">Knowledge Network</span>
                            </h2>
                            <p className="text-primary-foreground/70 text-lg mb-8">
                                Get monthly insights on AI prototyping, system architecture, and product strategy. No spam, just high-signal technical content.
                            </p>
                        </motion.div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Welcome aboard</h3>
                                <p className="text-primary-foreground/70">Check your inbox to confirm your subscription.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2 opacity-80">
                                        Email Address
                                    </label>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="eric@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-mono"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 bg-white text-primary rounded-lg font-bold font-mono hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
                                >
                                    {status === "loading" ? "Initializing..." : "Initialize Subscription"}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-xs text-center opacity-50 mt-4">
                                    Join 1,000+ product technologists. Unsubscribe anytime.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
