import { Loader2 } from "lucide-react";

function IsLoadingShow(){
return (
<div className="flex min-h-[240px] items-center justify-center">
<div className="flex flex-col items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
<Loader2
size={18}
className="animate-spin text-blue-900"
/>
</div>

<p className="text-[11px] font-medium text-slate-500">
Loading...
</p>
</div>
</div>
)
}

export default IsLoadingShow


import type { UseFormRegisterReturn } from "react-hook-form";

interface InputTextProps {
  register: UseFormRegisterReturn;
}

export function InputText({ register }: InputTextProps) {
  return (
    <input
      {...register}
      type="text"
      placeholder="Enter deliverable..."
      className="h-9 w-full rounded border-b  px-3 text-xs outline-none focus:border-blue-800 focus:ring-blue-100"
    />
  );
}
