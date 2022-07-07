import { Body } from "../src/body";
import { GridItem, GridFluid } from "../src/grid";
import { Card, CardHeader, CardBody, CardFooter } from "../src/card";

function newCard() {
    return new Card(new CardHeader(), null, new CardBody("Card body title", "Card body text"), new CardFooter(), null);
}

new Body()
    .appendChild(new GridFluid(3, 1, 2, 3, 4, 5, 6).row
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard())));