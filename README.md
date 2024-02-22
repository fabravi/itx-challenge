# Drag & Drop Editor Challenge

For the time constraints I set, it was created with the mindset of a spike, but with some extra styling and care for the UI. I created an extra `products` page to give it a little context on how I imagine functionality of the challenge could be and to justify it receiving ids via query string. I used `react-beautiful-dnd` for the drag and drop functionality, which was the option that would allow me to match the requirements faster.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the mocks server:

```bash
npm run mocks
```

And then the app with:

```bash
npm run dev
```

Open [http://localhost:3000/products](http://localhost:3000/products) to see the products page added for context.
[http://localhost:3000/editor](http://localhost:3000/editor) to see the editor or navigate directly following the instructions on the products page.

## Tests

```bash
npm run test
```

## UI Library

```bash
npm run storybook
```

## Known Issues

- `react-beautiful-dnd` doesn't provide support for RTL alignment, the items misplace for a sec when dropping to a row with a right-aligned template.
- `react-beautiful-dnd` doesn't work well out of the box with css scaling. I had to find a workaround for the zoom feature.

## Spike Conclusions

To make `react-beautiful-dnd` match the requirements without UX issues, there's maybe the possibility to work on a fork that supports RTL alignment. Otherwise, I would keep exploring options like `react-dnd` or even the browser's drag & drop api to have complete control, if time constraints allow it.
