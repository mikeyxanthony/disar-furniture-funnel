const lastWateredAt = new Date('2026-03-25T09:00:00-04:00');
const hydrationWindowDays = 10;
const msPerDay = 1000 * 60 * 60 * 24;
const daysSinceWatered = Math.floor((Date.now() - lastWateredAt.getTime()) / msPerDay);
const needsWater = daysSinceWatered >= hydrationWindowDays;

const notionWaterLogUrl = 'https://www.notion.so/58b6f3e8d45e45bf958ffd0befe4b948';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

export default function Page() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f6f7f9_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-3xl items-center">
        <section className="w-full rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">Corn Plant Care</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Dracaena fragrans</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                A simple, mobile-first dashboard for Michael&apos;s corn plant.
              </p>
            </div>
            <div
              className={`rounded-full px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-inset ${
                needsWater
                  ? 'bg-amber-50 text-amber-800 ring-amber-200'
                  : 'bg-emerald-50 text-emerald-700 ring-emerald-200'
              }`}
            >
              {needsWater ? 'Needs Water' : 'Hydrated'}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Status</p>
              <p className="mt-2 text-lg font-semibold">{needsWater ? 'Needs Water' : 'Hydrated'}</p>
              <p className="mt-1 text-sm text-slate-600">
                {daysSinceWatered} day{daysSinceWatered === 1 ? '' : 's'} since watering
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Last watered</p>
              <p className="mt-2 text-lg font-semibold">{shortDateFormatter.format(lastWateredAt)}</p>
              <p className="mt-1 text-sm text-slate-600">{dateFormatter.format(lastWateredAt)}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Reminder</p>
              <p className="mt-2 text-lg font-semibold">Every 10 days</p>
              <p className="mt-1 text-sm text-slate-600">Check the soil before watering.</p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] bg-slate-50 p-5 ring-1 ring-slate-200 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Care guide</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                'Indirect light',
                '60-75°F',
                'Well-draining soil',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Simple rule: if the soil is dry and it has been 10 days or more, water the plant.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={notionWaterLogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Log Water
            </a>
            <div className="inline-flex h-12 items-center rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-600">
              Opens Michael&apos;s Notion watering log
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
