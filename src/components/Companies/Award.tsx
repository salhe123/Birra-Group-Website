import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Partner } from "@/types/partner.type";
import Image from "next/image";

export function Award({ partner }: { partner: Partner }) {
  if (!partner || !partner.logoUrl || !partner.name) {
    return null; // Return null if required partner data is missing
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full md:w-auto flex flex-col justify-center items-center cursor-pointer">
          <Image
            src={partner.logoUrl}
            alt={partner.name}
            width={200}
            height={150}
            className="max-w-[200px] h-auto object-contain rounded-lg"
          />
          <p className="mt-2 text-base font-semibold text-center">
            {partner.name}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="w-full md:w-[60vw]">
        <DialogHeader>
          <DialogTitle>Award and Certification</DialogTitle>
          <DialogDescription>
            <span className="capitalize">{partner.name}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4 relative w-full h-[300px] md:h-[45vh]">
          <Image
            src={partner.logoUrl}
            alt={partner.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <DialogFooter>
          {/* You can add buttons or actions here if needed */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
