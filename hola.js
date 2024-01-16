document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blogPosts');

    // Datos simulados de los artículos (puedes obtener estos datos de un servidor o base de datos)
    const blogPosts = [
        { title: 'El Arte de la Creatividad', content: 'La creatividad es una fuerza poderosa que impulsa la innovación y la expresión personal...', author: 'Juan Pérez' },
        { title: 'Descubriendo la Naturaleza', content: 'Sumérgete en la belleza de la naturaleza y descubre la serenidad que ofrece...', author: 'María Gómez' }
        // Puedes agregar más artículos según sea necesario
    ];

    // Crear elementos HTML para cada artículo y agregarlos al contenedor
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p class="author">Por: ${post.author}</p>
        `;
        blogPostsContainer.appendChild(article);
    });
});
