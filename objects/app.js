// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();
// Factory functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
    // draw: function () {
    //   console.log("draw");
    // },
  };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);
