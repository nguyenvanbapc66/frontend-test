# Frontend Test - What technologies we are using at DC

Versions in other languages: [中文](./README-ZH.md)

We want you to develop a search box component to search what technologies we are using at DC, so let's get started!

## Materials

- The completed page should accurately represent the design templates which can be found here: [Look into the design file on Figma](https://www.figma.com/file/mcHQ3hMUG0fmgWVh6QPUlv/Frontend-test-What-technologies-we-are-using-at-DC?node-id=71%3A377). *You may need to create a free account to be able to inspect the elements precisely*

- The data should be retrieved from the following api: [`GET -> https://frontend-test-api.digitalcreative.cn/?search=flutter`](https://frontend-test-api.digitalcreative.cn/?search=flutter)

- The correct search box state should be shown accordingly with these rules:
  - [**Successful request without any result**](./assets/examples/has-no-result.png): When the api response return no results.
  - [**Successful request with results**](./assets/examples/has-results.png): When the api response return bunch of results.
  - [**Pending request**](./assets/examples/searching.png): When the request hasn't yet got a response.
  - [**Error while searching**](./assets/examples/error-while-searching.png): When there is an error responded from server or the requested time out.

## Rules

- The application has to be developed using `Vue`.

- Split your code into logical reusable components. We want to see how you isolate your components.

- You have to create at least 3 universal components, which are

  - Search bar component

    ![Search bar](./assets/examples/component-search-bar.png)

  - Tag component

    ![Tag](./assets/examples/component-tag.png)

  - Result item component

    ![Result item](./assets/examples/component-result-item.png)
    
- For styling, you can use whatever you want. We use Sass at DC, but feel free to use what you're more comfortable with.

- Add a `README.md` file with the decisions you took, any information you want to share with us (possible improvements, for example), and the installation instructions.

## What we will be looking for

- A nice architecture. Code is read more than it is written, so the easier it gets to follow your code, folder structure, etc... the better.
- Your UI composition. We'll check how you connect the different components of the application between them and how the data/state flows.
- Consistency and clean code.

## Bonus points

- Use Vue version 3
- Use Typescript
- Pixel perfect UI implementation
- Modern build tools
- CSS animations / Transitions
- ...
