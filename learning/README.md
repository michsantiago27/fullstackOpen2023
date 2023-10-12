# FullStackOpen2023 - Santiago Antón
This README file will enlist all finding done during the FullStackOpen2023 course for Santiago Antón

>💡 Findings are grouped by the type of file that was being used when the finding was made.

[How to format README.md files](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)

## Content

[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- accumulator arg can be named differently but must be the first argument. All args should respect the order.
- If no return is specified (which would happen if the function had 1 line, next iterations won't know what accumulator's value is)

