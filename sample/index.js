import { Body } from "../src/body";
import { Grid4Fluid, GridItem } from "../src/grid";
import { Card, CardHeader, CardBody, CardFooter } from "../src/card";

function newCard() {
    return new Card(new CardHeader(), null, new CardBody("Card body title", "Card body text"), new CardFooter(), null);
}

new Body()
    .appendChild(new Grid4Fluid(3).row
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard()))
        .add(new GridItem(newCard())));