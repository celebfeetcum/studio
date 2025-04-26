import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck, Zap, Settings, DatabaseZap } from 'lucide-react'; // Icons
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer


const TitaniumPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
           <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Titanium Security Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our cutting-edge Titanium suite, offering advanced protection, privacy features, and enterprise-grade security.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6 text-secondary" /> Enhanced Threat Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Utilizing advanced heuristics and AI to proactively identify and neutralize emerging mobile threats beyond traditional signature-based methods.
              </CardDescription>
            </CardContent>
          </Card>

           <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <DatabaseZap className="w-6 h-6 text-secondary" /> Data Privacy Shield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Implementing robust data encryption both at rest and in transit, coupled with network traffic anonymization features to safeguard user privacy.
              </CardDescription>
            </CardContent>
          </Card>

           <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="w-6 h-6 text-secondary" /> Customizable Security Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Tailor security configurations and policies to meet specific organizational needs or individual preferences for granular control.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="text-center p-8 bg-card rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Learn More</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our Titanium solutions are currently under active development. Contact us for early access programs or to discuss your specific security requirements.
            </p>
            <Button variant="secondary">Contact Sales</Button>
        </section>


         <section className="text-center">
             <Link href="/" passHref>
                <Button variant="outline">Back to Home</Button>
             </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TitaniumPage;
