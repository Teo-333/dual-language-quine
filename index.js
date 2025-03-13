function DoubleQuine() {
  let jsCode = `function DoubleQuine() {
    let csCode = \`using System;
    class Program {
        static void Main() {
            string jsCode = @\\"function DoubleQuine() {\\\\n    let csCode = \\\\\\\"...\";
            console.log(csCode.replace(/\\\\/g, ""\\\\\\").replace(/"/g, '\\\\\\"'));
        }
    }\`;
    console.log(csCode);
}`;

  let csCode = `using System;
class Program {
    static void Main() {
        string jsCode = @"${jsCode.replace(/\\/g, "\\\\").replace(/"/g, '""')}";
        Console.WriteLine(jsCode);
    }
}`;

  console.log(csCode);
}

DoubleQuine();
