'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card className="overflow-hidden border-rustic-200/80 bg-white/95">
      <CardContent className="p-5 sm:p-6">
        {submitted ? (
          <div className="space-y-3 rounded-2xl bg-rustic-50 p-4 text-sm text-rustic-800">
            <p className="font-semibold text-rustic-900">Thanks — your request is ready to send.</p>
            <p>Call (305) 558-5141 or email disar@disar.pro to start the conversation.</p>
            <Button variant="secondary" className="mt-2" onClick={() => setSubmitted(false)}>
              Send another quote request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="Full name" required />
              <Input placeholder="Phone number" required />
            </div>
            <Input type="email" placeholder="Email address" required />
            <Textarea placeholder="What furniture needs attention?" required />
            <Button type="submit" size="lg" className="w-full">
              Request a free estimate
            </Button>
            <p className="text-center text-xs text-rustic-600">
              Fast response by phone, email, or through the quote form.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
