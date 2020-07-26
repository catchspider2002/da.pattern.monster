// export let scale = 2,
//   color2HSL = "hsl(0, 0%, 0%)",
//   strokeSize = 2;

// let svgFile =
//   "<svg xmlns='http://www.w3.org/2000/svg' width='" +
//   (scale * 20 + 20) +
//   "' height='" +
//   (scale * 20 + 20) +
//   "' viewBox='0 0 10.583 10.583'><path d='M2.46 0L0 2.458v.375L2.835 0h-.376zm5.29 0l2.833 2.833v-.375L8.125 0h-.376zM5.291 2.458L0 7.75v.375l5.292-5.29 5.29 5.29h.001V7.75L5.292 2.458zm0 5.293l-2.833 2.832h.374l2.459-2.458 2.458 2.458h.374L5.292 7.751z' fill-rule='evenodd' fill='" +
//   color2HSL +
//   "' stroke='" +
//   color2HSL +
//   "' stroke-width='" +
//   Math.round(strokeSize * 20) / 100 +
//   "'/><path d='M2.458 0l5.29 5.292-5.29 5.29v.001h.375l5.292-5.291L2.833 0h-.375zM7.75 0l2.833 2.835v-.376L8.125 0H7.75zM0 2.46v.373l2.458 2.459L0 7.75v.374l2.832-2.832L0 2.459zm10.583 5.29L7.75 10.582h.375l2.458-2.458v-.376z' fill='" +
//   color2HSL +
//   "' fill-rule='evenodd' stroke='" +
//   color2HSL +
//   "' stroke-width='" +
//   Math.round(strokeSize * 20) / 100 +
//   "'/></svg>";
// export default svgFile;

// export default function (scale = 2, color2HSL = "hsl(0, 0%, 0%)", strokeSize = 2) {
//   return (
//     "<svg xmlns='http://www.w3.org/2000/svg' width='" +
//     (scale * 20 + 20) +
//     "' height='" +
//     (scale * 20 + 20) +
//     "' viewBox='0 0 10.583 10.583'><path d='M2.46 0L0 2.458v.375L2.835 0h-.376zm5.29 0l2.833 2.833v-.375L8.125 0h-.376zM5.291 2.458L0 7.75v.375l5.292-5.29 5.29 5.29h.001V7.75L5.292 2.458zm0 5.293l-2.833 2.832h.374l2.459-2.458 2.458 2.458h.374L5.292 7.751z' fill-rule='evenodd' fill='" +
//     color2HSL +
//     "' stroke='" +
//     color2HSL +
//     "' stroke-width='" +
//     Math.round(strokeSize * 20) / 100 +
//     "'/><path d='M2.458 0l5.29 5.292-5.29 5.29v.001h.375l5.292-5.291L2.833 0h-.375zM7.75 0l2.833 2.835v-.376L8.125 0H7.75zM0 2.46v.373l2.458 2.459L0 7.75v.374l2.832-2.832L0 2.459zm10.583 5.29L7.75 10.582h.375l2.458-2.458v-.376z' fill='" +
//     color2HSL +
//     "' fill-rule='evenodd' stroke='" +
//     color2HSL +
//     "' stroke-width='" +
//     Math.round(strokeSize * 20) / 100 +
//     "'/></svg>"
//   );
// }
export default function (scale = 2, strokeSize = 2, color2HSL = "hsl(0, 0%, 0%)") {
  return (
    "<svg xmlns='http://www.w3.org/2000/svg' width='" +
    (scale * 20 + 20) +
    "' height='" +
    (scale * 20 + 20) +
    "' viewBox='0 0 10.583 10.583'><path d='M2.46 0L0 2.458v.375L2.835 0h-.376zm5.29 0l2.833 2.833v-.375L8.125 0h-.376zM5.291 2.458L0 7.75v.375l5.292-5.29 5.29 5.29h.001V7.75L5.292 2.458zm0 5.293l-2.833 2.832h.374l2.459-2.458 2.458 2.458h.374L5.292 7.751z' fill-rule='evenodd' fill='" +
    color2HSL +
    "' stroke='" +
    color2HSL +
    "' stroke-width='" +
    Math.round(strokeSize * 20) / 100 +
    "'/><path d='M2.458 0l5.29 5.292-5.29 5.29v.001h.375l5.292-5.291L2.833 0h-.375zM7.75 0l2.833 2.835v-.376L8.125 0H7.75zM0 2.46v.373l2.458 2.459L0 7.75v.374l2.832-2.832L0 2.459zm10.583 5.29L7.75 10.582h.375l2.458-2.458v-.376z' fill='" +
    color2HSL +
    "' fill-rule='evenodd' stroke='" +
    color2HSL +
    "' stroke-width='" +
    Math.round(strokeSize * 20) / 100 +
    "'/></svg>"
  );
}

// export default (Param1, Param2) => class MyClass {
//     constructor(){
//         console.log( Param1 );
//     }
// }