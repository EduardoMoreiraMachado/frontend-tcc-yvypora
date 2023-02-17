export const loadPosts = async () => {
    // fetch da api com os dados de produto
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    // fetch da api com as fotos
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    // variável para guardar os objetos da api
    const [posts, photos] = await Promise.all([postResponse, photosResponse]);
    // variáveis que convertem os objetos da api para json
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    // atrelando os posts da api de posts com as fotos da api de fotos
    // adiciona mais uma chave em cada objeto da api de posts para a url da foto da api de fotos
    const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos
}