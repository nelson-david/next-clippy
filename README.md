# Next Clippy 📋

Next Clippy is a lightweight React hook that enables seamless text copying functionality in Next.js applications.

<pre>


</pre>

## ✨ Features

-   📋 Copy text to the clipboard effortlessly.

-   🔄 Provides a `copied` state to track the copying status.

-   ⚡ Optimized for Next.js and modern React development.
<pre>

</pre>
## 📦 Installation

Use npm or yarn to install:

```sh

npm  install  next-clippy

```

or

```sh

yarn  add  next-clippy

```

<pre>


</pre>

## 🛠 Usage

Import and use the `useClipboard` hook in your component:

```tsx
import { useClipboard } from "next-clippy";

export default function CopyComponent() {
    const { copy, copied } = useClipboard();

    return (
        <div>
            <button onClick={() => copy("Hello, World!")}>Copy Text</button>
            {copied && <span>Copied! ✅</span>}
        </div>
    );
}
```

<pre>


</pre>

## 📜 API

### `useClipboard()`

Returns an object containing:

-   📌 `copy(text: string)`: Copies the provided text to the clipboard.

-   ✅ `copied: boolean`: Indicates whether the text was recently copied.
<pre>

</pre>
## 🧪 Running Tests

Ensure `jest` and `@testing-library/react-hooks` are installed. Then run:

```sh

npm  test

```

<pre>


</pre>

## 🤝 Contributing

Contributions are welcome! 🎉 Feel free to fork the repository and submit a pull request.

<pre>


</pre>

## 📄 License

This project is licensed under the MIT License. 📝
