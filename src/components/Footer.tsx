import Logo from "./../app/images/logo.png";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
     <Image
      src={Logo}
      width={210}
      height={210}
      alt="Perseus Logo"
    />
  <span className="sr-only">Perseus.AI Home Page</span>
</Link>
    <nav>
        <ul>
            {settings.data.navigation.map((item) =>(
                <li key={item.label}>
                    <PrismicNextLink field={item.link}>
                         {item.label}
                    </PrismicNextLink>
                </li>
            ) )}
        </ul>
    </nav>
    </footer>
  )
}
