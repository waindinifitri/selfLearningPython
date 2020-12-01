/**
 * pseudocode:
 * 1. Point Of Sales (POS) apps have 3 models : items, buyers, and transaction
 * 2. Items properties : name, type ["hats", "tops", "shorts"], prices (depends on buyers);
 * 3. Buyers properties : name, type ["VIP", "regular", "wholesale"];
 * 4. Transaction properties : item, qty, buyer;
 * 5. Price of item in regular buyers is a must (actualPrice), if no then throw an error and cannot count sum;
 * 6. If no speciel price of items (ex: no discount) => the regular price is used (actualPrice);
 * 7. Items & Buyer names are unique (no duplicated);
 * 8. Make a function to validate on each item and buyer whenever do the input (dont duplicated), if yes go to error and cant sum;
 * 9. output (method) : Total Number of transactions, Best Seller of (Item and category), revenue of (category and by day), Most spender buyer;
 * 10. totalNumberTransaction = total input (transaction);
 * 11. Best Seller of Item = mostFrequentElement of Item;
 * 12. Best Seller Category/type = mostFrequentElement of type;
 * 13. Revenue = (totalTransaction)/type; 
 * 14. Revenue per day = (totalTransaction);
 * 15. Most spender buyer = Math.max[trasaction] => return to buyer who spend most spender;
 */
// import {Input} from './Input.ts'
class items {
    name: string = "";
    type: string = "hats" || "tops" || "shorts";
    prices: number; //depends on buyer
}

class buyers {
    name: string = "";
    type: string = "VIP" || "regular" || "wholesale";
    prices: number; //depends on buyer

    price() {
        if (this.type === "regular") {
            console.log(`The customer have an actualPrice!`)
        } else if (this.type === "VIP") {
            console.log(`The customer is a ${this.type}, they have a special offer! `)
        } else if (this.type === "wholesale") {
            console.log("Something went wrog!")
        }
    }
}

class transaction {
    item: string = "hats" || "tops" || "shorts";
    qty: number;
    buyer: string = "VIP" || "regular" || "wholesale";
}

// const totalNumberTransaction = () => {

// }