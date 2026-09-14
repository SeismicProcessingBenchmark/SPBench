import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { AppData } from '../types';

interface Props {
  data: AppData;
}

export default function OverviewPage({ data }: Props) {
  const { t } = useLanguage();

  const stats = useMemo(() => ([
    { icon: '🧠', value: data.models.length, label: t.overview.statsMethods },
    { icon: '🗂️', value: data.benchmarks.length, label: t.overview.statsBenchmarks },
    { icon: '📄', value: data.papers.length, label: t.overview.statsPapers },
    { icon: '📊', value: data.results.length, label: t.overview.statsResults },
  ]), [data, t]);

  const milestones = [
    { icon: '🌱', year: '2026.04.11', text: t.overview.milestone1 },
    { icon: '🎉', year: '2026.05.28', text: t.overview.milestone2 },
  ];

  const futurePlans = [
    { icon: '🎯', text: t.overview.future1 },
    { icon: '🤖', text: t.overview.future2 },
    { icon: '🌍', text: t.overview.future3 },
  ];

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <span className="card-icon" style={{ width: 56, height: 56, fontSize: '1.9rem' }} aria-hidden="true">📈</span>
        <div>
          <h1>{t.overview.title}</h1>
          <p className="lede">{t.overview.subtitle}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a className="btn btn-primary btn-icon" href="https://github.com/SeismicProcessingBenchmark/SPBench-Code" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">💻</span> {t.overview.codeLink}
            </a>
            <a className="btn btn-icon" href="https://huggingface.co/SPBench" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">🤗</span> {t.overview.modelLink}
            </a>
          </div>
        </div>
      </div>

      {/* Framework Figure */}
      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-header">
          <span className="card-icon">🗺️</span>
          <div>
            <div className="card-title">{t.overview.figureTitle}</div>
          </div>
        </div>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${import.meta.env.BASE_URL}images/overview.jpg`}
            alt={t.overview.figureTitle}
            style={{
              width: '100%',
              maxWidth: 860,
              height: 'auto',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 24px rgba(15, 45, 40, 0.10)',
            }}
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid cols-4" style={{ marginBottom: 'var(--space-6)' }}>
        {stats.map((s) => (
          <div key={s.label} className="card stat-card">
            <span className="stat-icon" aria-hidden="true">{s.icon}</span>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="card">
        <div className="card-header">
          <span className="card-icon">💡</span>
          <div>
            <div className="card-title">{t.overview.aboutTitle}</div>
          </div>
        </div>
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
                <span><span aria-hidden="true" style={{ marginRight: 'var(--space-2)' }}>{m.icon}</span>{m.text}</span>
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
                <span><span aria-hidden="true" style={{ marginRight: 'var(--space-2)' }}>{plan.icon}</span>{plan.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
