# Next Clipboard

Next Clipboard is a lightweight React hook that enables seamless text copying functionality in Next.js applications.

## Features

-   Copy text to the clipboard effortlessly.
-   Provides a `copied` state to track the copying status.
-   Optimized for Next.js and modern React development.

## Installation

Use npm or yarn to install:

```sh
npm install next-clipboard
```

or

```sh
yarn add next-clipboard
```

## Usage

Import and use the `useClipboard` hook in your component:

```tsx
import { useClipboard } from "next-clipboard";

export default function CopyComponent() {
    const { copy, copied } = useClipboard();

    return (
        <div>
            <button onClick={() => copy("Hello, World!")}>Copy Text</button>
            {copied && <span>Copied!</span>}
        </div>
    );
}
```

## API

### `useClipboard()`

Returns an object containing:

-   `copy(text: string)`: Copies the provided text to the clipboard.
-   `copied: boolean`: Indicates whether the text was recently copied.

## Running Tests

Ensure `jest` and `@testing-library/react-hooks` are installed. Then run:

```sh
npm test
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
