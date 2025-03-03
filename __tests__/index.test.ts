import { useClipboard } from "../src";
import { renderHook, act, waitFor } from "@testing-library/react";

// Mock the Clipboard API
Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
    },
});

test("copies text to clipboard", async () => {
    const { result } = renderHook(() => useClipboard());

    await act(async () => {
        await result.current.copy("Hello World");
    });

    await waitFor(() => expect(result.current.copied).toBe(true));
});
