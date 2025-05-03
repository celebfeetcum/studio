
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Added Input
import { useToast } from '@/hooks/use-toast'; // Added Toast
import { Wifi, Copy, Server, Search, ExternalLink } from 'lucide-react'; // Icons, Added Search, ExternalLink
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { logIpAddress } from './actions'; // Import the server action
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton
// Separator is not used visually here, but kept for potential future use if needed.

const ToolsPage: NextPage = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [isLoadingIp, setIsLoadingIp] = useState<boolean>(true);
  const [shodanInput, setShodanInput] = useState<string>(''); // State for Shodan input
  const { toast } = useToast();

  const fetchIp = async () => {
    setIsLoadingIp(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Failed to fetch IP address');
      }
      const data = await response.json();
      const fetchedIp = data.ip;
      setIpAddress(fetchedIp);

      // Log the IP address and user agent server-side
      const logResult = await logIpAddress({
        ip: fetchedIp,
        userAgent: navigator.userAgent,
       });

       // Notify user based on server action result
       if (logResult.success) {
          // Modify toast to reflect current state
          toast({
            title: "Info Logged (Console)",
            description: logResult.message || "Your IP/browser info logged to server console. DB persistence needed.",
            variant: "default", // Use default variant for info
          });
       } else {
          toast({
            title: "Logging Error",
            description: logResult.message || "Could not log IP information server-side.",
            variant: "destructive",
          });
       }


    } catch (error) {
      console.error('Error fetching IP:', error);
      setIpAddress('Error fetching IP');
      toast({
        title: "Error",
        description: "Could not fetch your IP address.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingIp(false);
    }
  };

  useEffect(() => {
    // Avoid hydration mismatch by fetching IP client-side after mount
    fetchIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on component mount

  const copyToClipboard = () => {
    if (ipAddress && ipAddress !== 'Error fetching IP') {
      navigator.clipboard.writeText(ipAddress)
        .then(() => {
          toast({
            title: "Copied!",
            description: "IP address copied to clipboard.",
          });
        })
        .catch(err => {
          console.error('Failed to copy IP:', err);
          toast({
            title: "Error",
            description: "Could not copy IP address.",
            variant: "destructive",
          });
        });
    }
  };

  const handleShodanLookup = () => {
    if (!shodanInput.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter an IP address or domain URL.",
        variant: "destructive",
      });
      return;
    }
    // Construct the URL as requested: base + ? + input
    const url = `https://louis.kim/api/shodan/ip?${shodanInput.trim()}`;
    // Open in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-20">
        <section className="mb-16 md:mb-20 text-center">
          <Server className="w-20 h-20 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Developer Tools</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Useful utilities for developers and security enthusiasts.
          </p>
        </section>

        <section className="max-w-2xl mx-auto space-y-10"> {/* Added space between cards */}
          {/* IP Checker Card */}
          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-primary/20">
            <CardHeader className="p-6 bg-gradient-to-r from-card via-primary/5 to-card">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <Wifi className="w-7 h-7 text-secondary" /> Check My Public IP Address
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                View the public IP address your device is currently using. This information is logged server-side (currently to console) for research purposes.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-4 space-y-4"> {/* Adjusted top padding */}
              <div className="flex items-center space-x-2">
                {isLoadingIp || ipAddress === null ? ( // Show skeleton if loading or ipAddress is strictly null
                    <Skeleton className="h-10 flex-grow" />
                ) : (
                    <Input
                        readOnly
                        value={ipAddress} // Directly use ipAddress state
                        className="flex-grow text-lg font-mono bg-muted border-secondary/30" // Style the input
                    />
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={copyToClipboard}
                  disabled={isLoadingIp || !ipAddress || ipAddress === 'Error fetching IP'}
                  aria-label="Copy IP Address"
                >
                  <Copy className="w-5 h-5" />
                </Button>
              </div>
              <Button
                onClick={fetchIp}
                disabled={isLoadingIp}
                className="w-full"
                variant="outline" // Different variant for visual distinction
              >
                {isLoadingIp ? 'Checking...' : 'Re-check IP'}
              </Button>
            </CardContent>
          </Card>

          {/* Shodan Lookup Card */}
          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-secondary/20">
             <CardHeader className="p-6 bg-gradient-to-r from-card via-secondary/5 to-card">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <Search className="w-7 h-7 text-primary" /> CVE & Leak Scanner
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                Enter an IP address or full domain URL (e.g., https://example.com) to check for known vulnerabilities and leaked information via Shodan.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-4 space-y-4"> {/* Adjusted top padding */}
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={shodanInput}
                  onChange={(e) => setShodanInput(e.target.value)}
                  placeholder="Enter IP or https://domain.url"
                  className="flex-grow text-base font-mono bg-muted border-primary/30" // Different border color
                />
              </div>
              <Button
                onClick={handleShodanLookup}
                className="w-full"
                variant="secondary" // Different variant
              >
                Show Me My CVEs & Leaked Info
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
               <p className="text-xs text-muted-foreground text-center pt-2">
                Powered by <a href="https://louis.kim" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Louis Kim's API</a>. Results open in a new tab.
               </p>
            </CardContent>
          </Card>
        </section>

         <section className="text-center mt-16 md:mt-20">
             <Link href="/" passHref>
                <Button variant="outline" size="lg">Back to Home</Button>
             </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
