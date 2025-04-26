import type { NextPage } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Import Alert
import { Apple, Smartphone, ShieldCheck, Rocket } from 'lucide-react'; // Icons
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Welcome to MobileSecurity.site Hub</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your central source for information and resources on mobile security across different platforms. Explore dedicated sections for Apple, Android, and our specialized Titanium security solutions.
          </p>
        </section>

        {/* Coming Soon Banner */}
        <section className="mb-12">
          <Alert className="border-primary text-center bg-card">
            <Rocket className="h-5 w-5 text-primary" />
            <AlertTitle className="font-bold text-lg text-primary">Coming Soon!</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Titanium.MobileSecurity.site - Our advanced security platform is launching soon. Stay tuned!
            </AlertDescription>
          </Alert>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Apple Section */}
          <Link href="/apple" passHref>
            <Card className="hover:shadow-lg hover:border-secondary transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <Apple className="w-10 h-10 text-secondary" />
                <CardTitle className="text-2xl font-semibold">Apple Security</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">
                  Discover security features, best practices, and downloadable resources specific to Apple's iOS and macOS ecosystems.
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="secondary" className="w-full">Explore Apple</Button>
              </div>
            </Card>
          </Link>

          {/* Android Section */}
          <Link href="/android" passHref>
             <Card className="hover:shadow-lg hover:border-secondary transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Smartphone className="w-10 h-10 text-secondary" />
                <CardTitle className="text-2xl font-semibold">Android Security</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">
                  Learn about Android's security architecture, common threats, and how to keep your Android devices safe.
                </CardDescription>
              </CardContent>
               <div className="p-6 pt-0">
                 <Button variant="secondary" className="w-full">Explore Android</Button>
              </div>
            </Card>
          </Link>

          {/* Titanium Section */}
          <Link href="/titanium" passHref>
             <Card className="hover:shadow-lg hover:border-secondary transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <ShieldCheck className="w-10 h-10 text-secondary" />
                <CardTitle className="text-2xl font-semibold">Titanium Security</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">
                  Explore our advanced Titanium security solutions designed for enhanced protection and privacy.
                </CardDescription>
              </CardContent>
               <div className="p-6 pt-0">
                 <Button variant="secondary" className="w-full">Explore Titanium</Button>
              </div>
            </Card>
          </Link>
        </section>
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Home;
