
// const ShortestPath = () => {
//     function findShortestPath(current, target, visited = new Set()) {
//         if (current === target) {
//           return [current];
//         }
      
//         if (visited.has(current)) {
//           return []; // Avoid revisiting the same state
//         }
      
//         visited.add(current);
      
//         const addOne = findShortestPath(current + 1, target, visited);
//         const subtractOne = findShortestPath(current - 1, target, visited);
//         const multiplyByTwo = findShortestPath(current * 2, target, visited);
//         const divideByTwo = findShortestPath(current / 2, target, visited);
      
//         // Find the shortest path among the four options
//         const validPaths = [addOne, subtractOne, multiplyByTwo, divideByTwo].filter(path => path.length > 0);
//         return validPaths.reduce((shortestPath, path) => (path.length < shortestPath.length ? path : shortestPath), []);
//       }

//   return (
//     <div>
//       {findShortestPath(1,2)}
//     </div>
//   )
// }

// export default ShortestPath
