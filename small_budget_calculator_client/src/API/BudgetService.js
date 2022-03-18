import axios from 'axios';

export default class BudgetService {
    static async getById(id) {
        const response = await axios.get('http://127.0.0.1:3000/budgets/' + id)
        return response;
    }
}

 