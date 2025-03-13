# Dual Language Quine 
## JS => C# => JS


### Basic Example of JS Quine

``` 
function quine() {
  console.log(quine.toString() + " quine();");
}
quine();
```