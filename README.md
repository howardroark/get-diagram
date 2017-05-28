> Note: Since GitHub [migrated](https://githubengineering.com/a-formal-spec-for-github-markdown/) from the original human friendly interpretation of John Gruber's Markdown to the highly specific CommonMark variation this no longer works in it's ideal form.

# get-diagram

A simple way to embed diagrams in markdown.

```
$ npm install
$ npm start
```

## How it works

```
![](https://get-diagram.herokuapp.com/sequence?
  Andrew->China: Says Hello;
  Note right of China: China thinks about it;
  China-->Andrew: How are you?;
  Andrew->>China: I am good thanks!;
)
```

[Interactive funcational example of the above](https://howardroark.github.io/get-diagram/)

Inspired by [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) and [gravizo](http://www.gravizo.com/)
