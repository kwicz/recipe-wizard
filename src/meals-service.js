
export class MealsService {
  constructor(query) {
    this.name;
    this.ingredients = [];
    this.parameters = [];
    this.calories = 0;
    this.apiKey = "c8d75103d8973f69bf5313e9d40f1907";
    this.apiID = "063c9307";
    this.query = query
  }

  async getMealByQuery() {
    // The API call is business logic.
    let response = await fetch(`https://api.edamam.com/search?q=${this.query}&app_id=${this.apiID}&app_key=${this.apiKey}&from=0&to=12`);
    let jsonifiedResponse = await response.json();
    // The getElements method is UI logic so it will need to be separated from the business logic.  
    return jsonifiedResponse;
  }

}