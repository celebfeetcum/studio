'use client'; // Add this directive

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Vault } from 'lucide-react'; // Changed icon from Shield to Vault
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"; // Import ShadCN navigation
import { cn } from '@/lib/utils';


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <Vault className="h-6 w-6 text-primary" /> {/* Changed icon */}
          <span className="font-bold inline-block">MobileSecurity.site Hub</span> {/* Updated text */}
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
             <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50")}>
                     Home
                  </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/apple" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50")}>
                  Apple
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/android" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50")}>
                  Android
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <Link href="/titanium" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50")}>
                  Titanium
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

         {/* Optional: Add a CTA button if needed */}
         {/* <Button variant="secondary" size="sm">Get Started</Button> */}
      </div>
    </header>
  );
};

export default Header;
