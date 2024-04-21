import { defineDb, defineTable, column } from 'astro:db';

const Participants = defineTable({
    columns: {
        id: column.number( {unique: false} ),// { primaryKey: true} ),
        name: column.text(),
        xmas: column.text(),
        days: column.json({ optional: true}),
        img: column.text(),
        event: column.number({unique: false}),
        isAdmin: column.boolean( { default: false })
    }
});

const Beers = defineTable({
    columns:{
        id: column.number( {unique: false} ),// { primaryKey: true} ),
        beer: column.text(),
        brewer: column.text(),
        type: column.text(),
        year: column.number(),
        day: column.number(),
        abv: column.number(),
        person: column.text(),
        beeradvocate: column.text(),
        untappd: column.text(),
        state: column.text(),
    }
});

export default defineDb({
    tables: {
        Participants, Beers
    }
})