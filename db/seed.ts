import {db, Participants } from 'astro:db';

export default async function() {

    const response = await fetch('https://randomuser.me/api?results=12&inc=name,id,picture&noinfo');
    const json = await response.json();
    
    json['results'][ Math.floor(json.results.length / 2) ]['isAdmin'] = true;
    
    await db.insert(Participants).values(json['results'].map( p => {
        return {
            id: Math.random() * Number.MAX_VALUE,
            name: p.name.first,
            img: p.picture.thumbnail,
            xmas: p.name.last,
            event: Math.random() * Number.MAX_VALUE,
            days: JSON.stringify([
                (Math.random() * 24).toFixed(0),
                (Math.random() * 24).toFixed(0)
            ]),
            isAdmin: p.isAdmin ?? false
        }
    }))
}

// import {db, Participants } from 'astro:db';

// export default async function() {

//     const response = await fetch('https://randomuser.me/api?results=12&inc=name,id,picture&noinfo');
//     const json = await response.json();

//     json['results'][ Math.floor(json.results.length / 2) ]['isAdmin'] = true;
//     const mapped = json['results'].map( p => {
//         return {
//             id: Math.random() * Number.MAX_VALUE,
//             name: p.name.first,
//             img: p.picture.thumbnail,
//             xmas: p.name.last,
//             event: Math.random() * Number.MAX_VALUE,
//             days: JSON.stringify([
//                 (Math.random() * 24).toFixed(0),
//                 (Math.random() * 24).toFixed(0)
//             ])//,
//            // groupAdmin: false
//         }
//     });
//     await db.insert(Participants).values(mapped)
// }