import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Smartphone, ShieldCheck, Lock, AppWindow } from 'lucide-react'; // Icons
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer


const AndroidPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
         <section className="mb-12 text-center">
           <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Android Security Center</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand Android's security mechanisms, common threats, and how to enhance the safety of your devices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="w-6 h-6 text-secondary" /> Core Security Pillars
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Google Play Protect</h3>
                <p className="text-muted-foreground text-sm">Scans apps for malware before and after installation.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">Regular Security Updates</h3>
                <p className="text-muted-foreground text-sm">Monthly patches address known vulnerabilities (availability varies by manufacturer).</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">App Permissions</h3>
                <p className="text-muted-foreground text-sm">User control over what data and features apps can access.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">Verified Boot</h3>
                <p className="text-muted-foreground text-sm">Ensures the operating system hasn't been tampered with during startup.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lock className="w-6 h-6 text-secondary" /> Best Practices
              </CardTitle>
               <CardDescription>
                Tips for keeping your Android device secure.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                 <p className="text-muted-foreground text-sm flex items-start gap-2">
                    <AppWindow className="w-4 h-4 mt-1 text-secondary flex-shrink-0"/>
                    <span>Only install apps from trusted sources like the Google Play Store.</span>
                 </p>
                <p className="text-muted-foreground text-sm flex items-start gap-2">
                     <ShieldCheck className="w-4 h-4 mt-1 text-secondary flex-shrink-0"/>
                    <span>Keep your operating system and apps updated.</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-2">
                    <Lock className="w-4 h-4 mt-1 text-secondary flex-shrink-0"/>
                    <span>Use a strong screen lock (PIN, pattern, password, or biometric).</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-2">
                    <Smartphone className="w-4 h-4 mt-1 text-secondary flex-shrink-0"/>
                   <span>Review app permissions regularly and revoke unnecessary ones.</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-1 text-secondary flex-shrink-0"/>
                    <span>Be cautious of phishing attempts via email, SMS, or websites.</span>
                 </p>
            </CardContent>
          </Card>
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

export default AndroidPage;
