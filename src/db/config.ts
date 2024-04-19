import { defineDb, defineTable, column } from 'astro:db';

const Participants = defineTable({
    columns: {
        id: column.number( { primaryKey: true} ),
        name: column.text(),
        xmas: column.text(),
        days: column.json({ optional: true}),
        img: column.text(),
        event: column.number()
    }
})

export default defineDb({
    tables: {
        Participants
    }
})