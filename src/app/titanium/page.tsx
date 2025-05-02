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
      <main className="flex-grow container mx-auto px-4 py-16 md:py-20"> {/* Increased padding */}
        <section className="mb-16 md:mb-20 text-center"> {/* Increased margin */}
           <ShieldCheck className="w-20 h-20 mx-auto mb-6 text-primary" /> {/* Increased size and margin */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Titanium Security Solutions</h1> {/* Increased size */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our cutting-edge Titanium suite, offering advanced protection, privacy features, and enterprise-grade security designed for the modern mobile landscape.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 md:mb-20"> {/* Increased gap and margin */}
          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"> {/* Added shadow and overflow */}
            <CardHeader className="p-6"> {/* Adjusted padding */}
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold"> {/* Adjusted gap */}
                <Zap className="w-7 h-7 text-secondary" /> Enhanced Threat Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0"> {/* Adjusted padding */}
              <CardDescription className="text-muted-foreground text-sm leading-relaxed"> {/* Added leading-relaxed */}
                Utilizing advanced heuristics and AI-powered analysis to proactively identify and neutralize emerging mobile threats, going beyond traditional signature-based methods.
              </CardDescription>
            </CardContent>
          </Card>

           <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <DatabaseZap className="w-7 h-7 text-secondary" /> Data Privacy Shield
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                Implementing robust end-to-end data encryption, both at rest and in transit, coupled with network traffic anonymization features to safeguard user privacy against surveillance.
              </CardDescription>
            </CardContent>
          </Card>

           <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <Settings className="w-7 h-7 text-secondary" /> Customizable Security Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                Offering granular control to tailor security configurations and enforcement policies, meeting specific organizational compliance needs or individual user preferences.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Call-to-Action Section */}
        <section className="text-center p-8 md:p-12 bg-gradient-to-br from-card via-primary/5 to-card rounded-lg shadow-xl mb-16 md:mb-20 border border-primary/30">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">Interested in Titanium?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              Our advanced Titanium solutions are under active development. Reach out to learn about early access programs or discuss how Titanium can meet your specific mobile security requirements.
            </p>
            <Button variant="secondary" size="lg">Contact Sales</Button> {/* Larger button */}
        </section>


         <section className="text-center">
             <Link href="/" passHref>
                <Button variant="outline" size="lg">Back to Home</Button> {/* Larger button */}
             </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TitaniumPage;
