import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { ArrowRight, Award, CalendarCheck2, MapPin, PhoneCall, Sparkles, Wrench } from 'lucide-react';

const services = [
  'Antique furniture repair',
  'Furniture refinishing',
  'Furniture reupholstery',
  'Chair and sofa repair',
  'Leather repair and restoration',
  'Cabinet refinishing',
  'Fine art restoration',
  'Picture frame repair',
  'Painting and fine ceramics restoration',
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

const trustPoints = [
  { icon: CalendarCheck2, label: 'Established 1976' },
  { icon: Award, label: 'Family owned and operated' },
  { icon: MapPin, label: 'Based in Hialeah, FL' },
  { icon: Wrench, label: 'Repair, refinish, and upholstery' },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-rustic-200/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,111,68,0.18),_transparent_28%),radial-gradient(circle_at_right,_rgba(74,47,34,0.1),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-rustic-200 bg-white/75 px-4 py-2 text-sm text-rustic-700 backdrop-blur">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rustic-600" />
              <span>DiSar Furniture Service Inc. • Make the old look new</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:3055585141" className="inline-flex items-center gap-2 hover:text-rustic-900">
                <PhoneCall className="h-4 w-4" /> (305) 558-5141
              </a>
              <a href="mailto:disar@disar.pro" className="hover:text-rustic-900">
                disar@disar.pro
              </a>
            </div>
          </div>

          <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Furniture repair</Badge>
                <Badge variant="secondary">Refinishing</Badge>
                <Badge variant="secondary">Upholstery</Badge>
                <Badge variant="secondary">Fine art restoration</Badge>
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-rustic-900 sm:text-6xl lg:text-7xl">
                  South Florida furniture restoration with old-world craftsmanship.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-rustic-700">
                  Family-owned since 1976, DiSar Furniture Service restores antiques, repairs damaged pieces,
                  and refinishes furniture with the kind of care local homeowners and designers expect.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-rustic-200 bg-white/80 px-4 py-3 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rustic-100 text-rustic-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-rustic-800">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#quote">
                    Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:3055585141">Call now</a>
                </Button>
              </div>

              <div className="grid gap-3 rounded-3xl border border-rustic-200 bg-white/80 p-5 shadow-soft sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-semibold text-rustic-900">1976</div>
                  <div className="text-sm text-rustic-600">Year established</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-rustic-900">South FL</div>
                  <div className="text-sm text-rustic-600">Service territory</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-rustic-900">Custom</div>
                  <div className="text-sm text-rustic-600">Repair plans for each piece</div>
                </div>
              </div>
            </div>

            <div id="quote" className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-rustic-200/40 blur-2xl" />
              <div className="relative space-y-4">
                <Card className="bg-rustic-900 text-white shadow-soft">
                  <CardHeader>
                    <Badge className="w-fit bg-rustic-100 text-rustic-900">Free estimate request</Badge>
                    <CardTitle className="text-2xl text-white">Get a fast quote for your furniture project.</CardTitle>
                    <CardDescription className="text-rustic-100/80">
                      Tell us what needs repair, refinishing, or restoration and we’ll follow up directly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LeadForm />
                  </CardContent>
                </Card>
                <div className="rounded-3xl border border-rustic-200 bg-white/80 p-5 text-sm text-rustic-700 shadow-soft">
                  <p className="font-semibold text-rustic-900">Contact info</p>
                  <p>3140 W 84th St #6, Hialeah, FL 33018</p>
                  <p>Fax: (305) 556-0700</p>
                  <p>
                    Phone: <a href="tel:3055585141" className="font-medium text-rustic-900">(305) 558-5141</a>
                  </p>
                  <p>
                    Email: <a href="mailto:disar@disar.pro" className="font-medium text-rustic-900">disar@disar.pro</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">What DiSar restores</Badge>
            <h2 className="font-serif text-4xl text-rustic-900">A wide range of service work, from heirlooms to everyday pieces.</h2>
            <p className="text-base leading-7 text-rustic-700">
              From antique furniture repair and fine art restoration to upholstery and refinishing, the shop handles
              projects that need careful hands and real craftsmanship.
            </p>
            <div className="rounded-3xl border border-rustic-200 bg-white/80 p-5 text-sm text-rustic-700 shadow-soft">
              <p className="font-semibold text-rustic-900">Known service categories</p>
              <p>Furniture repair, furniture refinishing, furniture reupholstery, chair and sofa work, cabinet refinishing, leather repair, and restoration for picture frames, paintings, and fine ceramics.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service} className="bg-white/90">
                <CardContent className="flex items-center gap-3 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rustic-100 text-rustic-700">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-rustic-900">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-rustic-200/70 bg-rustic-50/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2 bg-white/90">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Why locals call DiSar</Badge>
                <CardTitle className="text-3xl">Trusted by homeowners, families, and businesses across South Florida.</CardTitle>
                <CardDescription className="text-base">
                  The shop’s long-running reputation comes from straightforward communication, careful workmanship,
                  and restoration that respects the original character of each piece.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {[
                  'Decades of hands-on restoration experience',
                  'Family business with a personal approach',
                  'Based in Hialeah for easy local service',
                  'Works on antiques, fine art, and upholstered pieces',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-rustic-200 bg-rustic-50 px-4 py-3 text-sm text-rustic-800">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-rustic-900 text-white">
              <CardHeader>
                <Badge className="w-fit bg-rustic-100 text-rustic-900">Service area</Badge>
                <CardTitle className="text-3xl text-white">Serving communities throughout Florida.</CardTitle>
                <CardDescription className="text-rustic-100/80">
                  Common service areas include Miami, Hialeah, Fort Lauderdale, West Palm Beach, Boca Raton, Naples,
                  Marco Island, Fort Myers, Fort Pierce, Key Largo, and Key West.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Badge key={location} variant="outline" className="border-rustic-100/20 bg-white/10 text-white">
                    {location}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">Clear next step</Badge>
            <h2 className="font-serif text-4xl text-rustic-900">Call, email, or request a quote to get started today.</h2>
            <p className="max-w-2xl text-base leading-7 text-rustic-700">
              Whether the job is a damaged heirloom, a reupholstery refresh, or a full refinishing project,
              DiSar Furniture Service is set up for direct response and quick follow-up.
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

          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle>Business details</CardTitle>
              <CardDescription>Everything visitors need before reaching out.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-rustic-700">
              <div className="rounded-2xl bg-rustic-50 p-4">
                <div className="font-medium text-rustic-900">DiSar Furniture Service Inc.</div>
                <div>3140 W 84th St #6, Hialeah, FL 33018</div>
                <div>Fax: (305) 556-0700</div>
              </div>
              <div className="rounded-2xl bg-rustic-50 p-4">
                <div className="font-medium text-rustic-900">Primary contact</div>
                <div>Phone: (305) 558-5141</div>
                <div>Email: disar@disar.pro</div>
              </div>
              <div className="rounded-2xl bg-rustic-50 p-4">
                <div className="font-medium text-rustic-900">Core specialties</div>
                <div>Furniture repair, refinishing, upholstery, and fine art restoration.</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
