# Frontend Test - What technologies we are using at DC

Versions in other languages: [中文](./README-ZH.md)

We want you to develop a search box component to search what technologies we are using at DC, so let's get started!

## Materials

- The completed page should accurately represent the design templates which can be found here: [Look into the design file on Figma](https://www.figma.com/file/mcHQ3hMUG0fmgWVh6QPUlv/Frontend-test-What-technologies-we-are-using-at-DC?node-id=71%3A377). By the way you may need to create your own account to get the precise style anddimension data on it (The CSS style in the right panel of the Figma is for reference only to help you to get the precise data, you are the boss to decide how to ultimately achieve and improve the whole UI).
- The data should be retrieved from the following api: [`GET -> https://frontend-test-api.digitalcreative.cn/?query=flutter`](https://frontend-test-api.digitalcreative.cn/?query=flutter)
- The correct search box state should be shown accordingly with these rules:
  - [**User searched but has no result**](./assets/examples/no-result.png): When the api response return no results.
  - [**User searched and has results**](./assets/examples/has-results.png): When the api response return bunch of results.
  - [**Searching is in process**](./assets/examples/searching.png): When the api is in the process of the response.
    

## Rules

- The application has to be developed using `Vue`.
- Split your code into logical reusable components. We want to see how you isolate your components.
- You have to create at least 3 universal components, which are [search bar component](./assets/examples/component-search-bar.png), [the tag component](./assets/examples/component-search-bar.png) and [the result item component](./assets/examples/component-result-item.png)
- For styling, you can use whatever you want. We use Sass at DC, but feel free to use what you're more comfortable with.
- Add a `README.md` file with the decisions you took, any information you want to share with us (possible improvements, for example), and the installation instructions.

## What we will be looking for

- A nice architecture. Code is read more than it is written, so the easier it gets to follow your code, folder structure, etc... the better.
- Your UI composition. We'll check how you connect the different components of the application between them and how the data/state flows.
- Nice and clean code.

## Bonus points

- Use Vue version 3
- Use Typescript
- Pixel perfect UI implementaion
- Modern build tools
- Add animations
- ...
