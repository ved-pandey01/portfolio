"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useRef } from "react";

type Props = { src: string; alt: string; width: number; height: number; sizes: string };

// Click (or press Enter) to view the screenshot full size. Esc, the close button
// or a click on the backdrop closes it. Uses the native <dialog> for focus handling.
export function ZoomableImage({ src, alt, width, height, sizes }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="group relative block w-full cursor-zoom-in"
        aria-label={`Enlarge screenshot: ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className="h-auto w-full" />
        <span
          aria-hidden
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-line bg-bg/80 px-2.5 py-1 text-xs text-body opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <Maximize2 size={12} /> Zoom
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        className="m-auto max-h-[92vh] max-w-[min(96vw,1600px)] overflow-visible bg-transparent p-0 backdrop:bg-bg/90"
      >
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="96vw"
            className="h-auto max-h-[88vh] w-auto rounded-xl border border-line object-contain"
          />
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="absolute -top-3 -right-3 grid size-9 place-items-center rounded-full border border-line bg-raised text-ink hover:border-accent"
            aria-label="Close"
          >
            <X size={16} aria-hidden />
          </button>
        </div>
      </dialog>
    </>
  );
}
