import { Line, Bar, Doughnut } from 'react-chartjs-2';

const chartComponents = {
  line: Line,
  bar: Bar,
  doughnut: Doughnut,
};

export default function ResearchChart({ config }) {
  if (!config) return null;

  const ChartComponent = chartComponents[config.type];
  if (!ChartComponent) return null;

  const data = {
    labels: config.labels,
    datasets: [
      {
        label: config.title,
        data: config.data,
        borderColor: config.color,
        backgroundColor:
          config.type === 'doughnut'
            ? [config.color, '#475569', '#1e293b']
            : `${config.color}33`,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: config.type === 'doughnut' } },
    scales:
      config.type !== 'doughnut'
        ? {
            y: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
            x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
          }
        : {},
  };

  return (
    <div className="h-[300px] w-full relative">
      <ChartComponent data={data} options={options} />
    </div>
  );
}
