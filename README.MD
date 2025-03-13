# Dual Language Quine 
## JS => C# => JS


### Basic Example of JS Quine

``` 
function quine() {
  console.log(quine.toString() + " quine();");
}
quine();
```

## index.js output: 
``` 
using System;
class Program {
    static void Main() {
        string jsCode = @"function DoubleQuine() {
    let csCode = `using System;
    class Program {
        static void Main() {
            string jsCode = @\\""function DoubleQuine() {\\\\n    let csCode = \\\\\\""..."";
            console.log(csCode.replace(/\\\\/g, """"\\\\\\"").replace(/""/g, '\\\\\\""'));
        }
    }`;
    console.log(csCode);
}";
        Console.WriteLine(jsCode);
    }
}}
```

## C# code output : 
```
function DoubleQuine() {
    let csCode = `using System;
    class Program {
        static void Main() {
            string jsCode = @\\"function DoubleQuine() {\\\\n    let csCode = \\\\\\"...";
            console.log(csCode.replace(/\\\\/g, ""\\\\\\").replace(/"/g, '\\\\\\"'));
        }
    }`;
    console.log(csCode);
}}
```