import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Props {}

const Rightbar = async ({}: Props) => {
  return (
    <div className="space-y-4">
      <Card className="gradient from-slate-600 to-slate-700 shadow-lg">
        <CardContent>
          <div className="relative h-full pt-4">
            <Image
              src="/rocketman.png"
              alt="rocketman"
              width={200}
              height={200}
              className="object-contain absolute bottom-0 right-0 w-[90%] h-auto opacity-50"
            />

            <div className="space-y-4 relative">
              <h3 className="font-bold leading-tight">
                Abracadabra Nwuifwe Wewef
              </h3>
              <p className="text-sm">
                Eveniet ante atque hendrerit, ipsam dicta, magna, deleniti
                vehicula excepturi aspernatur nam tempus vivamus. Cras vitae
                dictum dapibus!.
              </p>
              <Button>Watch</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rightbar;
