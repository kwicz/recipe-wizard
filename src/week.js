export class Week {
  constructor(response, print) {
    this.printObj = print;
    this.response = response;
  }

  makeElements() {
    let printObj = [];
    this.response.hits.forEach(function(hit) {
      const { label, image, source, url, ingredientLines } = hit.recipe;
      const tempObj = {
        label,
        image,
        source,
        url,
        ingredientLines
      };
      printObj.push(tempObj);
    });
    console.log(printObj);
    // searchObj = printObj;
    printObj.arr = printObj;
  }
}
