
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Added Input
import { useToast } from '@/hooks/use-toast'; // Added Toast
import { Wifi, Copy, Server, User } from 'lucide-react'; // Icons
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { logIpAddress } from './actions'; // Import the server action
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton

const ToolsPage: NextPage = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const fetchIp = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
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

        <section className="max-w-2xl mx-auto">
          <Card className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <Wifi className="w-7 h-7 text-secondary" /> Check My Public IP Address
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                View the public IP address your device is currently using. This information is logged server-side (currently to console) for research purposes.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center space-x-2">
                {isLoading || ipAddress === null ? ( // Show skeleton if loading or ipAddress is strictly null
                    <Skeleton className="h-10 flex-grow" />
                ) : (
                    <Input
                        readOnly
                        value={ipAddress} // Directly use ipAddress state
                        className="flex-grow text-lg font-mono bg-muted" // Style the input
                    />
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={copyToClipboard}
                  disabled={isLoading || !ipAddress || ipAddress === 'Error fetching IP'}
                  aria-label="Copy IP Address"
                >
                  <Copy className="w-5 h-5" />
                </Button>
              </div>
              <Button
                onClick={fetchIp}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Checking...' : 'Re-check IP'}
              </Button>
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
