# get-sequence-diagrams

A simple way to embed sequence diagrams in markdown.

```
$ npm install
$ npm start
```

## How it works

```
![](http://localhost:3000?[
  "Andrew->China: Says Hello", 
  "Note right of China: China thinks about it", 
  "China-->Andrew: How are you?", 
  "Andrew->>China: I am good thanks!"
])
```

[http://localhost:3000?[
  "Andrew->China: Says Hello", 
  "Note right of China: China thinks about it", 
  "China-->Andrew: How are you?", 
  "Andrew->>China: I am good thanks!"
]](http://localhost:3000?["Andrew->China:%20Says%20Hello","Note%20right%20of%20China:%20China%20thinks%20about%20it","China-->Andrew:%20How%20are%20you?","Andrew->>China:%20I%20am%20good%20thanks!"])

Inspired by [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/)
