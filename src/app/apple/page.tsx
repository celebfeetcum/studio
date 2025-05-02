import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Download, Shield, FileText, Apple as AppleIcon } from 'lucide-react'; // Icons
import Header from '@/components/layout/header'; // Import Header
import Footer from '@/components/layout/footer'; // Import Footer


const ApplePage: NextPage = () => {
  // Placeholder link - replace with the actual URL to the downloadable file
  const downloadLink = "https://example.com/path/to/your/downloadable/file.pdf"; // REPLACE with actual file URL

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-20"> {/* Increased padding */}
        <section className="mb-16 md:mb-20 text-center"> {/* Increased margin */}
           <AppleIcon className="w-20 h-20 mx-auto mb-6 text-primary" /> {/* Increased size and margin */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Apple Security Center</h1> {/* Increased size */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore security features, best practices, and resources dedicated to the Apple ecosystem (iOS, iPadOS, macOS).
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-20"> {/* Increased gap and margin */}
          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"> {/* Added shadow and overflow */}
            <CardHeader className="p-6"> {/* Adjusted padding */}
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold"> {/* Adjusted gap */}
                <Shield className="w-7 h-7 text-secondary" /> Key Security Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-5"> {/* Adjusted padding and spacing */}
              <div>
                <h3 className="font-semibold text-lg mb-1.5">Face ID & Touch ID</h3> {/* Increased margin */}
                <p className="text-muted-foreground text-sm leading-relaxed"> {/* Added leading-relaxed */}
                  Secure biometric authentication for device access and payments, providing a seamless and robust layer of protection.
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">App Store Review</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A rigorous review process helps ensure apps meet Apple's standards for privacy, security, and content before reaching users.
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">End-to-End Encryption</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Protecting your iMessages, FaceTime calls, and sensitive iCloud data so only you and the recipient can access them.
                </p>
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-1.5">Privacy Controls</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Granular control over app permissions for location, camera, microphone, photos, and more, putting you in charge of your data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"> {/* Added shadow and overflow */}
            <CardHeader className="p-6"> {/* Adjusted padding */}
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold"> {/* Adjusted gap */}
                <FileText className="w-7 h-7 text-secondary" /> Download: Apple iOS Security Enhancer
              </CardTitle>
              <CardDescription className="pt-2 text-base"> {/* Adjusted padding and size */}
                 Elevate your iOS 16+ device security effortlessly. LAUNCHING [terms date]
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center p-6 pt-0 space-y-6"> {/* Centered items, adjusted padding/spacing */}
               <div className="text-muted-foreground text-sm space-y-3 text-left w-full"> {/* Left-aligned text */}
                  <p>Our debut tool integrates Apple's certified Tailscale technology to fortify your backend, ensuring:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1.5">
                    <li>Backdoor hacking prevention</li>
                    <li>Remote port invisibility</li>
                    <li>Seamless integration with Apple's network</li>
                  </ul>
                  <p>No advanced security operations knowledge required.</p>
                  <p>One-click install - all you need is a valid email for your device *</p>
               </div>
              {/* Link the button to the downloadable file */}
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="hover:bg-accent hover:text-accent-foreground transition-colors mt-4 w-full max-w-xs" /* Full width on small, max-width on larger */
              >
                <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> Download Enhancer (PDF)
                </a>
              </Button>
               <p className="text-xs text-muted-foreground text-center mt-2">
                Note: This link will open in a new tab. Ensure you have a PDF reader.
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

export default ApplePage;
