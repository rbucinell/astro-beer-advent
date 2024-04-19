import { defineDb, defineTable, column } from 'astro:db';

const Participants = defineTable({
    columns: {
        id: column.number( {unique: false} ),// { primaryKey: true} ),
        name: column.text(),
        xmas: column.text(),
        days: column.json({ optional: true}),
        img: column.text(),
        event: column.number({unique: false})
    }
})

export default defineDb({
    tables: {
        Participants
    }
})