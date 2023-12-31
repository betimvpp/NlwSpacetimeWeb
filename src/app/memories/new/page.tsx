import { NewMemoryForm } from "@/Components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
  return(
    <div className="flex-1 flex-col flex gap-4 p-16">
      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
        <ChevronLeft className="h-4 w-4"/>
        Voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}