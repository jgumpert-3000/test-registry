"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Home() {
  const [brand, setBrand] = useState("");

  return (
    <div className={cn("font-sans", brand)}>
      <main className="p-16">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-3xl font-bold">My Design System</h1>
          <div className="flex gap-2 ml-8">
            <button onClick={() => setBrand("")} className="px-4 py-2 border rounded text-sm font-medium">Telekom</button>
            <button onClick={() => setBrand("brand-bmw")} className="px-4 py-2 border rounded text-sm font-medium">BMW</button>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Startseite</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Tarife</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Kontakt</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Button</h2>
          <div className="flex gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <div className="flex gap-4 max-w-md">
            <Input placeholder="E-Mail Adresse" />
            <Button>Absenden</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Card</h2>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Tarif Magenta S</CardTitle>
              <CardDescription>Ideal für den Alltag</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Unbegrenzte Telefonie & SMS, 5 GB Datenvolumen.</p>
            </CardContent>
            <CardFooter>
              <Button>Jetzt buchen</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}