var actions = [
    {
        key: "ayder-oberj",
        name: "Ayder & Oberj",
        type: "Stay",
        displayDates: ["2013-07-20"],
        filterDates: [ { start: "2013-07-20T00:00", end: "2013-07-21T11:00" } ],
        location: { lat: 40.95205, lon: 41.10938 }
    },
    {
        key: "osmanli-alabalik",
        name: "Osmanlı Alabalık",
        type: "Eat",
        displayDates: ["2013-07-21"],
        filterDates: [ { start: "2013-07-21T11:00", end: "2013-07-21T14:00" } ],
        location: { lat: 41.122675, lon: 41.039939 }
    },
    {
        key: "camlihemsin-komati",
        name: "Çamlıhemşin -> Komati",
        type: "Travel",
        displayDates: ["2013-07-21"],
        filterDates: [ { start: "2013-07-21T14:00", end: "2013-07-21T18:30" } ],
        path: paths["camlihemsin-komati"]
    },
    {
        key: "komati",
        name: "Komati",
        type: "Stay",
        displayDates: ["2013-07-21", "2013-07-22"],
        filterDates: [ { start: "2013-07-21T18:30", end: "2013-07-22T09:00" } ],
        location: { lat: 41.030008, lon: 41.214519 }
    },
    {
        key: "komati-yuruyus",
        name: "Komati Yürüyüşü",
        type: "Travel",
        displayDates: ["2013-07-21"],
        filterDates: [ { start: "2013-07-22T09:00", end: "2013-07-22T13:30" }, { start: "2013-07-22T15:30", end: "2013-07-22T18:30" } ],
        path: paths["komati-yuruyus"]
    },
    {
        key: "komati-yuruyusu-yayla-evi",
        name: "Komati Yürüyüşü Yayla Evi",
        type: "Eat",
        displayDates: ["2013-07-21"],
        filterDates: [ { start: "2013-07-22T13:30", end: "2013-07-22T15:30" } ],
        location: { lat: 41.001142, lon: 41.252736 }
    },
    {
        key: "komati-didingola",
        name: "Komati -> Didingola",
        type: "Travel",
        displayDates: ["2013-07-23"],
        filterDates: [ { start: "2013-07-23T09:00", end: "2013-07-23T14:00" } ],
        path: paths["komati-didingola"]
    },
    {
        key: "didingola",
        name: "Didingola",
        type: "Stay",
        displayDates: ["2013-07-23", "2013-07-24", "2013-07-25"],
        filterDates: [ { start: "2013-07-23T14:00", end: "2013-07-24T09:00" }, { start: "2013-07-24T17:00", end: "2013-07-26T09:15" } ],
        location: { lat: 40.990778, lon: 41.220475 }
    },
    {
        key: "didingola-adali-gol",
        name: "Didingola Adalı Göl Yürüyüşü",
        type: "Travel",
        displayDates: ["2013-07-24"],
        filterDates: [ { start: "2013-07-24T09:00", end: "2013-07-24T12:15" }, { start: "2013-07-24T15:00", end: "2013-07-24T17:00" } ],
        path: paths["didingola-adali-gol"]
    },
    {
        key: "adali-gol-pansiyon",
        name: "Adalı Göl Pansiyon",
        type: "Eat",
        displayDates: ["2013-07-24"],
        filterDates: [ { start: "2013-07-24T12:15", end: "2013-07-24T15:00" } ],
        location: { lat: 41.003611, lon: 41.192222 }
    },
    {
        key: "didingola-dadala",
        name: "Didingola -> Dadala",
        type: "Travel",
        displayDates: ["2013-07-26"],
        filterDates: [ { start: "2013-07-26T09:15", end: "2013-07-26T11:00" }, { start: "2013-07-26T11:45", end: "2013-07-26T14:00" } ],
        path: paths["didingola-dadala"]
    },
    {
        key: "buyuk-gol",
        name: "Büyük Göl",
        type: "Swim",
        displayDates: ["2013-07-26"],
        filterDates: [ { start: "2013-07-26T11:00", end: "2013-07-26T11:45" } ],
        location: { lat: 40.969861, lon: 41.222703 }
    },
    {
        key: "dadala",
        name: "Dadala",
        type: "Stay",
        displayDates: ["2013-07-26"],
        filterDates: [ { start: "2013-07-26T14:00", end: "2013-07-27T09:30" } ],
        location: { lat: 40.962933, lon: 41.224633 }
    },
    {
        key: "dadala-avusor",
        name: "Dadala -> Avusor",
        type: "Travel",
        displayDates: ["2013-07-27"],
        filterDates: [ { start: "2013-07-27T09:30", end: "2013-07-27T12:30" } ],
        path: paths["dadala-avusor"]
    },
    {
        key: "avusor",
        name: "Avusor",
        type: "Eat",
        displayDates: ["2013-07-27"],
        filterDates: [ { start: "2013-07-27T12:30", end: "2013-07-27T14:00" } ],
        location: { lat: 40.950892, lon: 41.189094 }
    },
    {
        key: "oberj-2",
        name: "Oberj",
        type: "Stay",
        displayDates: ["2013-07-28"],
        filterDates: [ { start: "2013-07-27T18:00", end: "2013-07-28T14:00" } ],
        location: { lat: 40.95205, lon: 41.10938 }
    },
]
