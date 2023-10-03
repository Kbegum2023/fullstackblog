import Image from 'next/image';
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <h1 className="text-red-800">hellow world</h1>
      <Button className="bg-red-800" variant="outline">Button</Button>
    </div>
  );
}
