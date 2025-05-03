import type { NextPage } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Import Alert
import { Apple, Smartphone, ShieldCheck, Rocket, Wrench } from 'lucide-react'; // Icons, Added Wrench
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-20"> {/* Increased padding */}
        <section className="text-center mb-16 md:mb-20"> {/* Increased margin */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Welcome to MobileSecurity.site Hub</h1> {/* Increased size and margin */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your central source for information and resources on mobile security across different platforms. Explore dedicated sections for Apple, Android, our specialized Titanium security solutions, and developer tools.
          </p>
        </section>

        {/* Coming Soon Banner */}
        <section className="mb-16 md:mb-20"> {/* Increased margin */}
          {/* Updated Alert styling */}
          <Alert className="border-primary/50 text-center bg-gradient-to-r from-card via-primary/10 to-card p-6 rounded-lg">
            <Rocket className="h-6 w-6 text-primary mx-auto mb-2" /> {/* Centered icon */}
            <AlertTitle className="font-bold text-xl text-primary mb-1">Coming Soon!</AlertTitle> {/* Increased size */}
            <AlertDescription className="text-muted-foreground">
              Titanium.MobileSecurity.site - Our advanced security platform is launching soon. Stay tuned!
            </AlertDescription>
          </Alert>
        </section>

        {/* Updated grid to accommodate 4 items */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap, updated grid columns */}
          {/* Apple Section */}
          <Link href="/apple" passHref>
            {/* Enhanced hover effect */}
            <Card className="hover:shadow-xl hover:border-secondary/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full overflow-hidden rounded-lg">
              <CardHeader className="flex flex-row items-center gap-4 p-6 pb-3"> {/* Adjusted padding */}
                 <Apple className="w-12 h-12 text-secondary" /> {/* Increased icon size */}
                <CardTitle className="text-xl font-semibold">Apple Security</CardTitle> {/* Adjusted text size for 4 cols */}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0"> {/* Adjusted padding */}
                <CardDescription className="text-muted-foreground text-sm"> {/* Adjusted text size */}
                  Discover security features, best practices, and downloadable resources specific to Apple's iOS and macOS ecosystems.
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto"> {/* Ensure button is at the bottom */}
                 <Button variant="secondary" className="w-full text-sm">Explore Apple</Button> {/* Adjusted text size */}
              </div>
            </Card>
          </Link>

          {/* Android Section */}
          <Link href="/android" passHref>
             <Card className="hover:shadow-xl hover:border-secondary/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full overflow-hidden rounded-lg">
              <CardHeader className="flex flex-row items-center gap-4 p-6 pb-3"> {/* Adjusted padding */}
                <Smartphone className="w-12 h-12 text-secondary" /> {/* Increased icon size */}
                <CardTitle className="text-xl font-semibold">Android Security</CardTitle> {/* Adjusted text size */}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0"> {/* Adjusted padding */}
                <CardDescription className="text-muted-foreground text-sm"> {/* Adjusted text size */}
                  Learn about Android's security architecture, common threats, and how to keep your Android devices safe.
                </CardDescription>
              </CardContent>
               <div className="p-6 pt-0 mt-auto"> {/* Ensure button is at the bottom */}
                 <Button variant="secondary" className="w-full text-sm">Explore Android</Button> {/* Adjusted text size */}
              </div>
            </Card>
          </Link>

          {/* Titanium Section */}
          <Link href="/titanium" passHref>
             <Card className="hover:shadow-xl hover:border-secondary/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full overflow-hidden rounded-lg">
              <CardHeader className="flex flex-row items-center gap-4 p-6 pb-3"> {/* Adjusted padding */}
                 <ShieldCheck className="w-12 h-12 text-secondary" /> {/* Increased icon size */}
                <CardTitle className="text-xl font-semibold">Titanium Security</CardTitle> {/* Adjusted text size */}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0"> {/* Adjusted padding */}
                <CardDescription className="text-muted-foreground text-sm"> {/* Adjusted text size */}
                  Explore our advanced Titanium security solutions designed for enhanced protection and privacy.
                </CardDescription>
              </CardContent>
               <div className="p-6 pt-0 mt-auto"> {/* Ensure button is at the bottom */}
                 <Button variant="secondary" className="w-full text-sm">Explore Titanium</Button> {/* Adjusted text size */}
              </div>
            </Card>
          </Link>

          {/* Tools Section - New Card */}
          <Link href="/tools" passHref>
             <Card className="hover:shadow-xl hover:border-secondary/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-card text-card-foreground flex flex-col h-full overflow-hidden rounded-lg">
              <CardHeader className="flex flex-row items-center gap-4 p-6 pb-3"> {/* Adjusted padding */}
                 <Wrench className="w-12 h-12 text-secondary" /> {/* Increased icon size */}
                <CardTitle className="text-xl font-semibold">Developer Tools</CardTitle> {/* Adjusted text size */}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0"> {/* Adjusted padding */}
                <CardDescription className="text-muted-foreground text-sm"> {/* Adjusted text size */}
                  Access useful utilities like an IP checker and vulnerability scanner for developers and security enthusiasts.
                </CardDescription>
              </CardContent>
               <div className="p-6 pt-0 mt-auto"> {/* Ensure button is at the bottom */}
                 <Button variant="secondary" className="w-full text-sm">Explore Tools</Button> {/* Adjusted text size */}
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
