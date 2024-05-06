
export const load = async (loadEvent) => {
    console.log("LOAD POSTS!!!");
    const { fetch } = loadEvent;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await response.json();
    return {
        posts,
    };
    
};