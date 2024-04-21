import {Beers, db, Participants } from 'astro:db';

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

    await db.insert(Beers).values( {
         
            id: Math.random() * Number.MAX_VALUE,
            beer: "Spider Vice",
            brewer: "Spider Bite Beer Company",
            type: "American IPA",
            year: 2018,
            day: 2,
            abv: 5.9,
            person: "Bucinell",
            beeradvocate: "https://www.beeradvocate.com/beer/profile/27243/175767/",
            untappd: "https://untappd.com/b/spider-bite-beer-company-spider-vice/1106533",
            state: "something"
        }
    )
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