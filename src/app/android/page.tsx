import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Smartphone, ShieldCheck, Lock, AppWindow, CheckCircle } from 'lucide-react'; // Added CheckCircle
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer


const AndroidPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-20"> {/* Increased padding */}
         <section className="mb-16 md:mb-20 text-center"> {/* Increased margin */}
           <Smartphone className="w-20 h-20 mx-auto mb-6 text-primary" /> {/* Increased size and margin */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Android Security Center</h1> {/* Increased size */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand Android's security mechanisms, common threats, and how to enhance the safety of your devices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-20"> {/* Increased gap and margin */}
           <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"> {/* Added shadow and overflow */}
            <CardHeader className="p-6"> {/* Adjusted padding */}
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold"> {/* Adjusted gap */}
                <ShieldCheck className="w-7 h-7 text-secondary" /> Core Security Pillars
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-5"> {/* Adjusted padding and spacing */}
              <div>
                <h3 className="font-semibold text-lg mb-1.5">Google Play Protect</h3>
                <p className="text-muted-foreground text-sm leading-relaxed"> {/* Added leading-relaxed */}
                    Actively scans apps for malware and harmful behavior before and after installation, providing continuous protection.
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">Regular Security Updates</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Monthly security patches address known vulnerabilities. Prompt installation is crucial (availability varies by manufacturer).
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">App Permissions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Granular user control over what data (like location, contacts) and device features (like camera, microphone) apps can access.
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">Verified Boot</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Ensures the device's software, from the hardware root of trust up to the operating system, hasn't been tampered with during startup.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"> {/* Added shadow and overflow */}
            <CardHeader className="p-6"> {/* Adjusted padding */}
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold"> {/* Adjusted gap */}
                <Lock className="w-7 h-7 text-secondary" /> Best Practices
              </CardTitle>
               <CardDescription className="pt-2 text-base"> {/* Adjusted padding and size */}
                Essential tips for keeping your Android device secure.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4"> {/* Adjusted padding and spacing */}
                 <p className="text-muted-foreground text-sm flex items-start gap-3"> {/* Increased gap */}
                    <CheckCircle className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0"/> {/* Used CheckCircle */}
                    <span>Only install apps from trusted sources like the Google Play Store. Verify developer reputation.</span>
                 </p>
                <p className="text-muted-foreground text-sm flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0"/>
                    <span>Keep your operating system and all apps updated promptly to patch vulnerabilities.</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0"/>
                    <span>Use a strong screen lock (complex PIN, strong password, or reliable biometrics) and enable Find My Device.</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0"/>
                   <span>Regularly review app permissions. Revoke access for apps that don't strictly require it.</span>
                 </p>
                 <p className="text-muted-foreground text-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0"/>
                    <span>Be cautious of phishing attempts via email, SMS, or malicious websites. Don't click suspicious links.</span>
                 </p>
            </CardContent>
          </Card>
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

export default AndroidPage;
