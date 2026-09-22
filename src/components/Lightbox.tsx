import { useEffect, useRef } from "react";
import { Icon } from "./Icon";
import { asset } from "../lib/asset";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

type Props = {
  /** The image to show, or null when closed */
  image: LightboxImage | null;
  onClose: () => void;
};

/**
 * Full-size image viewer.
 *
 * Built on a native <dialog> for focus trapping and page inertness, but every
 * way of closing it calls `onClose` directly rather than going through the
 * element's own `close` event — that event proved unreliable, and if it were
 * missed the scroll lock below would never be released, leaving the page
 * stuck. React state stays the single source of truth; the effect only
 * mirrors it onto the element.
 */
export function Lightbox({ image, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  // Open and close the dialog in step with the `image` prop.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (image && !el.open) el.showModal();
    else if (!image && el.open) el.close();
  }, [image]);

  // Escape. <dialog> is supposed to handle this itself and fire `cancel`, but
  // not every engine does — some never fire it, leaving the viewer stuck open
  // with no keyboard way out. Handling the key directly costs little and
  // doesn't depend on that.
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [image, onClose]);

  // showModal() doesn't reliably stop the page behind from scrolling.
  // Keyed on `image`, so closing by any route restores scrolling.
  useEffect(() => {
    if (!image) return;

    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [image]);

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={image ? `${image.alt} — full size` : undefined}
      // Escape. preventDefault stops the browser closing the element behind
      // React's back, which would desync the two.
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // Clicks land on the dialog itself only when they hit the backdrop.
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {image ? (
        <figure className="lightbox-figure">
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close image"
          >
            <Icon name="close" />
          </button>

          <img
            src={asset(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />

          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ) : null}
    </dialog>
  );
}
