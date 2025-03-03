import { useState } from "react";

type ClipboardOptions = {
    format?: "text" | "html" | "json" | "image";
    timeout?: number;
};

export function useClipboard(options: ClipboardOptions = {}) {
    const { format = "text", timeout = 2000 } = options;
    const [copied, setCopied] = useState(false);

    const copy = async (data: string | object | HTMLImageElement) => {
        try {
            let textToCopy = "";

            if (typeof data === "string") {
                textToCopy = data;
            } else if (typeof data === "object" && format === "json") {
                textToCopy = JSON.stringify(data, null, 2);
            } else if (data instanceof HTMLImageElement && format === "image") {
                const blob = await fetch(data.src).then((res) => res.blob());
                const clipboardItem = new ClipboardItem({ "image/png": blob });
                await navigator.clipboard.write([clipboardItem]);
                setCopied(true);
                return;
            } else {
                console.error("Unsupported format");
                return;
            }

            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);

            setTimeout(() => setCopied(false), timeout);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return { copy, copied };
}

export default useClipboard;
