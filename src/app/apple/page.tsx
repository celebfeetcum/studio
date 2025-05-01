import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Download, Shield, FileText, Apple as AppleIcon } from 'lucide-react'; // Icons
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer


const ApplePage: NextPage = () => {
  // Placeholder Google Drive link - replace with the actual shareable link
  const googleDriveLink = "https://docs.google.com/document/d/your_file_id/edit?usp=sharing"; // REPLACE your_file_id

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
           <AppleIcon className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Apple Security Center</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore security features, best practices, and resources dedicated to the Apple ecosystem (iOS, iPadOS, macOS).
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="w-6 h-6 text-secondary" /> Key Security Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Face ID & Touch ID</h3>
                <p className="text-muted-foreground text-sm">Secure biometric authentication for device access and payments.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">App Store Review</h3>
                <p className="text-muted-foreground text-sm">Rigorous review process to prevent malicious apps.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">End-to-End Encryption</h3>
                <p className="text-muted-foreground text-sm">Protecting your iMessages, FaceTime calls, and iCloud data.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1">Privacy Controls</h3>
                <p className="text-muted-foreground text-sm">Granular control over app permissions for location, camera, microphone, etc.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="w-6 h-6 text-secondary" /> Download: Apple iOS Security Enhancer
              </CardTitle>
              <CardDescription>
                 Elevate your iOS 16+ device security effortlessly.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start space-y-4">
               <div className="text-muted-foreground text-sm space-y-2">
                  <p>Our debut tool integrates Apple's certified Tailscale technology to fortify your backend, ensuring:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Backdoor hacking prevention</li>
                    <li>Remote port invisibility</li>
                    <li>Seamless integration with Apple's network</li>
                  </ul>
                  <p>No advanced security operations knowledge required.</p>
                  <p>One-click install - all you need is a valid email for your device *</p>
               </div>
              {/* Link the button to the Google Drive file */}
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="hover:bg-accent hover:text-accent-foreground transition-colors mt-4 self-center"
              >
                <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> Download Enhancer (PDF)
                </a>
              </Button>
               <p className="text-xs text-muted-foreground text-center mt-2 self-center">
                Note: This will open a Google Drive link in a new tab.
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

export default ApplePage;
