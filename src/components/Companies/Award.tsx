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
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[220px] h-[260px] bg-white shadow-md rounded-xl flex flex-col justify-between items-center p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="w-full h-[140px] flex items-center justify-center">
            <Image
              src={partner.logoUrl}
              alt={partner.name}
              width={180}
              height={120}
              className="object-contain max-h-full"
            />
          </div>
          <p className="mt-4 text-base font-semibold text-center text-gray-800 line-clamp-2">
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

        <div className="relative w-full h-[300px] md:h-[45vh]">
          <Image
            src={partner.logoUrl}
            alt={partner.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <DialogFooter>
          {/* Optional action buttons */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
