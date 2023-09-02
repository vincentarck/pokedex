
# Pokedex
Assesment for [Nusameta](https://nusameta.io/).

### Finished Requirements

- Create your own interface. Cleaner is better. ✅
- Create your own API endpoint using Next.js route handlers for fetching data from the Pokémon API. You can implement this route handler as middleware to shield our backend (Pokémon) API from exposure to browsers. For example, create a route handler containing a function to fetch Pokémon details, and the exposed API endpoint path will be: `<your_app_host>/api/pokemon/<id>`. On the client side, you can then fetch data from this API endpoint. All of this should be done within a single Next.js app. Please refer to the reference links below.✅ 
- You can use any library to assist you with your assessment.✅

## What Are Nice to Have (Not Mandatory, but a Plus!)

- Implement Atomic Design principles. ❌
- Use React Query for client-side data fetching. ✅
- Create a "Liked Pokémon" feature, allowing users to like/unlike (not dislike) any Pokémon they choose. Create a new page for "Liked Pokémon." You can save the liked Pokémon list using any state management library like React Context, Redux, or MobX. (Note: It's a BIG plus!) ✅
- Implement semantic HTML and maintain a clean code structure. ✅
- Deploy your application to Vercel! Perhaps someone "important" would like to see it live. ✅

Built with ❤️🔥 by Vincent
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Performance Analyze
#### Main Page
I assume performance impacted because i dont fit intersection observer with screen, so it makes fetch bout 2 times bcs last card is visible in screen 
Or i have to transform data to get image and url pokemon


![image](https://github.com/vincentarck/pokedex/assets/73167671/36836c0f-14a6-42b3-9e41-975ca458fae2)

### Pokemon Index
![image](https://github.com/vincentarck/pokedex/assets/73167671/19978721-56a6-432e-8b1f-bf3f5e71c0b6)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> 8caeded (feat: Nextjs 13 app setup)
