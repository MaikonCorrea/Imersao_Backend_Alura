import express from "express";
const posts = [
    {
        id: 1,
        descricao: "Post 1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Post 2 sobre gatos",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatos fofinhos",
        imagem: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 4,
        descricao: "Meu gato fazendo careta",
        imagem: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 5,
        descricao: "Gato preto",
        imagem: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 6,
        descricao: "Gato ronronando",
        imagem: "https://loremflickr.com/320/240/kitten"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

function getPostById(id) {
    return posts.findIndex( (post) => {
        return post.id === Number(id);
    });
}


app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


app.get("/posts/:id", (req, res) => {
    const index = getPostById(req.params.id);
    res.status(200).json(posts[index]);
});






