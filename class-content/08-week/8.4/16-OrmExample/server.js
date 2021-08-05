var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");
// orm.selectWhere("pets", "animal_name", "Marco");
// orm.selectWhere("pets", "animal_name", "Tobias");
// orm.selectWhere("pets", "animal_name", "Jake");

//Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

orm.selectAndNewOrder("animal_name", "pets", "price", false);
