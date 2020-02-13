export class Print {
  constructor() {
    this.arr = [];
  }

  printMealsQuery() {
    // let printTo = $(".search--results");
    let printString = "";
    console.log(this.arr);
    this.arr.forEach(function(item, index) {
      printString += `<div class="col-md-3 meal-card card"><a href= "${item.url}" target="_blank">
      <h3>${item.label}</h3><div class="img-box">
      <img src="${item.image}"></div></a>
        <div class="day-btns">
          <button class="btn btn-success btn-sm" name="sunday" value="${index}">S</button>
          <button class="btn btn-success btn-sm" name="monday" value="${index}">M</button>
          <button class="btn btn-success btn-sm" name="tuesday" value="${index}">T</button>
          <button class="btn btn-success btn-sm" name="wednesday" value="${index}">W</button>
          <button class="btn btn-success btn-sm" name="thursday" value="${index}">R</button>
          <button class="btn btn-success btn-sm" name="friday" value="${index}">F</button>
          <button class="btn btn-success btn-sm" name="saturday" value="${index}">S</button>
        </div>
      </div>`;
    });
    return printString;
  }

  makeElements(response) {
    let printObj = [];
    response.hits.forEach(function(hit) {
      const { label, image, source, url, ingredients } = hit.recipe;
      const tempObj = {
        label,
        image,
        source,
        url,
        ingredients
      };
      printObj.push(tempObj);
    });
    console.log(printObj);
    this.arr = printObj;
  }
}
