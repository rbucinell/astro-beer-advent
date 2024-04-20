// This file is generated by Astro DB
declare module 'astro:db' {
	export const Participants: import("@astrojs/db/runtime").Table<
		"Participants",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Participants","primaryKey":false,"optional":false}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Participants","primaryKey":false,"optional":false}},"xmas":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"xmas","collection":"Participants","primaryKey":false,"optional":false}},"days":{"type":"json","schema":{"optional":true,"unique":false,"deprecated":false,"name":"days","collection":"Participants"}},"img":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"img","collection":"Participants","primaryKey":false,"optional":false}},"event":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"event","collection":"Participants","primaryKey":false,"optional":false}},"isAdmin":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"isAdmin","collection":"Participants","default":false}}}
	>;
}
