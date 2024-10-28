import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div>
      <h1>GED-PROJETA</h1>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VH</AvatarFallback>
      </Avatar>
      <Button>Acesso de usuarios</Button>
      <Button>Envio</Button>
    </div>
  );
}
