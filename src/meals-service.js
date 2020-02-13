
export class MealsService {
  constructor(query) {
    this.name;
    this.ingredients = [];
    this.parameters = [];
    this.calories = 0;
    this.query = query;
  }

  async getMealByQuery() {
    try {
      // The API call is business logic.
      let response = await fetch(`https://api.edamam.com/search?q=${this.query}&app_id=${process.env.API_KEY}&app_key=${process.env.API_ID}&from=0&to=12`);
      if (response.status != 200) {
        return false;
      }
      let jsonifiedResponse = await response.json();
      // The getElements method is UI logic so it will need to be separated from the business logic.
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}