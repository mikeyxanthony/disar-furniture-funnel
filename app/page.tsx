import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import {
  DISAR_LOGO_PATH,
  disarAssetUrl,
  featuredServicePhotos,
  portfolioPhotoPaths,
} from '@/lib/disar-assets';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { label: 'Established', value: '1976' },
  { label: 'Based in', value: 'Hialeah, FL' },
  { label: 'Primary contact', value: '(305) 558-5141' },
  { label: 'Core work', value: 'Repair, refinish, upholstery' },
];

const serviceHighlights = [
  'Antique furniture repair',
  'Furniture refinishing',
  'Furniture reupholstery',
  'Chair and sofa repair',
  'Leather repair and restoration',
  'Cabinet refinishing',
  'Fine art restoration',
  'Picture frame repair',
  'Painting and ceramics restoration',
];

const locations = [
  'Hialeah',
  'Miami',
  'Fort Lauderdale',
  'West Palm Beach',
  'Boca Raton',
  'Naples',
  'Marco Island',
  'Fort Myers',
  'Fort Pierce',
  'Key Largo',
  'Key West',
];

function fileLabel(path: string) {
  const file = path.split('/').pop() ?? path;
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#fbf8f3] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={disarAssetUrl(DISAR_LOGO_PATH)}
              alt="DiSar Furniture Service logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                DiSar Furniture Service Inc.
              </p>
              <p className="truncate text-sm text-stone-700">
                Furniture repair, refinishing, upholstery, and restoration
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:3055585141"
              className="hidden items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-300 hover:text-stone-900 sm:inline-flex"
            >
              <PhoneCall className="h-4 w-4" /> (305) 558-5141
            </a>
            <Button size="sm" asChild>
              <a href="#contact">Request quote</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(192,143,105,0.16),_transparent_30%),radial-gradient(circle_at_right_bottom,_rgba(66,46,34,0.09),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Furniture repair</Badge>
                <Badge variant="secondary">Refinishing</Badge>
                <Badge variant="secondary">Upholstery</Badge>
                <Badge variant="secondary">Fine art restoration</Badge>
              </div>

              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  Family-run since 1976
                </p>
                <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-7xl">
                  South Florida furniture restoration with a quieter, cleaner look.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-600">
                  DiSar Furniture Service restores antiques, repairs damaged pieces, and refinishes furniture with
                  careful workmanship and straightforward communication.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-stone-200 bg-white/85 px-4 py-3 shadow-sm"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-stone-900">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:3055585141">Call now</a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden border-stone-200 bg-white/90 shadow-lg shadow-stone-200/40">
                <CardHeader className="space-y-2 border-b border-stone-200/70 pb-5">
                  <Badge className="w-fit bg-stone-900 text-white">Free estimate request</Badge>
                  <CardTitle className="text-2xl text-stone-950">Get a fast quote for your furniture project.</CardTitle>
                  <CardDescription className="text-base text-stone-600">
                    Tell us what needs repair, refinishing, or restoration and we’ll follow up directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <LeadForm />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-3">
                {featuredServicePhotos.slice(0, 3).map((photo) => (
                  <div key={photo.path} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
                    <img
                      src={disarAssetUrl(photo.path)}
                      alt={photo.label}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Services
            </Badge>
            <h2 className="font-serif text-4xl text-stone-950">
              A wider set of service work, shown with real project photos.
            </h2>
            <p className="text-base leading-7 text-stone-600">
              From antique repairs and refinishing to upholstery and fine art restoration, DiSar handles a broad mix
              of furniture work with the same clean, careful approach.
            </p>
            <div className="rounded-3xl border border-stone-200 bg-white/85 p-5 text-sm text-stone-600 shadow-sm">
              <p className="font-semibold text-stone-900">Known service categories</p>
              <p className="mt-1">
                {serviceHighlights.join(', ')}.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredServicePhotos.map((photo) => (
              <Card key={photo.path} className="overflow-hidden border-stone-200 bg-white/95 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src={disarAssetUrl(photo.path)}
                    alt={photo.label}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Featured service</p>
                    <h3 className="mt-1 text-lg font-semibold">{photo.label}</h3>
                    <p className="mt-1 text-sm text-white/85">{photo.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-stone-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Gallery
              </Badge>
              <h2 className="font-serif text-4xl text-stone-950">Portfolio photos pulled directly from the live site.</h2>
              <p className="max-w-3xl text-base leading-7 text-stone-600">
                This gallery includes the extracted service and before/after assets from disarfurniture.com so the
                page shows the real work instead of placeholder imagery.
              </p>
            </div>
            <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm">
              {portfolioPhotoPaths.length} photos
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {portfolioPhotoPaths.map((path, index) => (
              <figure
                key={path}
                className="group overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-sm"
              >
                <img
                  src={disarAssetUrl(path)}
                  alt={fileLabel(path)}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <figcaption className="border-t border-stone-200 bg-white px-4 py-3 text-xs font-medium text-stone-600">
                  {String(index + 1).padStart(2, '0')} · {fileLabel(path)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Contact
            </Badge>
            <h2 className="font-serif text-4xl text-stone-950">Call, email, or request a quote to get started.</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-600">
              Whether the job is a damaged heirloom, a reupholstery refresh, or a full refinishing project, DiSar is
              set up for direct response and quick follow-up.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="tel:3055585141">Call (305) 558-5141</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:disar@disar.pro">Email the shop</a>
              </Button>
            </div>
          </div>

          <Card id="contact" className="border-stone-200 bg-white/90 shadow-sm">
            <CardHeader>
              <CardTitle>Business details</CardTitle>
              <CardDescription>Everything visitors need before reaching out.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-stone-600">
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="font-medium text-stone-900">DiSar Furniture Service Inc.</div>
                <div>3140 W 84th St #6, Hialeah, FL 33018</div>
                <div>Fax: (305) 556-0700</div>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="font-medium text-stone-900">Primary contact</div>
                <div>Phone: (305) 558-5141</div>
                <div>Email: disar@disar.pro</div>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="font-medium text-stone-900">Service area</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <Badge key={location} variant="outline" className="border-stone-200 bg-white text-stone-700">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
