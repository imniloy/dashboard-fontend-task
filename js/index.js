const expense_graph = document.getElementById("expense_graph")

const graph_data = [
    {
        id: 1,
        height: '35px',
        color: "#D0E4FF"
    },
    {
        id: 2,
        height: '52px',
        color: "#D0E4FF"
    },
    {
        id: 3,
        height: '44px',
        color: "#D0E4FF"
    },
    {
        id: 4,
        height: '27px',
        color: "#D0E4FF"
    },

    {
        id: 5,
        height: '35px',
        color: "#D0E4FF"
    },
    {
        id: 6,
        height: '30px',
        color: "#D0E4FF"
    },

    {
        id: 7,
        height: '44px',
        color: "#D0E4FF"
    },

    {
        id: 8,
        height: '27px',
        color: "#D0E4FF"
    },

    {
        id: 9,
        height: '35px',
        color: "#D0E4FF"
    },

    {
        id: 10,
        height: '52px',
        color: "#D0E4FF"
    },
    {
        id: 11,
        height: '44px',
        color: "#D0E4FF"
    },

    {
        id: 12,
        height: '27px',
        color: "#D0E4FF"
    },

    {
        id: 13,
        height: '35px',
        color: "#D0E4FF"
    },

    {
        id: 14,
        height: '30px',
        color: "#D0E4FF"
    },
    {
        id: 15,
        height: '44px',
        color: "#D0E4FF"
    },
    {
        id: 16,
        height: '27px',
        color: "#D0E4FF"
    },
    {
        id: 17,
        height: '35px',
        color: "#D0E4FF"
    },

    {
        id: 18,
        height: '52px',
        color: "#D0E4FF"
    },
    {
        id: 19,
        height: '44px',
        color: "#D0E4FF"
    },

    {
        id: 20,
        height: '27px',
        color: "#D0E4FF"
    },
    {
        id: 21,
        height: '35px',
        color: "#D0E4FF"
    },
    {
        id: 22,
        height: '60px',
        color: "#157AFF"
    },
    {
        id: 23,
        height: '44px',
        color: "#D0E4FF"
    }
];


let html = ``

for (let i = 0; i < graph_data.length; i++) {
    html = html + `<div
    style="height: ${graph_data[i].height}; background-color: ${graph_data[i].color}"
    class="w-5 2xl:w-6"
  ></div>`
}


 
expense_graph.innerHTML = html