> Note: Since GitHub [migrated](https://githubengineering.com/a-formal-spec-for-github-markdown/) from the original interpretation of John Gruber's Markdown to the CommonMark spec this no longer works.  The new spec does not allow any whitespace to exist in a link.

# get-diagram

A simple way to embed diagrams in markdown.

```
![](https://get-diagram.herokuapp.com/sequence?
  Andrew->China: Says Hello;
  Note right of China: China thinks about it;
  China-->Andrew: How are you?;
  Andrew->>China: I am good thanks!;
)
```

**[Interactive demo](https://howardroark.github.io/get-diagram/)**

## Development

```
$ npm install
$ npm start
```

Inspired by [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) and [gravizo](http://www.gravizo.com/)
