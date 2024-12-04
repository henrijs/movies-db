This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

Stop development server and do:

```bash
npm run e2e:headless
```
or

```bash
npm run component:headless
```

## Architecture

Search form just updates query. Pager takes page count from search results and current page from query. Movie search page takes query (title and page) and server action fetches data from API. Card list and Card components show list and link to movie detail page, that is rendered on dynamic route.

## Challenges

Couple of times I went wrong directions, tried compleatly unmanaged search form, but went with (little bit) managed form, created separate server action for fetching total count for query, but adjusted one for search. Theming libraries were not behaving, NextUI threw some error I did not have time to deal with and Mantine immediatly complained about components being server components, so I went with CSS only solution daisyUI. Also, it turns out there are quite many movies with "undefined" in their titles.