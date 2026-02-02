import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

// Individual Counter Logic
const Counter = ({ target, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + "+");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, count]);

  return (
    <div ref={ref} className="stat">
      <motion.h2 className="stat-number">{rounded}</motion.h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = t('about.stats.statistics', { returnObjects: true });

  return (
    <section className="stats-container">
      <div className="stats-content container">
        <div className="stats-title-box">
          <h2 className="stats-heading">{t('about.stats.title')}</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Counter key={index} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}