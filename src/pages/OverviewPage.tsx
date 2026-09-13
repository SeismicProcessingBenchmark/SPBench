import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { AppData } from '../types';

interface Props {
  data: AppData;
}

export default function OverviewPage({ data }: Props) {
  const { t } = useLanguage();

  const stats = useMemo(() => ({
    methods: data.models.length,
    datasets: data.benchmarks.length,
    papers: data.papers.length,
    results: data.results.length,
  }), [data]);

  const milestones = [
    { year: '2026.04.11', text: t.overview.milestone1 },
    { year: '2026.05.28', text: t.overview.milestone2 },
  ];

  const futurePlans = [
    t.overview.future1,
    t.overview.future2,
    t.overview.future3,
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>{t.overview.title}</h1>
          <p className="lede">{t.overview.subtitle}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid cols-4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
            {stats.methods}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'var(--space-2)' }}>
            {t.overview.statsMethods}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
            {stats.datasets}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'var(--space-2)' }}>
            {t.overview.statsBenchmarks}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
            {stats.papers}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'var(--space-2)' }}>
            {t.overview.statsPapers}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
            {stats.results}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'var(--space-2)' }}>
            {t.overview.statsResults}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="section-title">
        <h2>{t.overview.aboutTitle}</h2>
      </div>
      <div className="card">
        <div className="card-body">
          <p style={{ marginBottom: 'var(--space-3)' }}>{t.overview.aboutText1}</p>
          <p>{t.overview.aboutText2}</p>
        </div>
      </div>

      {/* Milestones & Future Plans */}
      <div className="detail-grid" style={{ marginTop: 'var(--space-6)' }}>
        <div className="card">
          <div className="card-header">
            <span className="card-icon">🏆</span>
            <div>
              <div className="card-title">{t.overview.milestonesTitle}</div>
            </div>
          </div>
          <div className="card-body" style={{ maxHeight: 220, overflowY: 'auto', scrollbarWidth: 'thin' }}>
            {milestones.map((m, i) => (
              <div key={i} className="dl-row">
                <span className="dl-label" style={{ fontFamily: 'var(--mono)', color: 'var(--accent-dark)', flexShrink: 0 }}>{m.year}</span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-icon">🚀</span>
            <div>
              <div className="card-title">{t.overview.futureTitle}</div>
            </div>
          </div>
          <div className="card-body">
            {futurePlans.map((plan, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--mono)' }}>{i + 1}.</span>
                <span>{plan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
